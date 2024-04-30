import { eq } from "drizzle-orm";
import { DB, db as db1 } from "..";
import { user } from "../schema";

export const getUserByEmail = async (db: DB, email: string) => {
  const userDB = await db1.query.user.findFirst({
    where: eq(user.email, email),
  });
  return userDB;
};
