import { getUserByEmail } from "@/db/sql/read";
import { ERR_INVALID_CREDENTIALS, ERR_USER_NOT_FOUND } from "@/lib/error";
import { comparePassword, generateToken } from "@/lib/user/auth";
import { GraphQLError } from "graphql";
import type { QueryResolvers } from "./../../../types.generated";
export const login: NonNullable<QueryResolvers["login"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  let user = await getUserByEmail(_ctx.db, _arg.email);
  if (!user) {
    throw new GraphQLError(ERR_USER_NOT_FOUND, {
      extensions: {
        isShowed: true,
      },
    });
  }
  const isPasswordValid = await comparePassword(
    _arg.password,
    user.hashedPassword,
  );
  if (!isPasswordValid) {
    throw new GraphQLError(ERR_INVALID_CREDENTIALS, {
      extensions: {
        isShowed: true,
      },
    });
  }

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
