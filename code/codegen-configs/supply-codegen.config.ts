import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/graphql-definitions/supply/schema.graphqls',
  documents: 'src/graphql-definitions/supply/**/*.graphql',
  generates: {
    'src/lodging-connectivity/supply/__generated__/types.ts': {
      plugins: [
        'typescript'
      ]
    },
    'src/lodging-connectivity/supply/__generated__/operations.ts': {
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
