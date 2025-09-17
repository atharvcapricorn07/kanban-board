'use client';

import React from 'react';
import { NhostNextProvider } from '@nhost/nextjs';
import nhost from './nhost'; // ✅ default import

export default function NhostWrapper({ children }: { children: React.ReactNode }) {
  return <NhostNextProvider nhost={nhost}>{children}</NhostNextProvider>;
}
