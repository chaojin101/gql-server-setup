import { DB } from "..";
import { user } from "../schema";

export const addUser = async (
  db: DB,
  values: {
    name: string;
    email: string;
    hashedPassword: string;
  },
) => {
  const users = await db.insert(user).values(values).returning();
  return users[0];
};
