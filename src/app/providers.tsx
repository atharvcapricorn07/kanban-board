"use client";

import { ReactNode } from "react";
import { NhostReactProvider, NhostApolloProvider } from "@nhost/nhost-react";
import nhost from "./nhost";
import { apolloClient } from "./apollo";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NhostReactProvider nhost={nhost}>
      <NhostApolloProvider nhost={nhost} client={apolloClient}>
        {children}
      </NhostApolloProvider>
    </NhostReactProvider>
  );
}
