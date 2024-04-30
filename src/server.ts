import { db } from "@/db";
import { PORT } from "@/lib/constant";
import { GraphqlContext } from "@/schema/context";
import { resolvers } from "@/schema/resolvers.generated";
import { typeDefs } from "@/schema/typeDefs.generated";
import { useCookies } from "@whatwg-node/server-plugin-cookies";
import { GraphQLError } from "graphql";
import { createSchema, createYoga, maskError } from "graphql-yoga";
import { createServer } from "http";

const schema = createSchema<GraphqlContext>({
  typeDefs,
  resolvers,
});

export const yoga = createYoga<GraphqlContext>({
  schema,
  context: async ({ request }) => {
    return {
      db,
    };
  },
  plugins: [useCookies()],
  maskedErrors: {
    maskError(error: GraphQLError, message, isDev) {
      if (error?.extensions?.isShowed) {
        return error;
      }

      return maskError(error, message, isDev);
    },
  },
  renderGraphiQL: () => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <body style="margin: 0; overflow-x: hidden; overflow-y: hidden">
        <div id="sandbox" style="height:100vh; width:100vw;"></div>
        <script src="https://embeddable-sandbox.cdn.apollographql.com/_latest/embeddable-sandbox.umd.production.min.js"></script>
        <script>
        new window.EmbeddedSandbox({
          target: "#sandbox",
          // Pass through your server href if you are embedding on an endpoint.
          // Otherwise, you can pass whatever endpoint you want Sandbox to start up with here.
          initialEndpoint: "http://localhost:${PORT}/graphql",
        });
        // advanced options: https://www.apollographql.com/docs/studio/explorer/sandbox#embedding-sandbox
        </script>
        </body>
      </html>`;
  },
});

export const server = createServer(yoga);
