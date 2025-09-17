"use client";

import { ApolloClient, InMemoryCache, HttpLink, from, split } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import nhost from "./nhost"; // ✅ default import

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}`
      )
    );
  }
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL!,
  fetch: async (uri, options) => {
    const token = await nhost.auth.getAccessToken();
    console.debug("[DEBUG] HTTP fetch token:", token);
    return fetch(uri, {
      ...options,
      headers: {
        ...(options?.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
  },
});

let wsLink: GraphQLWsLink | null = null;
if (typeof window !== "undefined") {
  wsLink = new GraphQLWsLink(
    createClient({
      url: process.env.NEXT_PUBLIC_GRAPHQL_WS_URL!,
      connectionParams: async () => {
        const token = await nhost.auth.getAccessToken();
        console.debug("[DEBUG] WS connection token:", token);
        return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
      },
      lazy: true,
      retryAttempts: 5,
    })
  );
}

const splitLink =
  typeof window !== "undefined" && wsLink
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

const client = new ApolloClient({
  link: from([errorLink, splitLink]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
