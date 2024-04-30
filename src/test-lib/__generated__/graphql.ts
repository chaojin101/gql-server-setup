/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token: Scalars["String"]["output"];
};

export type Collection = {
  __typename?: "Collection";
  createdAt?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  imgs: Array<Img>;
  name: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type Gallery = {
  __typename?: "Gallery";
  createdAt: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  imgs: Array<Img>;
  name: Scalars["String"]["output"];
  tags: Array<GalleryTag>;
  updatedAt: Scalars["String"]["output"];
};

export enum GallerySort {
  CreatedAtAsc = "CREATED_AT_ASC",
  CreatedAtDesc = "CREATED_AT_DESC",
}

export type GalleryTag = {
  __typename?: "GalleryTag";
  galleries: Array<Gallery>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type Img = {
  __typename?: "Img";
  id: Scalars["ID"]["output"];
  order?: Maybe<Scalars["Int"]["output"]>;
  url: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  addCollection: Collection;
  addGallery: Gallery;
  addGalleryTag: GalleryTag;
  register: AuthPayload;
  tagGallery: Gallery;
  untagGallery: Gallery;
  updateCollection: Collection;
};

export type MutationAddCollectionArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

export type MutationAddGalleryArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  imgUrls: Array<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  tags: Array<Scalars["String"]["input"]>;
};

export type MutationAddGalleryTagArgs = {
  name: Scalars["String"]["input"];
};

export type MutationRegisterArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationTagGalleryArgs = {
  galleryId: Scalars["ID"]["input"];
  tagId: Scalars["ID"]["input"];
};

export type MutationUntagGalleryArgs = {
  galleryId: Scalars["ID"]["input"];
  tagId: Scalars["ID"]["input"];
};

export type MutationUpdateCollectionArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  id: Scalars["ID"]["input"];
  imgId: Array<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  collection: Gallery;
  collections: Array<Gallery>;
  galleries: Array<Gallery>;
  gallery: Gallery;
  galleryTags: Array<GalleryTag>;
  login: AuthPayload;
};

export type QueryCollectionArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCollectionsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<GallerySort>;
};

export type QueryGalleriesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<GallerySort>;
};

export type QueryGalleryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryLoginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type MutationMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type MutationMutation = {
  __typename?: "Mutation";
  register: { __typename?: "AuthPayload"; token: string };
};

export type QueryQueryVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type QueryQuery = {
  __typename?: "Query";
  login: { __typename?: "AuthPayload"; token: string };
};

export const MutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "Mutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "register" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "email" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "password" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "password" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "token" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;
export const QueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Query" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "login" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "email" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "email" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "password" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "password" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "token" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
