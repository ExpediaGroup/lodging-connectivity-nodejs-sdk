import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/graphql-definitions/sandbox/schema.graphqls',
  documents: 'src/graphql-definitions/sandbox/**/*.graphql',
  generates: {
    'src/lodging-connectivity/sandbox/__generated__/types.ts': {
      plugins: [
        'typescript'
      ]
    },
    'src/lodging-connectivity/sandbox/__generated__/operations.ts': {
      preset: 'import-types',
      presetConfig: {
        typesPath: './types'
      },
      plugins: [
        'typescript-operations',
        'typed-document-node'
      ]
    }
  }
};

export default config;
