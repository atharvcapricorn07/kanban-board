"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useParams } from "next/navigation";
import { gql, useQuery, useMutation, useSubscription } from "@apollo/client";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import Link from "next/link";

// ---------- GraphQL ----------
const GET_BOARD = gql`
  query GetBoard($boardId: uuid!) {
    boards_by_pk(id: $boardId) {
      id
      title
      columns(order_by: { position: asc }) {
        id
        title
        position
        cards(order_by: { position: asc }) {
          id
          title
          position
          column_id
        }
      }
    }
  }
`;

const ON_BOARD_UPDATED = gql`
  subscription OnBoardUpdated($boardId: uuid!) {
    boards_by_pk(id: $boardId) {
      id
      title
      columns(order_by: { position: asc }) {
        id
        title
        position
        cards(order_by: { position: asc }) {
          id
          title
          position
          column_id
        }
      }
    }
  }
`;

const CREATE_COLUMN = gql`
  mutation CreateColumn($boardId: uuid!, $title: String!, $position: Int!) {
    insert_columns_one(object: { board_id: $boardId, title: $title, position: $position }) {
      id
      title
      position
      cards {
        id
        title
        position
        column_id
      }
    }
  }
`;

const DELETE_COLUMN = gql`
  mutation DeleteColumn($id: uuid!) {
    delete_columns_by_pk(id: $id) {
      id
    }
  }
`;

const CREATE_CARD = gql`
  mutation CreateCard($columnId: uuid!, $title: String!, $position: Int!) {
    insert_cards_one(object: { column_id: $columnId, title: $title, position: $position }) {
      id
      title
      position
      column_id
    }
  }
`;

const DELETE_CARD = gql`
  mutation DeleteCard($id: uuid!) {
    delete_cards_by_pk(id: $id) {
      id
    }
  }
`;

const UPDATE_COLUMN_POSITION = gql`
  mutation UpdateColumnPosition($id: uuid!, $position: Int!) {
    update_columns_by_pk(pk_columns: { id: $id }, _set: { position: $position }) {
      id
      position
    }
  }
`;

const UPDATE_CARD_POSITION = gql`
  mutation UpdateCardPosition($id: uuid!, $position: Int!, $columnId: uuid!) {
    update_cards_by_pk(
      pk_columns: { id: $id }
      _set: { position: $position, column_id: $columnId }
    ) {
      id
      position
      column_id
    }
  }
`;

// ---------- Component ----------
export default function BoardPage() {
  const params = useParams();
  const boardId = params?.boardId as string;

  // subscription + query
  const { data: subscriptionData } = useSubscription(ON_BOARD_UPDATED, {
    variables: { boardId },
    skip: !boardId,
  });

  const { data: queryData, loading, error } = useQuery(GET_BOARD, {
    variables: { boardId },
    skip: !boardId,
    fetchPolicy: "network-only",
  });

  // local state
  const [columns, setColumns] = useState<any[]>([]);
  const initializedBoardRef = useRef<string | null>(null);
  const isDraggingRef = useRef(false);

  // mutations
  const [createColumn] = useMutation(CREATE_COLUMN);
  const [deleteColumn] = useMutation(DELETE_COLUMN);
  const [createCard] = useMutation(CREATE_CARD);
  const [deleteCard] = useMutation(DELETE_CARD);
  const [updateColumnPosition] = useMutation(UPDATE_COLUMN_POSITION);
  const [updateCardPosition] = useMutation(UPDATE_CARD_POSITION);

  // sanitize server board shape into safe local copy
  const sanitizeBoard = useCallback((boardData: any) => {
    if (!boardData?.columns) return [];
    return boardData.columns.map((col: any) => ({ ...col, cards: col.cards ? [...col.cards] : [] }));
  }, []);

  // initial load once per board
  useEffect(() => {
    const boardData = queryData?.boards_by_pk;
    if (!boardData?.columns) return;
    if (initializedBoardRef.current === boardId) return;
    setColumns(sanitizeBoard(boardData));
    initializedBoardRef.current = boardId;
  }, [queryData, boardId, sanitizeBoard]);

  // live subscription updates — skip while user is dragging
  useEffect(() => {
    const boardData = subscriptionData?.boards_by_pk;
    if (!boardData?.columns) return;
    if (isDraggingRef.current) return;
    setColumns(sanitizeBoard(boardData));
  }, [subscriptionData, sanitizeBoard]);

  // helpers
  const reorder = <T,>(list: T[], startIndex: number, endIndex: number): T[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragStart = useCallback(() => {
    isDraggingRef.current = true;
  }, []);

  // droppableId format: "column-<id>"
  const parseColumnId = (droppableId: string) => droppableId.replace(/^column-/, "");

  const onDragEnd = useCallback(
    async (result: DropResult) => {
      // always clear dragging flag when drag ends (safe guard)
      isDraggingRef.current = false;

      const { source, destination, type } = result;
      if (!destination) return;

      // COLUMN drag: reorder columns horizontally
      if (type === "COLUMN") {
        try {
          const newColumns = reorder(columns, source.index, destination.index).map((c, i) => ({
            ...c,
            position: i,
          }));
          setColumns(newColumns);

          // optimistic updates to server
          await Promise.all(
            newColumns.map((col) =>
              updateColumnPosition({
                variables: { id: col.id, position: col.position },
                optimisticResponse: {
                  update_columns_by_pk: { __typename: "columns", id: col.id, position: col.position },
                },
              }).catch((e) => console.error("updateColumnPosition failed", e))
            )
          );
        } catch (e) {
          console.error("COLUMN drag failed", e);
        }
        return;
      }

      // CARD drag: source/destination droppableIds are "column-<id>"
      try {
        const sourceColId = parseColumnId(source.droppableId);
        const destColId = parseColumnId(destination.droppableId);
        const startCol = columns.find((c) => String(c.id) === sourceColId);
        const endCol = columns.find((c) => String(c.id) === destColId);
        if (!startCol || !endCol) return;

        // same column reorder
        if (startCol.id === endCol.id) {
          const newCards = reorder(startCol.cards, source.index, destination.index);
          const newColumns = columns.map((c) => (c.id === startCol.id ? { ...c, cards: newCards } : c));
          setColumns(newColumns);

          await Promise.all(
            newCards.map((card: any, i: number) =>
              updateCardPosition({
                variables: { id: card.id, position: i, columnId: startCol.id },
                optimisticResponse: {
                  update_cards_by_pk: {
                    __typename: "cards",
                    id: card.id,
                    position: i,
                    column_id: startCol.id,
                  },
                },
              }).catch((e) => console.error("updateCardPosition failed", e))
            )
          );
        } else {
          // moving between columns
          const startCards = Array.from(startCol.cards);
          const [moved] = startCards.splice(source.index, 1);

          const endCards = Array.from(endCol.cards);
          endCards.splice(destination.index, 0, moved);

          const newColumns = columns.map((c) => {
            if (c.id === startCol.id) return { ...c, cards: startCards };
            if (c.id === endCol.id) return { ...c, cards: endCards };
            return c;
          });

          setColumns(newColumns);

          // update positions in both columns
          await Promise.all([
            ...startCards.map((card: any, i: number) =>
              updateCardPosition({
                variables: { id: card.id, position: i, columnId: startCol.id },
                optimisticResponse: {
                  update_cards_by_pk: { __typename: "cards", id: card.id, position: i, column_id: startCol.id },
                },
              }).catch((e) => console.error("updateCardPosition failed", e))
            ),
            ...endCards.map((card: any, i: number) =>
              updateCardPosition({
                variables: { id: card.id, position: i, columnId: endCol.id },
                optimisticResponse: {
                  update_cards_by_pk: { __typename: "cards", id: card.id, position: i, column_id: endCol.id },
                },
              }).catch((e) => console.error("updateCardPosition failed", e))
            ),
          ]);
        }
      } catch (e) {
        console.error("CARD drag failed", e);
      } finally {
        isDraggingRef.current = false;
      }
    },
    [columns, updateColumnPosition, updateCardPosition]
  );

  // CRUD handlers
  const handleAddColumn = async () => {
    const title = prompt("Column title");
    if (!title) return;
    const position = columns.length;
    try {
      const res: any = await createColumn({ variables: { boardId, title, position } });
      const col = res?.data?.insert_columns_one;
      if (col) setColumns((prev) => [...prev, { ...col, cards: col.cards ?? [] }]);
    } catch (e) {
      console.error(e);
      alert("Failed to create column");
    }
  };

  const handleDeleteColumn = async (id: string) => {
    if (!confirm("Delete this column?")) return;
    try {
      await deleteColumn({ variables: { id } });
      setColumns((prev) => prev.filter((c) => c.id !== id));
    } catch (e) {
      console.error(e);
      alert("Failed to delete column");
    }
  };

  const handleAddCard = async (columnId: string) => {
    const title = prompt("Card title");
    if (!title) return;
    const col = columns.find((c) => c.id === columnId);
    const position = col?.cards?.length ?? 0;
    try {
      const res: any = await createCard({ variables: { columnId, title, position } });
      const card = res?.data?.insert_cards_one;
      if (card) setColumns((prev) => prev.map((c) => (c.id === columnId ? { ...c, cards: [...c.cards, card] } : c)));
    } catch (e) {
      console.error(e);
      alert("Failed to create card");
    }
  };

  const handleDeleteCard = async (id: string) => {
    if (!confirm("Delete this card?")) return;
    try {
      await deleteCard({ variables: { id } });
      setColumns((prev) => prev.map((c) => ({ ...c, cards: c.cards.filter((card: any) => card.id !== id) })));
    } catch (e) {
      console.error(e);
      alert("Failed to delete card");
    }
  };

  // UI values
  const boardTitle = subscriptionData?.boards_by_pk?.title ?? queryData?.boards_by_pk?.title ?? "Board";
  const hasError = Boolean(error);

  // ---------- Render ----------
  // NOTE: Do NOT short-circuit return early — we must always render the DragDropContext/Droppable
  // so react-beautiful-dnd can register the "board" droppable. We display loading/error inline instead.
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
  <h1 className="text-xl font-bold">
    {subscriptionData?.boards_by_pk?.title ?? queryData?.boards_by_pk?.title}
  </h1>
  <div className="flex gap-2">
    {/* Button to go back to board list */}
    <Link href="/boards">
      <button className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600">
        ← All Boards
      </button>
    </Link>

    <button
      onClick={handleAddColumn}
      className="px-3 py-1 bg-green-600 text-white rounded"
    >
      + Add Column
    </button>
  </div>
</div>
      

      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        {/* Board droppable always present. min-h buffer prevents "cannot find droppable" when empty */}
        <Droppable
          droppableId="board"
          direction="horizontal"
          type="COLUMN"
          isDropDisabled={false}
          isCombineEnabled={false}
          ignoreContainerClipping={false}
        >
          {(boardProvided) => (
            <div
              className="flex gap-4 min-h-[140px] items-start" // explicit min height ensures droppable registration
              ref={boardProvided.innerRef}
              {...boardProvided.droppableProps}
            >
              {/* Render columns (may be empty) */}
              {columns.map((col, colIndex) => {
                const colDraggableId = `column-${col.id}`;
                const cardDroppableId = `column-${col.id}`; // droppable id for cards

                return (
                  <Draggable key={colDraggableId} draggableId={colDraggableId} index={colIndex}>
                    {(colProvided) => (
                      <div
                        ref={colProvided.innerRef}
                        {...colProvided.draggableProps}
                        className="bg-gray-100 p-4 rounded w-64 flex-shrink-0"
                      >
                        {/* Column header is the drag handle */}
                        <div className="flex justify-between items-center mb-2" {...colProvided.dragHandleProps}>
                          <h2 className="font-semibold text-black">{col.title}</h2>
                          <div className="flex items-center gap-2">
                            <button onClick={() => handleAddCard(col.id)} className="px-2 py-1 text-white bg-blue-500 rounded text-sm">
                              + Card
                            </button>
                            <button onClick={() => handleDeleteColumn(col.id)} className="px-2 py-1 text-red-600 font-bold">
                              ✕
                            </button>
                          </div>
                        </div>

                        

                        {/* Card list droppable */}
                        <Droppable
                          droppableId={cardDroppableId}
                          type="CARD"
                          isDropDisabled={false}
                          isCombineEnabled={false}
                          ignoreContainerClipping={false}
                        >
                          {(cardsProvided) => (
                            <div
                              ref={cardsProvided.innerRef}
                              {...cardsProvided.droppableProps}
                              className="space-y-2 min-h-[80px]"
                            >
                              {col.cards.map((card: any, cardIndex: number) => {
                                const cardDraggableId = `card-${card.id}`;
                                return (
                                  <Draggable key={cardDraggableId} draggableId={cardDraggableId} index={cardIndex}>
                                    {(cardProvided) => (
                                      <div
                                        ref={cardProvided.innerRef}
                                        {...cardProvided.draggableProps}
                                        {...cardProvided.dragHandleProps}
                                        className="bg-white p-2 rounded shadow flex justify-between items-center"
                                      >
                                        <span className="text-black">{card.title}</span>
                                        <button className="text-red-500 font-bold ml-2" onClick={() => handleDeleteCard(card.id)}>
                                          ✕
                                        </button>
                                      </div>
                                    )}
                                  </Draggable>
                                );
                              })}
                              {cardsProvided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </div>
                    )}
                  </Draggable>
                );
              })}

              {/** board placeholder keeps layout during dragging */}
              {boardProvided.placeholder}

              {/** Buffer element at end to prevent cramped drag when last column is narrow */}
              <div style={{ width: 16, minWidth: 16 }} aria-hidden />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
