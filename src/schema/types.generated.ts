import { GraphQLResolveInfo } from "graphql";
import { ResolverContext } from "./context/index";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
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
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
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

export type GallerySort = "CREATED_AT_ASC" | "CREATED_AT_DESC";

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

export type MutationaddCollectionArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
};

export type MutationaddGalleryArgs = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  imgUrls: Array<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  tags: Array<Scalars["String"]["input"]>;
};

export type MutationaddGalleryTagArgs = {
  name: Scalars["String"]["input"];
};

export type MutationregisterArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationtagGalleryArgs = {
  galleryId: Scalars["ID"]["input"];
  tagId: Scalars["ID"]["input"];
};

export type MutationuntagGalleryArgs = {
  galleryId: Scalars["ID"]["input"];
  tagId: Scalars["ID"]["input"];
};

export type MutationupdateCollectionArgs = {
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

export type QuerycollectionArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerycollectionsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<GallerySort>;
};

export type QuerygalleriesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<GallerySort>;
};

export type QuerygalleryArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryloginArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Collection: ResolverTypeWrapper<Collection>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Gallery: ResolverTypeWrapper<Gallery>;
  GallerySort: GallerySort;
  GalleryTag: ResolverTypeWrapper<GalleryTag>;
  Img: ResolverTypeWrapper<Img>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<User>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AuthPayload: AuthPayload;
  String: Scalars["String"]["output"];
  Collection: Collection;
  ID: Scalars["ID"]["output"];
  Gallery: Gallery;
  GalleryTag: GalleryTag;
  Img: Img;
  Int: Scalars["Int"]["output"];
  Mutation: {};
  Query: {};
  User: User;
  Boolean: Scalars["Boolean"]["output"];
}>;

export type AuthPayloadResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["AuthPayload"] = ResolversParentTypes["AuthPayload"],
> = ResolversObject<{
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CollectionResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = ResolversObject<{
  createdAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  imgs?: Resolver<Array<ResolversTypes["Img"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GalleryResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Gallery"] = ResolversParentTypes["Gallery"],
> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  imgs?: Resolver<Array<ResolversTypes["Img"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes["GalleryTag"]>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GalleryTagResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["GalleryTag"] = ResolversParentTypes["GalleryTag"],
> = ResolversObject<{
  galleries?: Resolver<
    Array<ResolversTypes["Gallery"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ImgResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Img"] = ResolversParentTypes["Img"],
> = ResolversObject<{
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = ResolversObject<{
  addCollection?: Resolver<
    ResolversTypes["Collection"],
    ParentType,
    ContextType,
    RequireFields<MutationaddCollectionArgs, "name">
  >;
  addGallery?: Resolver<
    ResolversTypes["Gallery"],
    ParentType,
    ContextType,
    RequireFields<MutationaddGalleryArgs, "imgUrls" | "name" | "tags">
  >;
  addGalleryTag?: Resolver<
    ResolversTypes["GalleryTag"],
    ParentType,
    ContextType,
    RequireFields<MutationaddGalleryTagArgs, "name">
  >;
  register?: Resolver<
    ResolversTypes["AuthPayload"],
    ParentType,
    ContextType,
    RequireFields<MutationregisterArgs, "email" | "password">
  >;
  tagGallery?: Resolver<
    ResolversTypes["Gallery"],
    ParentType,
    ContextType,
    RequireFields<MutationtagGalleryArgs, "galleryId" | "tagId">
  >;
  untagGallery?: Resolver<
    ResolversTypes["Gallery"],
    ParentType,
    ContextType,
    RequireFields<MutationuntagGalleryArgs, "galleryId" | "tagId">
  >;
  updateCollection?: Resolver<
    ResolversTypes["Collection"],
    ParentType,
    ContextType,
    RequireFields<MutationupdateCollectionArgs, "id" | "imgId">
  >;
}>;

export type QueryResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = ResolversObject<{
  collection?: Resolver<
    ResolversTypes["Gallery"],
    ParentType,
    ContextType,
    RequireFields<QuerycollectionArgs, "id">
  >;
  collections?: Resolver<
    Array<ResolversTypes["Gallery"]>,
    ParentType,
    ContextType,
    RequireFields<QuerycollectionsArgs, "page" | "sort">
  >;
  galleries?: Resolver<
    Array<ResolversTypes["Gallery"]>,
    ParentType,
    ContextType,
    RequireFields<QuerygalleriesArgs, "page" | "sort">
  >;
  gallery?: Resolver<
    ResolversTypes["Gallery"],
    ParentType,
    ContextType,
    RequireFields<QuerygalleryArgs, "id">
  >;
  galleryTags?: Resolver<
    Array<ResolversTypes["GalleryTag"]>,
    ParentType,
    ContextType
  >;
  login?: Resolver<
    ResolversTypes["AuthPayload"],
    ParentType,
    ContextType,
    RequireFields<QueryloginArgs, "email" | "password">
  >;
}>;

export type UserResolvers<
  ContextType = ResolverContext,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = ResolversObject<{
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ResolverContext> = ResolversObject<{
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Collection?: CollectionResolvers<ContextType>;
  Gallery?: GalleryResolvers<ContextType>;
  GalleryTag?: GalleryTagResolvers<ContextType>;
  Img?: ImgResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;
