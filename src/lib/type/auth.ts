import { JwtPayload } from "jsonwebtoken";

export type contextUser = {
  id: string;
  email: string;
  name: string;
};

export type TokenPayload = contextUser & JwtPayload;
