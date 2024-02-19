import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/graphql",
  documents: "./src/queries/*.graphql",
  ignoreNoDocuments: false,
  generates: {
    "src/generated/graphql.ts": {
      config: { withHooks: true },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-urql"
      ]
    }
  },
};

export default config;
