'use client';

import React, { useEffect, useState } from 'react';
import nhost from '@/lib/nhost';

export default function TestNhost() {
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const session = await nhost.auth.getSession();
        const token = await nhost.auth.getAccessToken();
        const user = await nhost.auth.getUser();

        console.log('[TEST] Session:', session);
        console.log('[TEST] Token:', token);
        console.log('[TEST] User:', user);

        setInfo(
          `Session: ${session ? '✔️' : '❌'}\n` +
          `Token: ${token ? token.slice(0, 10) + '…' : '❌'}\n` +
          `User: ${user ? user.email : '❌'}`
        );
      } catch (e) {
        console.error('[TEST] Error fetching Nhost info:', e);
        setInfo('Error fetching session/token/user. Check console.');
      }
    })();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif', whiteSpace: 'pre-wrap' }}>
      <h1>Nhost Session Test</h1>
      {info || 'Loading…'}
    </div>
  );
}
