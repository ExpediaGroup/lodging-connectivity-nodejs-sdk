import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/graphql-definitions/payment/schema.json',
  documents: 'src/graphql-definitions/payment/(operations|fragments)/**/*.graphql',
  generates: {
    'src/lodging-connectivity/payment/__generated__/types.ts': {
      plugins: [
        'typescript'
      ]
    },
    'src/lodging-connectivity/payment/__generated__/operations.ts': {
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
