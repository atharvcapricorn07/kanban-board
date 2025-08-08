import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
schema: 'https://usghmpgzwzhisualqohs.nhost.app/v1/graphql',
  documents: ['src/**/*.graphql'], // ✅ picks up queries anywhere in src
  generates: {
    './src/graphql/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        withHooks: true,          // ✅ generate React hooks
        withHOC: false,
        withComponent: false
      }
    }
  }
};

export default config;
