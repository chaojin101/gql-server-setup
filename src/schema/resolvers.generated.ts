/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { register as Mutation_register } from "./user/resolvers/Mutation/register";
import { login as Query_login } from "./user/resolvers/Query/login";
export const resolvers: Resolvers = {
  Query: { login: Query_login },
  Mutation: { register: Mutation_register },
};
