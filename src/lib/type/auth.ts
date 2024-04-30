import { JwtPayload } from "jsonwebtoken";

export type TokenPayload = {
  userId: string;
  email: string;
  name: string;
} & JwtPayload;
