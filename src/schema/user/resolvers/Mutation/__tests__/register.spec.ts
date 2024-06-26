import { ERR_USER_ALREADY_EXISTS } from "@/lib/error";
import { TokenPayload } from "@/lib/type/auth";
import { gqlRegister, randomEmail, randomPassword } from "@/test-lib/user";
import jwt from "jsonwebtoken";

describe("register", () => {
  it("success", async () => {
    const email = randomEmail();
    const password = randomPassword();
    const { result } = await gqlRegister(email, password);
    const token = result.data.register.token;
    const tokenPayload = jwt.decode(token) as TokenPayload;
    expect(tokenPayload.email).toEqual(email);
    expect(tokenPayload.name).toEqual(email);
    expect(tokenPayload.id).not.toBeNull();
  });
  it("already registered user should not be able to register again", async () => {
    const email = randomEmail();
    const password = randomPassword();
    await gqlRegister(email, password);

    const { result } = await gqlRegister(email, password);
    expect(result.errors).toHaveLength(1);
    expect(result.errors[0].message).toEqual(ERR_USER_ALREADY_EXISTS);
  });
});
