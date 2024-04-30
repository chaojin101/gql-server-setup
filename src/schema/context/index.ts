import { DB } from "@/db";
import { YogaInitialContext } from "graphql-yoga";
import { User } from "../types.generated";

export type GraphqlContext = {
  user?: User;
  db: DB;
};

export type ResolverContext = GraphqlContext & YogaInitialContext;
