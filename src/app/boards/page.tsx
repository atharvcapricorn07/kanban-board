// src/app/boards/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import nhost from '@/lib/nhost';
import {
  useGetBoardsQuery,
  useCreateBoardMutation,
  useUpdateBoardMutation,
  useDeleteBoardMutation,
} from '@/graphql/generated/graphql';

const TEST_EMAIL = 'atharv.capricorn07@gmail.com';
// Replace with real password or env var
const TEST_PASSWORD = (process.env.NEXT_PUBLIC_TEST_PASSWORD as string) || 'Askale072010#';

export default function BoardsPage() {
  const { data, loading, error, refetch } = useGetBoardsQuery();
  const [createBoard, { loading: creating, error: createError }] = useCreateBoardMutation();
  const [updateBoard, { loading: updating, error: updateError }] = useUpdateBoardMutation();
  const [deleteBoard, { loading: deleting, error: deleteError }] = useDeleteBoardMutation();

  const [newTitle, setNewTitle] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  const [sessionReady, setSessionReady] = useState(false);
  const [userSession, setUserSession] = useState<any>(null);
  const [userToken, setUserToken] = useState<string | null>(null);

  // Wait for Nhost session to initialize (auto-sign-in test user silently)
  useEffect(() => {
    (async () => {
      try {
        let session = await nhost.auth.getSession();
        console.log('[DEBUG] initial nhost.getSession():', session);

        if (!session) {
          console.log('[DEBUG] No session found — attempting test sign-in for', TEST_EMAIL);

          let signInResult;
          try {
            signInResult = await nhost.auth.signIn({ email: TEST_EMAIL, password: TEST_PASSWORD });
          } catch (err) {
            console.error('[DEBUG] signIn threw:', err);
            signInResult = { error: err };
          }

          console.log('[DEBUG] signIn result:', signInResult);

          if (signInResult?.error) {
            console.warn('[DEBUG] Auto sign-in failed, continuing without red error.');

            // Optional: try silent sign-up for local testing
            try {
              const signUpResult = await nhost.auth.signUp({ email: TEST_EMAIL, password: TEST_PASSWORD });
              console.log('[DEBUG] Auto sign-up result:', signUpResult);
              if (!signUpResult?.error) {
                await nhost.auth.signIn({ email: TEST_EMAIL, password: TEST_PASSWORD });
              }
            } catch (signUpErr) {
              console.warn('[DEBUG] Auto sign-up threw error, ignoring for UI:', signUpErr);
            }
          }
        }

        // Refresh session, token, user
        session = await nhost.auth.getSession();
        const token = await nhost.auth.getAccessToken();
        const user = await nhost.auth.getUser();

        setUserSession(session ?? null);
        setUserToken(token ?? null);
        setSessionReady(true);

        console.log('[DEBUG] nhost session present?', !!session);
        console.log('[DEBUG] nhost token present?', !!token);
        console.log('[DEBUG] Session object:', session);
        console.log('[DEBUG] User object:', user);
      } catch (e) {
        console.error('[DEBUG] nhost init error', e);
        setSessionReady(true); // allow UI to render even if session fails
      }
    })();
  }, []);

  // --- CRUD handlers ---

  async function handleCreate() {
    setLocalError(null);
    if (!newTitle.trim()) {
      setLocalError('Title is required');
      return;
    }
    try {
      const result = await createBoard({ variables: { title: newTitle } });
      console.log('[DEBUG] Create mutation result:', result);
      setNewTitle('');
      await refetch();
    } catch (e: any) {
      console.error('[DEBUG] Create failed', e);
      setLocalError(e?.message ?? 'Create failed');
    }
  }

  async function handleUpdate(id: string) {
    setLocalError(null);
    if (!editingTitle.trim()) {
      setLocalError('Title is required');
      return;
    }
    try {
      const result = await updateBoard({ variables: { id, title: editingTitle } });
      console.log('[DEBUG] Update mutation result:', result);
      setEditingId(null);
      setEditingTitle('');
      await refetch();
    } catch (e: any) {
      console.error('[DEBUG] Update failed', e);
      setLocalError(e?.message ?? 'Update failed');
    }
  }

  async function handleDelete(rawId: string) {
    setLocalError(null);
    if (!confirm('Delete this board?')) return;

    const cleanId = rawId.match(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
    )?.[0];

    if (!cleanId) {
      setLocalError('Invalid board ID');
      return;
    }

    if (!userToken) {
      console.error('[ERROR] No JWT token available, aborting delete');
      setLocalError('No valid session. Please log in again.');
      return;
    }

    try {
      const result = await deleteBoard({
        variables: { id: cleanId },
        context: { headers: { Authorization: `Bearer ${userToken}` } },
      });
      console.log('[DEBUG] Delete mutation result:', result);
      await refetch();
    } catch (e: any) {
      console.error('[DEBUG] Delete failed', e);
      setLocalError(e?.message ?? 'Delete failed');
    }
  }

  // --- Rendering ---

  if (loading || !sessionReady) return <p>Loading boards...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!userSession) {
    return (
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Boards</h1>
        <p className="text-red-600">You must be logged in to view and manage boards.</p>
        <Link href="/login" className="text-blue-600 underline mt-2 block">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Boards</h1>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="New board title"
          className="border p-2 flex-grow rounded"
          aria-label="New board title"
        />
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={creating}
        >
          {creating ? 'Creating…' : 'Create'}
        </button>
      </div>

      {localError && <div className="text-red-600 mb-2">{localError}</div>}
      {createError && <div className="text-red-600 mb-2">Create error: {createError.message}</div>}
      {updateError && <div className="text-red-600 mb-2">Update error: {updateError.message}</div>}
      {deleteError && <div className="text-red-600 mb-2">Delete error: {deleteError.message}</div>}

      <ul>
        {data?.boards.map((board) => (
          <li key={board.id} className="mb-3 flex items-center gap-4">
            {editingId === board.id ? (
              <>
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  className="border p-1 flex-grow rounded"
                />
                <button
                  onClick={() => handleUpdate(board.id)}
                  className="bg-green-600 text-white px-3 py-1 rounded disabled:opacity-50"
                  disabled={updating}
                >
                  {updating ? 'Saving…' : 'Save'}
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <Link href={`/boards/${board.id}`} className="text-blue-600 hover:underline flex-grow">
                  {board.title}
                </Link>
                <button
                  onClick={() => {
                    setEditingId(board.id);
                    setEditingTitle(board.title ?? '');
                    setLocalError(null);
                  }}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(board.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded disabled:opacity-50"
                  disabled={deleting}
                >
                  {deleting ? 'Deleting…' : 'Delete'}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
