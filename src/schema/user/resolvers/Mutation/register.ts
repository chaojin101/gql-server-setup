import { getUserByEmail } from "@/db/sql/read";
import { addUser } from "@/db/sql/write";
import { ERR_USER_ALREADY_EXISTS } from "@/lib/error";
import { generateToken, hashPassword } from "@/lib/user/auth";
import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const register: NonNullable<MutationResolvers["register"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  let user = await getUserByEmail(_ctx.db, _arg.email);
  if (user) {
    throw new GraphQLError(ERR_USER_ALREADY_EXISTS, {
      extensions: {
        isShowed: true,
      },
    });
  }
  const hashedPassword = await hashPassword(_arg.password);
  user = await addUser(_ctx.db, {
    email: _arg.email,
    hashedPassword,
    name: _arg.email,
  });
  const token = generateToken({
    userId: user.id,
    email: user.email,
    name: user.name,
  });
  _ctx.request.cookieStore?.set("Set-Cookie", `token=${token}`);
  return {
    token,
  };
};
