// src/lib/ApolloWrapper.tsx
'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client'; // ✅ import from apollo-client.ts

export default function ApolloWrapper({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
