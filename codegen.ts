import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "**/schema.graphql",
  generates: {
    "src/schema": defineConfig({
      resolverGeneration: {
        query: ["user.Query.login"],
        mutation: ["user.Mutation.register"],
        subscription: "",
        scalar: "",
        object: "",
        union: "",
        interface: "",
      },
      typesPluginsConfig: {
        useIndexSignature: true,
        contextType: "./context/index#ResolverContext",
      },
    }),
  },
};
export default config;
