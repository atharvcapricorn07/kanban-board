// src/lib/apollo.ts
import { ApolloClient, InMemoryCache, createHttpLink, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import nhost from "./nhost";

const httpLink = createHttpLink({
  uri: `${nhost.graphql.url}`,
  headers: {
    "x-hasura-admin-secret": nhost.auth.adminSecret ?? "",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: nhost.graphql.url.replace("https", "ws"),
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": nhost.auth.adminSecret ?? "",
      },
    },
  })
);

// Split link: use wsLink for subscriptions, httpLink for queries/mutations
const splitLink = split(
  ({ query }) => {
    const def = getMainDefinition(query);
    return def.kind === "OperationDefinition" && def.operation === "subscription";
  },
  wsLink,
  httpLink
);

export const apolloClient = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
