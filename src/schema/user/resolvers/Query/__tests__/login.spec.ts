import { ERR_INVALID_CREDENTIALS, ERR_USER_NOT_FOUND } from "@/lib/error";
import { TokenPayload } from "@/lib/type/auth";
import {
  extractToken,
  gqlLogin,
  gqlRegister,
  randomEmail,
  randomPassword,
} from "@/test-lib/user";
import jwt from "jsonwebtoken";

describe("login", () => {
  it("success", async () => {
    const email = randomEmail();
    const password = randomPassword();
    await gqlRegister(email, password);
    const { response } = await gqlLogin(email, password);
    const token = extractToken(response);
    const tokenPayload = jwt.decode(token) as TokenPayload;
    expect(tokenPayload.email).toEqual(email);
    expect(tokenPayload.name).toEqual(email);
    expect(tokenPayload.userId).not.toBeNull();
  });
  it("wrong email", async () => {
    const email = randomEmail();
    const password = randomPassword();
    const { result } = await gqlLogin(email, password);
    expect(result.errors).toHaveLength(1);
    expect(result.errors[0].message).toEqual(ERR_USER_NOT_FOUND);
  });

  it("wrong password", async () => {
    const email = randomEmail();
    const password = randomPassword();
    await gqlRegister(email, password);
    const { result } = await gqlLogin(email, randomPassword());
    expect(result.errors).toHaveLength(1);
    expect(result.errors[0].message).toEqual(ERR_INVALID_CREDENTIALS);
  });
});
