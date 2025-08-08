'use client';

import { useBoardsQuery } from '@/graphql/generated/graphql';

export default function BoardsPage() {
  const { data, loading, error } = useBoardsQuery();

  if (loading) return <p>Loading boards...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Boards</h1>
      <ul>
        {data?.boards.map(board => (
          <li key={board.id}>{board.title}</li>
        ))}
      </ul>
    </div>
  );
}
