import { faker } from "@faker-js/faker";
import setCookieParser from "set-cookie-parser";
import { executeOperation } from ".";
import { gql } from "./__generated__";

export const extractToken = (response: Response) => {
  const cookies = setCookieParser(response.headers.get("Set-Cookie") || "");
  return cookies.find((cookie) => cookie.name === "token")?.value;
};

export const gqlRegister = async (
  email: string = randomEmail(),
  password: string = randomPassword(),
) => {
  const mutation = gql(`
          mutation Register($email: String!, $password: String!) {
            register(email: $email, password: $password) {
              token
            }
          }
        `);

  return await executeOperation(mutation, {
    email,
    password,
  });
};

export const randomEmail = () => {
  return faker.internet.email();
};

export const randomPassword = () => {
  return faker.internet.password();
};

export const gqlLogin = async (email: string, password: string) => {
  const query = gql(`
    query Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `);

  return await executeOperation(query, {
    email,
    password,
  });
};
