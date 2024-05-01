import { yoga } from "@/server";
import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { type ExecutionResult, print } from "graphql";

export async function executeOperation<TResult, TVariables>(
  operation: TypedDocumentNode<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<{ response: Response; result: ExecutionResult<TResult> }> {
  const response = await yoga.fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: print(operation),
      variables: variables ?? undefined,
    }),
  });
  const result = (await response.json()) as ExecutionResult<TResult>;
  return {
    response,
    result,
  };
}

export async function executeOperationH<TResult, TVariables>(
  operation: TypedDocumentNode<TResult, TVariables>,
  headers: HeadersInit,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<{ response: Response; result: ExecutionResult<TResult> }> {
  console.log("headers", headers);
  const response = await yoga.fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: print(operation),
      variables: variables ?? undefined,
    }),
  });
  const result = (await response.json()) as ExecutionResult<TResult>;
  return {
    response,
    result,
  };
}

export const genHeaders = (token: string = "") => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    cookie: `token=${token}`,
  };
};
