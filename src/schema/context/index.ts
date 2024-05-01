import { DB } from "@/db";
import { contextUser } from "@/lib/type/auth";
import { YogaInitialContext } from "graphql-yoga";

export type GraphqlContext = {
  user?: contextUser;
  db: DB;
};

export type ResolverContext = GraphqlContext & YogaInitialContext;
