// codegen.ts
/**
 * Codegen config for GraphQL Code Generator (Hasura / Nhost)
 * - Explicitly loads .env.local (and falls back to .env)
 * - Prints clear errors if required env vars are missing
 */

import path from "path";
import fs from "fs";
import dotenv from "dotenv";
import type { CodegenConfig } from "@graphql-codegen/cli";

// Try loading .env.local first, then .env
const envLocalPath = path.resolve(process.cwd(), ".env.local");
const envPath = path.resolve(process.cwd(), ".env");

if (fs.existsSync(envLocalPath)) {
  dotenv.config({ path: envLocalPath });
  console.log(`[codegen] Loaded environment from .env.local`);
} else if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
  console.log(`[codegen] Loaded environment from .env`);
} else {
  // still continue — maybe env vars are in the process env
  console.log(
    "[codegen] No .env.local or .env found. Falling back to process.env values."
  );
}

// Read required vars
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URL;
const HASURA_ADMIN_SECRET = process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET;

// Helper to mask secret in logs
function maskSecret(s?: string) {
  if (!s) return "<empty>";
  if (s.length <= 8) return "*".repeat(s.length);
  return `${s.slice(0, 4)}...${s.slice(-4)}`;
}

console.log("GRAPHQL_URL:", GRAPHQL_URL ?? "undefined");
console.log("HASURA_ADMIN_SECRET (masked):", maskSecret(HASURA_ADMIN_SECRET));

if (!GRAPHQL_URL) {
  console.error(
    "\nERROR: NEXT_PUBLIC_GRAPHQL_URL is not defined. Create a .env.local with:\n" +
      'NEXT_PUBLIC_GRAPHQL_URL="https://<your-subdomain>.hasura.<region>.nhost.run/v1/graphql"\n'
  );
  process.exit(1);
}

if (!HASURA_ADMIN_SECRET) {
  console.warn(
    "\nWARNING: NEXT_PUBLIC_HASURA_ADMIN_SECRET is not defined. If your Hasura endpoint requires admin secret for introspection, codegen will fail. Add it to .env.local as:\n" +
      'NEXT_PUBLIC_HASURA_ADMIN_SECRET="<your-admin-secret>"\n'
  );
  // don't exit; user may choose to proceed without admin secret (public schema).
}

const config: CodegenConfig = {
  schema: {
    [GRAPHQL_URL]: {
      headers: HASURA_ADMIN_SECRET
        ? {
            "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
          }
        : {},
    },
  },
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "./src/graphql/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
  },
  config: {
    skipTypename: false,
  },
  hooks: {
    afterAllFileWrite: ["npx prettier --write"],
  },
};

export default config;
