# gql server setup

## features

- maintainable gql server.
- you can use '@/' import alias in your code.
- solving js module path resolution conflict problem with ts in node.
- give a standard workflow for gql server development, it can be a sample for building your own workflow.

## setup

### install dependencies

```
pnpm i
```

### config `.env` file

set database url to your own

```sh
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/gallery_app_v2?schema=public"
```

### run migrations

```
pnpm run migrate
```

choose apply changes to database

### test

```
pnpm test
```

## development workflow

we take `user module` as an example to show the development workflow.

### design GraphQL schema

create `schema.graphql` file in `src/schema/user/schema.graphql` folder, like this:

```
├── src/
│   ├── schema/
│   │   ├── base/
│   │   │   ├── schema.graphql
│   │   ├── user/
│   │   │   ├── schema.graphql
│   │   ├── book/
│   │   │   ├── schema.graphql
```

for reference: https://the-guild.dev/graphql/codegen/docs/guides/graphql-server-apollo-yoga-with-server-preset

### select specific resolvers and gen types **(only gen resolvers that you are about to implement for test happy)**

in `codegen.ts` file, field `config.generates.src/schema`

config the defineConfig's `resolverGeneration` option, this codebase has configed it.

look up this guide to see how to config it: https://github.com/eddeee888/graphql-code-generator-plugins/tree/master/packages/typescript-resolver-files#resolvergeneration

after that, gen resolvers type

```
pnpm run codegen
```

### implement resolvers

in `src/schema/user/resolvers/Mutation/register.ts` file and

in `src/schema/user/resolvers/Query/login.ts` file

implement the resolvers function, this codebase has implemented it.

### run server to manually test

```
pnpm dev
```

open `http://localhost:4000/graphql` in your browser, and test the resolvers.

### write unit tests

in `src/schema/user/resolvers/Mutation/__tests__/register.spec.ts` file,

write unit tests, this codebase has written it.

**after writing the GraphQL query or mutation, you need to run the codegen command below to generate the test client data types.**

wrap your query and mutation in `gql` function, see the example test file.

```
pnpm run codegen:test-client
```

### run tests

```
pnpm test
```

everytime you do some changes, you can run the tests to make sure you don't break anything.
