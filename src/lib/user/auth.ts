import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TokenPayload } from "../type/auth";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string,
) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const generateToken = (
  payload: TokenPayload,
  expiresIn: string = "365d",
  secret: string = process.env.JWT_SECRET,
) => {
  return jwt.sign(payload, secret, { expiresIn, algorithm: "HS256" });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret, { algorithms: ["HS256"] }) as TokenPayload;
};
