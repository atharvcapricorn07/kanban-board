import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
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
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  bigint: { input: any; output: any };
  bytea: { input: any; output: any };
  citext: { input: any; output: any };
  jsonb: { input: any; output: any };
  timestamptz: { input: any; output: any };
  uuid: { input: any; output: any };
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  _neq?: InputMaybe<Scalars["Boolean"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["Int"]["input"]>;
  _gt?: InputMaybe<Scalars["Int"]["input"]>;
  _gte?: InputMaybe<Scalars["Int"]["input"]>;
  _in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["Int"]["input"]>;
  _lte?: InputMaybe<Scalars["Int"]["input"]>;
  _neq?: InputMaybe<Scalars["Int"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["String"]["input"]>;
  _gt?: InputMaybe<Scalars["String"]["input"]>;
  _gte?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]["input"]>;
  _in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]["input"]>;
  _lt?: InputMaybe<Scalars["String"]["input"]>;
  _lte?: InputMaybe<Scalars["String"]["input"]>;
  _neq?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]["input"]>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: "authProviderRequests";
  id: Scalars["uuid"]["output"];
  options?: Maybe<Scalars["jsonb"]["output"]>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: "authProviderRequests_aggregate";
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: "authProviderRequests_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = "provider_requests_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars["Int"]["input"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars["String"]["input"]>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  options?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: "authProviderRequests_max_fields";
  id?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: "authProviderRequests_min_fields";
  id?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: "authProviderRequests_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = "id",
  /** column name */
  Options = "options",
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  options?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  options?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = "id",
  /** column name */
  Options = "options",
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: "authProviders";
  id: Scalars["String"]["output"];
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: "authProviders_aggregate";
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: "authProviders_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = "providers_pkey",
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: "authProviders_max_fields";
  id?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: "authProviders_min_fields";
  id?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: "authProviders_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars["String"]["input"];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = "id",
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = "id",
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviders_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: "authRefreshTokens";
  createdAt: Scalars["timestamptz"]["output"];
  expiresAt: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  metadata?: Maybe<Scalars["jsonb"]["output"]>;
  refreshTokenHash?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
  userId: Scalars["uuid"]["output"];
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: "authRefreshTokens_aggregate";
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: "authRefreshTokens_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefreshTokensPkey = "refresh_tokens_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars["Int"]["input"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars["String"]["input"]>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
  refreshTokenHash?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: "authRefreshTokens_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  expiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  refreshTokenHash?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: "authRefreshTokens_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  expiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  refreshTokenHash?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: "authRefreshTokens_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  ExpiresAt = "expiresAt",
  /** column name */
  Id = "id",
  /** column name */
  Metadata = "metadata",
  /** column name */
  RefreshTokenHash = "refreshTokenHash",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
  refreshTokenHash?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  expiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
  refreshTokenHash?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  ExpiresAt = "expiresAt",
  /** column name */
  Id = "id",
  /** column name */
  Metadata = "metadata",
  /** column name */
  RefreshTokenHash = "refreshTokenHash",
  /** column name */
  Type = "type",
  /** column name */
  UserId = "userId",
}

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: "authRoles";
  role: Scalars["String"]["output"];
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: "authRoles_aggregate";
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: "authRoles_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = "roles_pkey",
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: "authRoles_max_fields";
  role?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: "authRoles_min_fields";
  role?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: "authRoles_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars["String"]["input"];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = "role",
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = "role",
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRoles_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: "authUserProviders";
  accessToken: Scalars["String"]["output"];
  createdAt: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  providerId: Scalars["String"]["output"];
  providerUserId: Scalars["String"]["output"];
  refreshToken?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["timestamptz"]["output"];
  userId: Scalars["uuid"]["output"];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: "authUserProviders_aggregate";
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: "authUserProviders_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = "user_providers_pkey",
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = "user_providers_provider_id_provider_user_id_key",
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  providerId?: InputMaybe<Scalars["String"]["input"]>;
  providerUserId?: InputMaybe<Scalars["String"]["input"]>;
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: "authUserProviders_max_fields";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  providerId?: Maybe<Scalars["String"]["output"]>;
  providerUserId?: Maybe<Scalars["String"]["output"]>;
  refreshToken?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: "authUserProviders_min_fields";
  accessToken?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  providerId?: Maybe<Scalars["String"]["output"]>;
  providerUserId?: Maybe<Scalars["String"]["output"]>;
  refreshToken?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: "authUserProviders_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = "accessToken",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  ProviderId = "providerId",
  /** column name */
  ProviderUserId = "providerUserId",
  /** column name */
  RefreshToken = "refreshToken",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  providerId?: InputMaybe<Scalars["String"]["input"]>;
  providerUserId?: InputMaybe<Scalars["String"]["input"]>;
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  providerId?: InputMaybe<Scalars["String"]["input"]>;
  providerUserId?: InputMaybe<Scalars["String"]["input"]>;
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = "accessToken",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  ProviderId = "providerId",
  /** column name */
  ProviderUserId = "providerUserId",
  /** column name */
  RefreshToken = "refreshToken",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserId = "userId",
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: "authUserRoles";
  createdAt: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  role: Scalars["String"]["output"];
  userId: Scalars["uuid"]["output"];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: "authUserRoles_aggregate";
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: "authUserRoles_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = "user_roles_pkey",
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = "user_roles_user_id_role_key",
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: "authUserRoles_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: "authUserRoles_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: "authUserRoles_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  Role = "role",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Id = "id",
  /** column name */
  Role = "role",
  /** column name */
  UserId = "userId",
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: "authUserSecurityKeys";
  counter: Scalars["bigint"]["output"];
  credentialId: Scalars["String"]["output"];
  credentialPublicKey?: Maybe<Scalars["bytea"]["output"]>;
  id: Scalars["uuid"]["output"];
  nickname?: Maybe<Scalars["String"]["output"]>;
  transports: Scalars["String"]["output"];
  userId: Scalars["uuid"]["output"];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: "authUserSecurityKeys_aggregate";
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: "authUserSecurityKeys_aggregate_fields";
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: "authUserSecurityKeys_avg_fields";
  counter?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = "user_security_key_credential_id_key",
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = "user_security_keys_pkey",
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars["bigint"]["input"]>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars["bigint"]["input"]>;
  credentialId?: InputMaybe<Scalars["String"]["input"]>;
  credentialPublicKey?: InputMaybe<Scalars["bytea"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  nickname?: InputMaybe<Scalars["String"]["input"]>;
  transports?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: "authUserSecurityKeys_max_fields";
  counter?: Maybe<Scalars["bigint"]["output"]>;
  credentialId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  nickname?: Maybe<Scalars["String"]["output"]>;
  transports?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: "authUserSecurityKeys_min_fields";
  counter?: Maybe<Scalars["bigint"]["output"]>;
  credentialId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  nickname?: Maybe<Scalars["String"]["output"]>;
  transports?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["uuid"]["output"]>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: "authUserSecurityKeys_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = "counter",
  /** column name */
  CredentialId = "credentialId",
  /** column name */
  CredentialPublicKey = "credentialPublicKey",
  /** column name */
  Id = "id",
  /** column name */
  Nickname = "nickname",
  /** column name */
  Transports = "transports",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars["bigint"]["input"]>;
  credentialId?: InputMaybe<Scalars["String"]["input"]>;
  credentialPublicKey?: InputMaybe<Scalars["bytea"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  nickname?: InputMaybe<Scalars["String"]["input"]>;
  transports?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: "authUserSecurityKeys_stddev_fields";
  counter?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: "authUserSecurityKeys_stddev_pop_fields";
  counter?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: "authUserSecurityKeys_stddev_samp_fields";
  counter?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars["bigint"]["input"]>;
  credentialId?: InputMaybe<Scalars["String"]["input"]>;
  credentialPublicKey?: InputMaybe<Scalars["bytea"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  nickname?: InputMaybe<Scalars["String"]["input"]>;
  transports?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: "authUserSecurityKeys_sum_fields";
  counter?: Maybe<Scalars["bigint"]["output"]>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = "counter",
  /** column name */
  CredentialId = "credentialId",
  /** column name */
  CredentialPublicKey = "credentialPublicKey",
  /** column name */
  Id = "id",
  /** column name */
  Nickname = "nickname",
  /** column name */
  Transports = "transports",
  /** column name */
  UserId = "userId",
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: "authUserSecurityKeys_var_pop_fields";
  counter?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: "authUserSecurityKeys_var_samp_fields";
  counter?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: "authUserSecurityKeys_variance_fields";
  counter?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["bigint"]["input"]>;
  _gt?: InputMaybe<Scalars["bigint"]["input"]>;
  _gte?: InputMaybe<Scalars["bigint"]["input"]>;
  _in?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["bigint"]["input"]>;
  _lte?: InputMaybe<Scalars["bigint"]["input"]>;
  _neq?: InputMaybe<Scalars["bigint"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["bigint"]["input"]>>;
};

/** columns and relationships of "boards" */
export type Boards = {
  __typename?: "boards";
  /** fetch data from the table: "columns" */
  columns: Array<Columns>;
  /** fetch aggregated fields from the table: "columns" */
  columns_aggregate: Columns_Aggregate;
  created_at: Scalars["timestamptz"]["output"];
  id: Scalars["uuid"]["output"];
  title: Scalars["String"]["output"];
  updated_at: Scalars["timestamptz"]["output"];
};

/** columns and relationships of "boards" */
export type BoardsColumnsArgs = {
  distinct_on?: InputMaybe<Array<Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Columns_Order_By>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};

/** columns and relationships of "boards" */
export type BoardsColumns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Columns_Order_By>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};

/** aggregated selection of "boards" */
export type Boards_Aggregate = {
  __typename?: "boards_aggregate";
  aggregate?: Maybe<Boards_Aggregate_Fields>;
  nodes: Array<Boards>;
};

/** aggregate fields of "boards" */
export type Boards_Aggregate_Fields = {
  __typename?: "boards_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Boards_Max_Fields>;
  min?: Maybe<Boards_Min_Fields>;
};

/** aggregate fields of "boards" */
export type Boards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Boards_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Boolean expression to filter rows from the table "boards". All fields are combined with a logical 'AND'. */
export type Boards_Bool_Exp = {
  _and?: InputMaybe<Array<Boards_Bool_Exp>>;
  _not?: InputMaybe<Boards_Bool_Exp>;
  _or?: InputMaybe<Array<Boards_Bool_Exp>>;
  columns?: InputMaybe<Columns_Bool_Exp>;
  columns_aggregate?: InputMaybe<Columns_Aggregate_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "boards" */
export enum Boards_Constraint {
  /** unique or primary key constraint on columns "id" */
  BoardsPkey = "boards_pkey",
}

/** input type for inserting data into table "boards" */
export type Boards_Insert_Input = {
  columns?: InputMaybe<Columns_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Boards_Max_Fields = {
  __typename?: "boards_max_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Boards_Min_Fields = {
  __typename?: "boards_min_fields";
  created_at?: Maybe<Scalars["timestamptz"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  updated_at?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "boards" */
export type Boards_Mutation_Response = {
  __typename?: "boards_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Boards>;
};

/** on_conflict condition type for table "boards" */
export type Boards_On_Conflict = {
  constraint: Boards_Constraint;
  update_columns?: Array<Boards_Update_Column>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

/** Ordering options when selecting data from "boards". */
export type Boards_Order_By = {
  columns_aggregate?: InputMaybe<Columns_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: boards */
export type Boards_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "boards" */
export enum Boards_Select_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
}

/** input type for updating data in table "boards" */
export type Boards_Set_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "boards" */
export type Boards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Boards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Boards_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updated_at?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** update columns of table "boards" */
export enum Boards_Update_Column {
  /** column name */
  CreatedAt = "created_at",
  /** column name */
  Id = "id",
  /** column name */
  Title = "title",
  /** column name */
  UpdatedAt = "updated_at",
}

export type Boards_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Boards_Set_Input>;
  /** filter the rows which have to be updated */
  where: Boards_Bool_Exp;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: "buckets";
  cacheControl?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["timestamptz"]["output"];
  downloadExpiration: Scalars["Int"]["output"];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars["String"]["output"];
  maxUploadFileSize: Scalars["Int"]["output"];
  minUploadFileSize: Scalars["Int"]["output"];
  presignedUrlsEnabled: Scalars["Boolean"]["output"];
  updatedAt: Scalars["timestamptz"]["output"];
};

/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: "buckets_aggregate";
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: "buckets_aggregate_fields";
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: "buckets_avg_fields";
  downloadExpiration?: Maybe<Scalars["Float"]["output"]>;
  maxUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
  minUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = "buckets_pkey",
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars["Int"]["input"]>;
  maxUploadFileSize?: InputMaybe<Scalars["Int"]["input"]>;
  minUploadFileSize?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  downloadExpiration?: InputMaybe<Scalars["Int"]["input"]>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  maxUploadFileSize?: InputMaybe<Scalars["Int"]["input"]>;
  minUploadFileSize?: InputMaybe<Scalars["Int"]["input"]>;
  presignedUrlsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: "buckets_max_fields";
  cacheControl?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  downloadExpiration?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  maxUploadFileSize?: Maybe<Scalars["Int"]["output"]>;
  minUploadFileSize?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: "buckets_min_fields";
  cacheControl?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  downloadExpiration?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  maxUploadFileSize?: Maybe<Scalars["Int"]["output"]>;
  minUploadFileSize?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: "buckets_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars["String"]["input"];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = "cacheControl",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DownloadExpiration = "downloadExpiration",
  /** column name */
  Id = "id",
  /** column name */
  MaxUploadFileSize = "maxUploadFileSize",
  /** column name */
  MinUploadFileSize = "minUploadFileSize",
  /** column name */
  PresignedUrlsEnabled = "presignedUrlsEnabled",
  /** column name */
  UpdatedAt = "updatedAt",
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  downloadExpiration?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  maxUploadFileSize?: InputMaybe<Scalars["Int"]["input"]>;
  minUploadFileSize?: InputMaybe<Scalars["Int"]["input"]>;
  presignedUrlsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: "buckets_stddev_fields";
  downloadExpiration?: Maybe<Scalars["Float"]["output"]>;
  maxUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
  minUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: "buckets_stddev_pop_fields";
  downloadExpiration?: Maybe<Scalars["Float"]["output"]>;
  maxUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
  minUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: "buckets_stddev_samp_fields";
  downloadExpiration?: Maybe<Scalars["Float"]["output"]>;
  maxUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
  minUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  downloadExpiration?: InputMaybe<Scalars["Int"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  maxUploadFileSize?: InputMaybe<Scalars["Int"]["input"]>;
  minUploadFileSize?: InputMaybe<Scalars["Int"]["input"]>;
  presignedUrlsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: "buckets_sum_fields";
  downloadExpiration?: Maybe<Scalars["Int"]["output"]>;
  maxUploadFileSize?: Maybe<Scalars["Int"]["output"]>;
  minUploadFileSize?: Maybe<Scalars["Int"]["output"]>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = "cacheControl",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  DownloadExpiration = "downloadExpiration",
  /** column name */
  Id = "id",
  /** column name */
  MaxUploadFileSize = "maxUploadFileSize",
  /** column name */
  MinUploadFileSize = "minUploadFileSize",
  /** column name */
  PresignedUrlsEnabled = "presignedUrlsEnabled",
  /** column name */
  UpdatedAt = "updatedAt",
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: "buckets_var_pop_fields";
  downloadExpiration?: Maybe<Scalars["Float"]["output"]>;
  maxUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
  minUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: "buckets_var_samp_fields";
  downloadExpiration?: Maybe<Scalars["Float"]["output"]>;
  maxUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
  minUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: "buckets_variance_fields";
  downloadExpiration?: Maybe<Scalars["Float"]["output"]>;
  maxUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
  minUploadFileSize?: Maybe<Scalars["Float"]["output"]>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["bytea"]["input"]>;
  _gt?: InputMaybe<Scalars["bytea"]["input"]>;
  _gte?: InputMaybe<Scalars["bytea"]["input"]>;
  _in?: InputMaybe<Array<Scalars["bytea"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["bytea"]["input"]>;
  _lte?: InputMaybe<Scalars["bytea"]["input"]>;
  _neq?: InputMaybe<Scalars["bytea"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["bytea"]["input"]>>;
};

/** columns and relationships of "cards" */
export type Cards = {
  __typename?: "cards";
  column_id: Scalars["uuid"]["output"];
  content?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  position: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
};

/** aggregated selection of "cards" */
export type Cards_Aggregate = {
  __typename?: "cards_aggregate";
  aggregate?: Maybe<Cards_Aggregate_Fields>;
  nodes: Array<Cards>;
};

export type Cards_Aggregate_Bool_Exp = {
  count?: InputMaybe<Cards_Aggregate_Bool_Exp_Count>;
};

export type Cards_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cards_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Cards_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cards" */
export type Cards_Aggregate_Fields = {
  __typename?: "cards_aggregate_fields";
  avg?: Maybe<Cards_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Cards_Max_Fields>;
  min?: Maybe<Cards_Min_Fields>;
  stddev?: Maybe<Cards_Stddev_Fields>;
  stddev_pop?: Maybe<Cards_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cards_Stddev_Samp_Fields>;
  sum?: Maybe<Cards_Sum_Fields>;
  var_pop?: Maybe<Cards_Var_Pop_Fields>;
  var_samp?: Maybe<Cards_Var_Samp_Fields>;
  variance?: Maybe<Cards_Variance_Fields>;
};

/** aggregate fields of "cards" */
export type Cards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cards_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "cards" */
export type Cards_Aggregate_Order_By = {
  avg?: InputMaybe<Cards_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cards_Max_Order_By>;
  min?: InputMaybe<Cards_Min_Order_By>;
  stddev?: InputMaybe<Cards_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Cards_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Cards_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Cards_Sum_Order_By>;
  var_pop?: InputMaybe<Cards_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Cards_Var_Samp_Order_By>;
  variance?: InputMaybe<Cards_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cards" */
export type Cards_Arr_Rel_Insert_Input = {
  data: Array<Cards_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cards_On_Conflict>;
};

/** aggregate avg on columns */
export type Cards_Avg_Fields = {
  __typename?: "cards_avg_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "cards" */
export type Cards_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cards". All fields are combined with a logical 'AND'. */
export type Cards_Bool_Exp = {
  _and?: InputMaybe<Array<Cards_Bool_Exp>>;
  _not?: InputMaybe<Cards_Bool_Exp>;
  _or?: InputMaybe<Array<Cards_Bool_Exp>>;
  column_id?: InputMaybe<Uuid_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "cards" */
export enum Cards_Constraint {
  /** unique or primary key constraint on columns "id" */
  CardsPkey = "cards_pkey",
}

/** input type for incrementing numeric columns in table "cards" */
export type Cards_Inc_Input = {
  position?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "cards" */
export type Cards_Insert_Input = {
  column_id?: InputMaybe<Scalars["uuid"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  position?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Cards_Max_Fields = {
  __typename?: "cards_max_fields";
  column_id?: Maybe<Scalars["uuid"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  position?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "cards" */
export type Cards_Max_Order_By = {
  column_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cards_Min_Fields = {
  __typename?: "cards_min_fields";
  column_id?: Maybe<Scalars["uuid"]["output"]>;
  content?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  position?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "cards" */
export type Cards_Min_Order_By = {
  column_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cards" */
export type Cards_Mutation_Response = {
  __typename?: "cards_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Cards>;
};

/** on_conflict condition type for table "cards" */
export type Cards_On_Conflict = {
  constraint: Cards_Constraint;
  update_columns?: Array<Cards_Update_Column>;
  where?: InputMaybe<Cards_Bool_Exp>;
};

/** Ordering options when selecting data from "cards". */
export type Cards_Order_By = {
  column_id?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cards */
export type Cards_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "cards" */
export enum Cards_Select_Column {
  /** column name */
  ColumnId = "column_id",
  /** column name */
  Content = "content",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Position = "position",
  /** column name */
  Title = "title",
}

/** input type for updating data in table "cards" */
export type Cards_Set_Input = {
  column_id?: InputMaybe<Scalars["uuid"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  position?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Cards_Stddev_Fields = {
  __typename?: "cards_stddev_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "cards" */
export type Cards_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cards_Stddev_Pop_Fields = {
  __typename?: "cards_stddev_pop_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "cards" */
export type Cards_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cards_Stddev_Samp_Fields = {
  __typename?: "cards_stddev_samp_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "cards" */
export type Cards_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "cards" */
export type Cards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cards_Stream_Cursor_Value_Input = {
  column_id?: InputMaybe<Scalars["uuid"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  position?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Cards_Sum_Fields = {
  __typename?: "cards_sum_fields";
  position?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "cards" */
export type Cards_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "cards" */
export enum Cards_Update_Column {
  /** column name */
  ColumnId = "column_id",
  /** column name */
  Content = "content",
  /** column name */
  Description = "description",
  /** column name */
  Id = "id",
  /** column name */
  Position = "position",
  /** column name */
  Title = "title",
}

export type Cards_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cards_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cards_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cards_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cards_Var_Pop_Fields = {
  __typename?: "cards_var_pop_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "cards" */
export type Cards_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cards_Var_Samp_Fields = {
  __typename?: "cards_var_samp_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "cards" */
export type Cards_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Cards_Variance_Fields = {
  __typename?: "cards_variance_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "cards" */
export type Cards_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["citext"]["input"]>;
  _gt?: InputMaybe<Scalars["citext"]["input"]>;
  _gte?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["citext"]["input"]>;
  _in?: InputMaybe<Array<Scalars["citext"]["input"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["citext"]["input"]>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["citext"]["input"]>;
  _lt?: InputMaybe<Scalars["citext"]["input"]>;
  _lte?: InputMaybe<Scalars["citext"]["input"]>;
  _neq?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["citext"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["citext"]["input"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["citext"]["input"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["citext"]["input"]>;
};

/** columns and relationships of "columns" */
export type Columns = {
  __typename?: "columns";
  board_id: Scalars["uuid"]["output"];
  /** An array relationship */
  cards: Array<Cards>;
  /** An aggregate relationship */
  cards_aggregate: Cards_Aggregate;
  id: Scalars["uuid"]["output"];
  position: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
};

/** columns and relationships of "columns" */
export type ColumnsCardsArgs = {
  distinct_on?: InputMaybe<Array<Cards_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Cards_Order_By>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};

/** columns and relationships of "columns" */
export type ColumnsCards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cards_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Cards_Order_By>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};

/** aggregated selection of "columns" */
export type Columns_Aggregate = {
  __typename?: "columns_aggregate";
  aggregate?: Maybe<Columns_Aggregate_Fields>;
  nodes: Array<Columns>;
};

export type Columns_Aggregate_Bool_Exp = {
  count?: InputMaybe<Columns_Aggregate_Bool_Exp_Count>;
};

export type Columns_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Columns_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Columns_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "columns" */
export type Columns_Aggregate_Fields = {
  __typename?: "columns_aggregate_fields";
  avg?: Maybe<Columns_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Columns_Max_Fields>;
  min?: Maybe<Columns_Min_Fields>;
  stddev?: Maybe<Columns_Stddev_Fields>;
  stddev_pop?: Maybe<Columns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Columns_Stddev_Samp_Fields>;
  sum?: Maybe<Columns_Sum_Fields>;
  var_pop?: Maybe<Columns_Var_Pop_Fields>;
  var_samp?: Maybe<Columns_Var_Samp_Fields>;
  variance?: Maybe<Columns_Variance_Fields>;
};

/** aggregate fields of "columns" */
export type Columns_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Columns_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "columns" */
export type Columns_Aggregate_Order_By = {
  avg?: InputMaybe<Columns_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Columns_Max_Order_By>;
  min?: InputMaybe<Columns_Min_Order_By>;
  stddev?: InputMaybe<Columns_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Columns_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Columns_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Columns_Sum_Order_By>;
  var_pop?: InputMaybe<Columns_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Columns_Var_Samp_Order_By>;
  variance?: InputMaybe<Columns_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "columns" */
export type Columns_Arr_Rel_Insert_Input = {
  data: Array<Columns_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Columns_On_Conflict>;
};

/** aggregate avg on columns */
export type Columns_Avg_Fields = {
  __typename?: "columns_avg_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "columns" */
export type Columns_Avg_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "columns". All fields are combined with a logical 'AND'. */
export type Columns_Bool_Exp = {
  _and?: InputMaybe<Array<Columns_Bool_Exp>>;
  _not?: InputMaybe<Columns_Bool_Exp>;
  _or?: InputMaybe<Array<Columns_Bool_Exp>>;
  board_id?: InputMaybe<Uuid_Comparison_Exp>;
  cards?: InputMaybe<Cards_Bool_Exp>;
  cards_aggregate?: InputMaybe<Cards_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "columns" */
export enum Columns_Constraint {
  /** unique or primary key constraint on columns "id" */
  ColumnsPkey = "columns_pkey",
}

/** input type for incrementing numeric columns in table "columns" */
export type Columns_Inc_Input = {
  position?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "columns" */
export type Columns_Insert_Input = {
  board_id?: InputMaybe<Scalars["uuid"]["input"]>;
  cards?: InputMaybe<Cards_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  position?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Columns_Max_Fields = {
  __typename?: "columns_max_fields";
  board_id?: Maybe<Scalars["uuid"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  position?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** order by max() on columns of table "columns" */
export type Columns_Max_Order_By = {
  board_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Columns_Min_Fields = {
  __typename?: "columns_min_fields";
  board_id?: Maybe<Scalars["uuid"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  position?: Maybe<Scalars["Int"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** order by min() on columns of table "columns" */
export type Columns_Min_Order_By = {
  board_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "columns" */
export type Columns_Mutation_Response = {
  __typename?: "columns_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Columns>;
};

/** on_conflict condition type for table "columns" */
export type Columns_On_Conflict = {
  constraint: Columns_Constraint;
  update_columns?: Array<Columns_Update_Column>;
  where?: InputMaybe<Columns_Bool_Exp>;
};

/** Ordering options when selecting data from "columns". */
export type Columns_Order_By = {
  board_id?: InputMaybe<Order_By>;
  cards_aggregate?: InputMaybe<Cards_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: columns */
export type Columns_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** select columns of table "columns" */
export enum Columns_Select_Column {
  /** column name */
  BoardId = "board_id",
  /** column name */
  Id = "id",
  /** column name */
  Position = "position",
  /** column name */
  Title = "title",
}

/** input type for updating data in table "columns" */
export type Columns_Set_Input = {
  board_id?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  position?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate stddev on columns */
export type Columns_Stddev_Fields = {
  __typename?: "columns_stddev_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "columns" */
export type Columns_Stddev_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Columns_Stddev_Pop_Fields = {
  __typename?: "columns_stddev_pop_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "columns" */
export type Columns_Stddev_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Columns_Stddev_Samp_Fields = {
  __typename?: "columns_stddev_samp_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "columns" */
export type Columns_Stddev_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "columns" */
export type Columns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Columns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Columns_Stream_Cursor_Value_Input = {
  board_id?: InputMaybe<Scalars["uuid"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  position?: InputMaybe<Scalars["Int"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate sum on columns */
export type Columns_Sum_Fields = {
  __typename?: "columns_sum_fields";
  position?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "columns" */
export type Columns_Sum_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** update columns of table "columns" */
export enum Columns_Update_Column {
  /** column name */
  BoardId = "board_id",
  /** column name */
  Id = "id",
  /** column name */
  Position = "position",
  /** column name */
  Title = "title",
}

export type Columns_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Columns_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Columns_Set_Input>;
  /** filter the rows which have to be updated */
  where: Columns_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Columns_Var_Pop_Fields = {
  __typename?: "columns_var_pop_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "columns" */
export type Columns_Var_Pop_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Columns_Var_Samp_Fields = {
  __typename?: "columns_var_samp_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "columns" */
export type Columns_Var_Samp_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Columns_Variance_Fields = {
  __typename?: "columns_variance_fields";
  position?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "columns" */
export type Columns_Variance_Order_By = {
  position?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: "files";
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars["String"]["output"];
  createdAt: Scalars["timestamptz"]["output"];
  etag?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["uuid"]["output"];
  isUploaded?: Maybe<Scalars["Boolean"]["output"]>;
  metadata?: Maybe<Scalars["jsonb"]["output"]>;
  mimeType?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  updatedAt: Scalars["timestamptz"]["output"];
  uploadedByUserId?: Maybe<Scalars["uuid"]["output"]>;
};

/** columns and relationships of "storage.files" */
export type FilesMetadataArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: "files_aggregate";
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: "files_aggregate_fields";
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars["Int"]["output"];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Files_Append_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: "files_avg_fields";
  size?: Maybe<Scalars["Float"]["output"]>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = "files_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Files_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Files_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars["Int"]["input"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Files_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars["String"]["input"]>;
};

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars["Int"]["input"]>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  etag?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isUploaded?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  uploadedByUserId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: "files_max_fields";
  bucketId?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  etag?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  mimeType?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  uploadedByUserId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: "files_min_fields";
  bucketId?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  etag?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  mimeType?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  size?: Maybe<Scalars["Int"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  uploadedByUserId?: Maybe<Scalars["uuid"]["output"]>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: "files_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Files_Prepend_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = "bucketId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Etag = "etag",
  /** column name */
  Id = "id",
  /** column name */
  IsUploaded = "isUploaded",
  /** column name */
  Metadata = "metadata",
  /** column name */
  MimeType = "mimeType",
  /** column name */
  Name = "name",
  /** column name */
  Size = "size",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UploadedByUserId = "uploadedByUserId",
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = "isUploaded",
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = "isUploaded",
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  etag?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isUploaded?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  uploadedByUserId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: "files_stddev_fields";
  size?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: "files_stddev_pop_fields";
  size?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: "files_stddev_samp_fields";
  size?: Maybe<Scalars["Float"]["output"]>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  etag?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isUploaded?: InputMaybe<Scalars["Boolean"]["input"]>;
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Int"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  uploadedByUserId?: InputMaybe<Scalars["uuid"]["input"]>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: "files_sum_fields";
  size?: Maybe<Scalars["Int"]["output"]>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = "bucketId",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  Etag = "etag",
  /** column name */
  Id = "id",
  /** column name */
  IsUploaded = "isUploaded",
  /** column name */
  Metadata = "metadata",
  /** column name */
  MimeType = "mimeType",
  /** column name */
  Name = "name",
  /** column name */
  Size = "size",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UploadedByUserId = "uploadedByUserId",
}

export type Files_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Files_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Files_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: "files_var_pop_fields";
  size?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: "files_var_samp_fields";
  size?: Maybe<Scalars["Float"]["output"]>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: "files_variance_fields";
  size?: Maybe<Scalars["Float"]["output"]>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars["jsonb"]["input"]>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars["jsonb"]["input"]>;
  _eq?: InputMaybe<Scalars["jsonb"]["input"]>;
  _gt?: InputMaybe<Scalars["jsonb"]["input"]>;
  _gte?: InputMaybe<Scalars["jsonb"]["input"]>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars["String"]["input"]>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars["String"]["input"]>>;
  _in?: InputMaybe<Array<Scalars["jsonb"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["jsonb"]["input"]>;
  _lte?: InputMaybe<Scalars["jsonb"]["input"]>;
  _neq?: InputMaybe<Scalars["jsonb"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["jsonb"]["input"]>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "storage.virus" */
  deleteVirus?: Maybe<Virus>;
  /** delete data from the table: "storage.virus" */
  deleteViruses?: Maybe<Virus_Mutation_Response>;
  /** delete data from the table: "boards" */
  delete_boards?: Maybe<Boards_Mutation_Response>;
  /** delete single row from the table: "boards" */
  delete_boards_by_pk?: Maybe<Boards>;
  /** delete data from the table: "cards" */
  delete_cards?: Maybe<Cards_Mutation_Response>;
  /** delete single row from the table: "cards" */
  delete_cards_by_pk?: Maybe<Cards>;
  /** delete data from the table: "columns" */
  delete_columns?: Maybe<Columns_Mutation_Response>;
  /** delete single row from the table: "columns" */
  delete_columns_by_pk?: Maybe<Columns>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "storage.virus" */
  insertVirus?: Maybe<Virus>;
  /** insert data into the table: "storage.virus" */
  insertViruses?: Maybe<Virus_Mutation_Response>;
  /** insert data into the table: "boards" */
  insert_boards?: Maybe<Boards_Mutation_Response>;
  /** insert a single row into the table: "boards" */
  insert_boards_one?: Maybe<Boards>;
  /** insert data into the table: "cards" */
  insert_cards?: Maybe<Cards_Mutation_Response>;
  /** insert a single row into the table: "cards" */
  insert_cards_one?: Maybe<Cards>;
  /** insert data into the table: "columns" */
  insert_columns?: Maybe<Columns_Mutation_Response>;
  /** insert a single row into the table: "columns" */
  insert_columns_one?: Maybe<Columns>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "storage.virus" */
  updateVirus?: Maybe<Virus>;
  /** update data of the table: "storage.virus" */
  updateViruses?: Maybe<Virus_Mutation_Response>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<
    Array<Maybe<AuthProviderRequests_Mutation_Response>>
  >;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<
    Array<Maybe<AuthProviders_Mutation_Response>>
  >;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<
    Array<Maybe<AuthRefreshTokens_Mutation_Response>>
  >;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<
    Array<Maybe<AuthUserProviders_Mutation_Response>>
  >;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<
    Array<Maybe<AuthUserRoles_Mutation_Response>>
  >;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<
    Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>
  >;
  /** update data of the table: "boards" */
  update_boards?: Maybe<Boards_Mutation_Response>;
  /** update single row of the table: "boards" */
  update_boards_by_pk?: Maybe<Boards>;
  /** update multiples rows of table: "boards" */
  update_boards_many?: Maybe<Array<Maybe<Boards_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "cards" */
  update_cards?: Maybe<Cards_Mutation_Response>;
  /** update single row of the table: "cards" */
  update_cards_by_pk?: Maybe<Cards>;
  /** update multiples rows of table: "cards" */
  update_cards_many?: Maybe<Array<Maybe<Cards_Mutation_Response>>>;
  /** update data of the table: "columns" */
  update_columns?: Maybe<Columns_Mutation_Response>;
  /** update single row of the table: "columns" */
  update_columns_by_pk?: Maybe<Columns>;
  /** update multiples rows of table: "columns" */
  update_columns_many?: Maybe<Array<Maybe<Columns_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update multiples rows of table: "storage.virus" */
  update_virus_many?: Maybe<Array<Maybe<Virus_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars["String"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDeleteVirusArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDeleteVirusesArgs = {
  where: Virus_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_BoardsArgs = {
  where: Boards_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Boards_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_CardsArgs = {
  where: Cards_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Cards_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootDelete_ColumnsArgs = {
  where: Columns_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Columns_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertVirusArgs = {
  object: Virus_Insert_Input;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsertVirusesArgs = {
  objects: Array<Virus_Insert_Input>;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_BoardsArgs = {
  objects: Array<Boards_Insert_Input>;
  on_conflict?: InputMaybe<Boards_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Boards_OneArgs = {
  object: Boards_Insert_Input;
  on_conflict?: InputMaybe<Boards_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CardsArgs = {
  objects: Array<Cards_Insert_Input>;
  on_conflict?: InputMaybe<Cards_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Cards_OneArgs = {
  object: Cards_Insert_Input;
  on_conflict?: InputMaybe<Cards_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ColumnsArgs = {
  objects: Array<Columns_Insert_Input>;
  on_conflict?: InputMaybe<Columns_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Columns_OneArgs = {
  object: Columns_Insert_Input;
  on_conflict?: InputMaybe<Columns_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdateVirusArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  pk_columns: Virus_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdateVirusesArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  where: Virus_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_BoardsArgs = {
  _set?: InputMaybe<Boards_Set_Input>;
  where: Boards_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Boards_By_PkArgs = {
  _set?: InputMaybe<Boards_Set_Input>;
  pk_columns: Boards_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Boards_ManyArgs = {
  updates: Array<Boards_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_CardsArgs = {
  _inc?: InputMaybe<Cards_Inc_Input>;
  _set?: InputMaybe<Cards_Set_Input>;
  where: Cards_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Cards_By_PkArgs = {
  _inc?: InputMaybe<Cards_Inc_Input>;
  _set?: InputMaybe<Cards_Set_Input>;
  pk_columns: Cards_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Cards_ManyArgs = {
  updates: Array<Cards_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ColumnsArgs = {
  _inc?: InputMaybe<Columns_Inc_Input>;
  _set?: InputMaybe<Columns_Set_Input>;
  where: Columns_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Columns_By_PkArgs = {
  _inc?: InputMaybe<Columns_Inc_Input>;
  _set?: InputMaybe<Columns_Set_Input>;
  pk_columns: Columns_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Columns_ManyArgs = {
  updates: Array<Columns_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_Virus_ManyArgs = {
  updates: Array<Virus_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = "asc",
  /** in ascending order, nulls first */
  AscNullsFirst = "asc_nulls_first",
  /** in ascending order, nulls last */
  AscNullsLast = "asc_nulls_last",
  /** in descending order, nulls first */
  Desc = "desc",
  /** in descending order, nulls first */
  DescNullsFirst = "desc_nulls_first",
  /** in descending order, nulls last */
  DescNullsLast = "desc_nulls_last",
}

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "boards" */
  boards: Array<Boards>;
  /** fetch aggregated fields from the table: "boards" */
  boards_aggregate: Boards_Aggregate;
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** An array relationship */
  cards: Array<Cards>;
  /** An aggregate relationship */
  cards_aggregate: Cards_Aggregate;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** fetch data from the table: "columns" */
  columns: Array<Columns>;
  /** fetch aggregated fields from the table: "columns" */
  columns_aggregate: Columns_Aggregate;
  /** fetch data from the table: "columns" using primary key columns */
  columns_by_pk?: Maybe<Columns>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
};

export type Query_RootAuthProviderArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootAuthProviderRequestArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

export type Query_RootAuthRefreshTokenArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Query_RootAuthRoleArgs = {
  role: Scalars["String"]["input"];
};

export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

export type Query_RootAuthUserProviderArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

export type Query_RootAuthUserRoleArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Query_RootBoardsArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

export type Query_RootBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

export type Query_RootBoards_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootBucketArgs = {
  id: Scalars["String"]["input"];
};

export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Query_RootCardsArgs = {
  distinct_on?: InputMaybe<Array<Cards_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Cards_Order_By>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};

export type Query_RootCards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cards_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Cards_Order_By>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};

export type Query_RootCards_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootColumnsArgs = {
  distinct_on?: InputMaybe<Array<Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Columns_Order_By>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};

export type Query_RootColumns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Columns_Order_By>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};

export type Query_RootColumns_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootFileArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

export type Query_RootUserArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Query_RootVirusArgs = {
  id: Scalars["uuid"]["input"];
};

export type Query_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

export type Query_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "boards" */
  boards: Array<Boards>;
  /** fetch aggregated fields from the table: "boards" */
  boards_aggregate: Boards_Aggregate;
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>;
  /** fetch data from the table in a streaming manner: "boards" */
  boards_stream: Array<Boards>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** An array relationship */
  cards: Array<Cards>;
  /** An aggregate relationship */
  cards_aggregate: Cards_Aggregate;
  /** fetch data from the table: "cards" using primary key columns */
  cards_by_pk?: Maybe<Cards>;
  /** fetch data from the table in a streaming manner: "cards" */
  cards_stream: Array<Cards>;
  /** fetch data from the table: "columns" */
  columns: Array<Columns>;
  /** fetch aggregated fields from the table: "columns" */
  columns_aggregate: Columns_Aggregate;
  /** fetch data from the table: "columns" using primary key columns */
  columns_by_pk?: Maybe<Columns>;
  /** fetch data from the table in a streaming manner: "columns" */
  columns_stream: Array<Columns>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table in a streaming manner: "storage.virus" */
  virus_stream: Array<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
};

export type Subscription_RootAuthProviderArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

export type Subscription_RootAuthRefreshTokenArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

export type Subscription_RootAuthRoleArgs = {
  role: Scalars["String"]["input"];
};

export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

export type Subscription_RootBoardsArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

export type Subscription_RootBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

export type Subscription_RootBoards_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootBoards_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Boards_Stream_Cursor_Input>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

export type Subscription_RootBucketArgs = {
  id: Scalars["String"]["input"];
};

export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

export type Subscription_RootCardsArgs = {
  distinct_on?: InputMaybe<Array<Cards_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Cards_Order_By>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};

export type Subscription_RootCards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cards_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Cards_Order_By>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};

export type Subscription_RootCards_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootCards_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Cards_Stream_Cursor_Input>>;
  where?: InputMaybe<Cards_Bool_Exp>;
};

export type Subscription_RootColumnsArgs = {
  distinct_on?: InputMaybe<Array<Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Columns_Order_By>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};

export type Subscription_RootColumns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Columns_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Columns_Order_By>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};

export type Subscription_RootColumns_By_PkArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootColumns_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Columns_Stream_Cursor_Input>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};

export type Subscription_RootFileArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

export type Subscription_RootUserArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

export type Subscription_RootVirusArgs = {
  id: Scalars["uuid"]["input"];
};

export type Subscription_RootVirus_StreamArgs = {
  batch_size: Scalars["Int"]["input"];
  cursor: Array<InputMaybe<Virus_Stream_Cursor_Input>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

export type Subscription_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

export type Subscription_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]["input"]>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: "users";
  activeMfaType?: Maybe<Scalars["String"]["output"]>;
  avatarUrl: Scalars["String"]["output"];
  createdAt: Scalars["timestamptz"]["output"];
  currentChallenge?: Maybe<Scalars["String"]["output"]>;
  defaultRole: Scalars["String"]["output"];
  disabled: Scalars["Boolean"]["output"];
  displayName: Scalars["String"]["output"];
  email?: Maybe<Scalars["citext"]["output"]>;
  emailVerified: Scalars["Boolean"]["output"];
  id: Scalars["uuid"]["output"];
  isAnonymous: Scalars["Boolean"]["output"];
  lastSeen?: Maybe<Scalars["timestamptz"]["output"]>;
  locale: Scalars["String"]["output"];
  metadata?: Maybe<Scalars["jsonb"]["output"]>;
  newEmail?: Maybe<Scalars["citext"]["output"]>;
  otpHash?: Maybe<Scalars["String"]["output"]>;
  otpHashExpiresAt: Scalars["timestamptz"]["output"];
  otpMethodLastUsed?: Maybe<Scalars["String"]["output"]>;
  passwordHash?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  phoneNumberVerified: Scalars["Boolean"]["output"];
  ticket?: Maybe<Scalars["String"]["output"]>;
  ticketExpiresAt: Scalars["timestamptz"]["output"];
  totpSecret?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["timestamptz"]["output"];
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: "users_aggregate";
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: "users_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = "users_email_key",
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = "users_phone_number_key",
  /** unique or primary key constraint on columns "id" */
  UsersPkey = "users_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars["Int"]["input"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars["String"]["input"]>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars["String"]["input"]>;
  avatarUrl?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  currentChallenge?: InputMaybe<Scalars["String"]["input"]>;
  defaultRole?: InputMaybe<Scalars["String"]["input"]>;
  disabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  displayName?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["citext"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isAnonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastSeen?: InputMaybe<Scalars["timestamptz"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
  newEmail?: InputMaybe<Scalars["citext"]["input"]>;
  otpHash?: InputMaybe<Scalars["String"]["input"]>;
  otpHashExpiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  otpMethodLastUsed?: InputMaybe<Scalars["String"]["input"]>;
  passwordHash?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumberVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  ticket?: InputMaybe<Scalars["String"]["input"]>;
  ticketExpiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  totpSecret?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: "users_max_fields";
  activeMfaType?: Maybe<Scalars["String"]["output"]>;
  avatarUrl?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  currentChallenge?: Maybe<Scalars["String"]["output"]>;
  defaultRole?: Maybe<Scalars["String"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["citext"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  lastSeen?: Maybe<Scalars["timestamptz"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  newEmail?: Maybe<Scalars["citext"]["output"]>;
  otpHash?: Maybe<Scalars["String"]["output"]>;
  otpHashExpiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  otpMethodLastUsed?: Maybe<Scalars["String"]["output"]>;
  passwordHash?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  ticket?: Maybe<Scalars["String"]["output"]>;
  ticketExpiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  totpSecret?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: "users_min_fields";
  activeMfaType?: Maybe<Scalars["String"]["output"]>;
  avatarUrl?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  currentChallenge?: Maybe<Scalars["String"]["output"]>;
  defaultRole?: Maybe<Scalars["String"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["citext"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  lastSeen?: Maybe<Scalars["timestamptz"]["output"]>;
  locale?: Maybe<Scalars["String"]["output"]>;
  newEmail?: Maybe<Scalars["citext"]["output"]>;
  otpHash?: Maybe<Scalars["String"]["output"]>;
  otpHashExpiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  otpMethodLastUsed?: Maybe<Scalars["String"]["output"]>;
  passwordHash?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  ticket?: Maybe<Scalars["String"]["output"]>;
  ticketExpiresAt?: Maybe<Scalars["timestamptz"]["output"]>;
  totpSecret?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: "users_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = "activeMfaType",
  /** column name */
  AvatarUrl = "avatarUrl",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  CurrentChallenge = "currentChallenge",
  /** column name */
  DefaultRole = "defaultRole",
  /** column name */
  Disabled = "disabled",
  /** column name */
  DisplayName = "displayName",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  Id = "id",
  /** column name */
  IsAnonymous = "isAnonymous",
  /** column name */
  LastSeen = "lastSeen",
  /** column name */
  Locale = "locale",
  /** column name */
  Metadata = "metadata",
  /** column name */
  NewEmail = "newEmail",
  /** column name */
  OtpHash = "otpHash",
  /** column name */
  OtpHashExpiresAt = "otpHashExpiresAt",
  /** column name */
  OtpMethodLastUsed = "otpMethodLastUsed",
  /** column name */
  PasswordHash = "passwordHash",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  PhoneNumberVerified = "phoneNumberVerified",
  /** column name */
  Ticket = "ticket",
  /** column name */
  TicketExpiresAt = "ticketExpiresAt",
  /** column name */
  TotpSecret = "totpSecret",
  /** column name */
  UpdatedAt = "updatedAt",
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars["String"]["input"]>;
  avatarUrl?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  currentChallenge?: InputMaybe<Scalars["String"]["input"]>;
  defaultRole?: InputMaybe<Scalars["String"]["input"]>;
  disabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  displayName?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["citext"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isAnonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastSeen?: InputMaybe<Scalars["timestamptz"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
  newEmail?: InputMaybe<Scalars["citext"]["input"]>;
  otpHash?: InputMaybe<Scalars["String"]["input"]>;
  otpHashExpiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  otpMethodLastUsed?: InputMaybe<Scalars["String"]["input"]>;
  passwordHash?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumberVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  ticket?: InputMaybe<Scalars["String"]["input"]>;
  ticketExpiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  totpSecret?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars["String"]["input"]>;
  avatarUrl?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  currentChallenge?: InputMaybe<Scalars["String"]["input"]>;
  defaultRole?: InputMaybe<Scalars["String"]["input"]>;
  disabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  displayName?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["citext"]["input"]>;
  emailVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  isAnonymous?: InputMaybe<Scalars["Boolean"]["input"]>;
  lastSeen?: InputMaybe<Scalars["timestamptz"]["input"]>;
  locale?: InputMaybe<Scalars["String"]["input"]>;
  metadata?: InputMaybe<Scalars["jsonb"]["input"]>;
  newEmail?: InputMaybe<Scalars["citext"]["input"]>;
  otpHash?: InputMaybe<Scalars["String"]["input"]>;
  otpHashExpiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  otpMethodLastUsed?: InputMaybe<Scalars["String"]["input"]>;
  passwordHash?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  phoneNumberVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  ticket?: InputMaybe<Scalars["String"]["input"]>;
  ticketExpiresAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  totpSecret?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = "activeMfaType",
  /** column name */
  AvatarUrl = "avatarUrl",
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  CurrentChallenge = "currentChallenge",
  /** column name */
  DefaultRole = "defaultRole",
  /** column name */
  Disabled = "disabled",
  /** column name */
  DisplayName = "displayName",
  /** column name */
  Email = "email",
  /** column name */
  EmailVerified = "emailVerified",
  /** column name */
  Id = "id",
  /** column name */
  IsAnonymous = "isAnonymous",
  /** column name */
  LastSeen = "lastSeen",
  /** column name */
  Locale = "locale",
  /** column name */
  Metadata = "metadata",
  /** column name */
  NewEmail = "newEmail",
  /** column name */
  OtpHash = "otpHash",
  /** column name */
  OtpHashExpiresAt = "otpHashExpiresAt",
  /** column name */
  OtpMethodLastUsed = "otpMethodLastUsed",
  /** column name */
  PasswordHash = "passwordHash",
  /** column name */
  PhoneNumber = "phoneNumber",
  /** column name */
  PhoneNumberVerified = "phoneNumberVerified",
  /** column name */
  Ticket = "ticket",
  /** column name */
  TicketExpiresAt = "ticketExpiresAt",
  /** column name */
  TotpSecret = "totpSecret",
  /** column name */
  UpdatedAt = "updatedAt",
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars["uuid"]["input"]>;
  _gt?: InputMaybe<Scalars["uuid"]["input"]>;
  _gte?: InputMaybe<Scalars["uuid"]["input"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
  _is_null?: InputMaybe<Scalars["Boolean"]["input"]>;
  _lt?: InputMaybe<Scalars["uuid"]["input"]>;
  _lte?: InputMaybe<Scalars["uuid"]["input"]>;
  _neq?: InputMaybe<Scalars["uuid"]["input"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]["input"]>>;
};

/** columns and relationships of "storage.virus" */
export type Virus = {
  __typename?: "virus";
  createdAt: Scalars["timestamptz"]["output"];
  /** An object relationship */
  file: Files;
  fileId: Scalars["uuid"]["output"];
  filename: Scalars["String"]["output"];
  id: Scalars["uuid"]["output"];
  updatedAt: Scalars["timestamptz"]["output"];
  userSession: Scalars["jsonb"]["output"];
  virus: Scalars["String"]["output"];
};

/** columns and relationships of "storage.virus" */
export type VirusUserSessionArgs = {
  path?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregated selection of "storage.virus" */
export type Virus_Aggregate = {
  __typename?: "virus_aggregate";
  aggregate?: Maybe<Virus_Aggregate_Fields>;
  nodes: Array<Virus>;
};

/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_Fields = {
  __typename?: "virus_aggregate_fields";
  count: Scalars["Int"]["output"];
  max?: Maybe<Virus_Max_Fields>;
  min?: Maybe<Virus_Min_Fields>;
};

/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Virus_Select_Column>>;
  distinct?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Virus_Append_Input = {
  userSession?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** Boolean expression to filter rows from the table "storage.virus". All fields are combined with a logical 'AND'. */
export type Virus_Bool_Exp = {
  _and?: InputMaybe<Array<Virus_Bool_Exp>>;
  _not?: InputMaybe<Virus_Bool_Exp>;
  _or?: InputMaybe<Array<Virus_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  fileId?: InputMaybe<Uuid_Comparison_Exp>;
  filename?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userSession?: InputMaybe<Jsonb_Comparison_Exp>;
  virus?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.virus" */
export enum Virus_Constraint {
  /** unique or primary key constraint on columns "id" */
  VirusPkey = "virus_pkey",
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Virus_Delete_At_Path_Input = {
  userSession?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Virus_Delete_Elem_Input = {
  userSession?: InputMaybe<Scalars["Int"]["input"]>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Virus_Delete_Key_Input = {
  userSession?: InputMaybe<Scalars["String"]["input"]>;
};

/** input type for inserting data into table "storage.virus" */
export type Virus_Insert_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  fileId?: InputMaybe<Scalars["uuid"]["input"]>;
  filename?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  userSession?: InputMaybe<Scalars["jsonb"]["input"]>;
  virus?: InputMaybe<Scalars["String"]["input"]>;
};

/** aggregate max on columns */
export type Virus_Max_Fields = {
  __typename?: "virus_max_fields";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  fileId?: Maybe<Scalars["uuid"]["output"]>;
  filename?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  virus?: Maybe<Scalars["String"]["output"]>;
};

/** aggregate min on columns */
export type Virus_Min_Fields = {
  __typename?: "virus_min_fields";
  createdAt?: Maybe<Scalars["timestamptz"]["output"]>;
  fileId?: Maybe<Scalars["uuid"]["output"]>;
  filename?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["uuid"]["output"]>;
  updatedAt?: Maybe<Scalars["timestamptz"]["output"]>;
  virus?: Maybe<Scalars["String"]["output"]>;
};

/** response of any mutation on the table "storage.virus" */
export type Virus_Mutation_Response = {
  __typename?: "virus_mutation_response";
  /** number of rows affected by the mutation */
  affected_rows: Scalars["Int"]["output"];
  /** data from the rows affected by the mutation */
  returning: Array<Virus>;
};

/** on_conflict condition type for table "storage.virus" */
export type Virus_On_Conflict = {
  constraint: Virus_Constraint;
  update_columns?: Array<Virus_Update_Column>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.virus". */
export type Virus_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  fileId?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userSession?: InputMaybe<Order_By>;
  virus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.virus */
export type Virus_Pk_Columns_Input = {
  id: Scalars["uuid"]["input"];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Virus_Prepend_Input = {
  userSession?: InputMaybe<Scalars["jsonb"]["input"]>;
};

/** select columns of table "storage.virus" */
export enum Virus_Select_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  FileId = "fileId",
  /** column name */
  Filename = "filename",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserSession = "userSession",
  /** column name */
  Virus = "virus",
}

/** input type for updating data in table "storage.virus" */
export type Virus_Set_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  fileId?: InputMaybe<Scalars["uuid"]["input"]>;
  filename?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  userSession?: InputMaybe<Scalars["jsonb"]["input"]>;
  virus?: InputMaybe<Scalars["String"]["input"]>;
};

/** Streaming cursor of the table "virus" */
export type Virus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Virus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Virus_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  fileId?: InputMaybe<Scalars["uuid"]["input"]>;
  filename?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["uuid"]["input"]>;
  updatedAt?: InputMaybe<Scalars["timestamptz"]["input"]>;
  userSession?: InputMaybe<Scalars["jsonb"]["input"]>;
  virus?: InputMaybe<Scalars["String"]["input"]>;
};

/** update columns of table "storage.virus" */
export enum Virus_Update_Column {
  /** column name */
  CreatedAt = "createdAt",
  /** column name */
  FileId = "fileId",
  /** column name */
  Filename = "filename",
  /** column name */
  Id = "id",
  /** column name */
  UpdatedAt = "updatedAt",
  /** column name */
  UserSession = "userSession",
  /** column name */
  Virus = "virus",
}

export type Virus_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Virus_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Virus_Set_Input>;
  /** filter the rows which have to be updated */
  where: Virus_Bool_Exp;
};

export type CreateBoardMutationVariables = Exact<{
  title: Scalars["String"]["input"];
}>;

export type CreateBoardMutation = {
  __typename?: "mutation_root";
  insert_boards_one?: { __typename?: "boards"; id: any; title: string } | null;
};

export type UpdateBoardMutationVariables = Exact<{
  id: Scalars["uuid"]["input"];
  title: Scalars["String"]["input"];
}>;

export type UpdateBoardMutation = {
  __typename?: "mutation_root";
  update_boards_by_pk?: {
    __typename?: "boards";
    id: any;
    title: string;
  } | null;
};

export type DeleteBoardMutationVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type DeleteBoardMutation = {
  __typename?: "mutation_root";
  delete_boards_by_pk?: { __typename?: "boards"; id: any } | null;
};

export type CreateColumnMutationVariables = Exact<{
  boardId: Scalars["uuid"]["input"];
  title: Scalars["String"]["input"];
  position: Scalars["Int"]["input"];
}>;

export type CreateColumnMutation = {
  __typename?: "mutation_root";
  insert_columns_one?: {
    __typename?: "columns";
    id: any;
    title: string;
    position: number;
  } | null;
};

export type UpdateColumnMutationVariables = Exact<{
  id: Scalars["uuid"]["input"];
  title: Scalars["String"]["input"];
}>;

export type UpdateColumnMutation = {
  __typename?: "mutation_root";
  update_columns_by_pk?: {
    __typename?: "columns";
    id: any;
    title: string;
  } | null;
};

export type DeleteColumnMutationVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type DeleteColumnMutation = {
  __typename?: "mutation_root";
  delete_columns_by_pk?: { __typename?: "columns"; id: any } | null;
};

export type CreateCardMutationVariables = Exact<{
  columnId: Scalars["uuid"]["input"];
  title: Scalars["String"]["input"];
  position: Scalars["Int"]["input"];
}>;

export type CreateCardMutation = {
  __typename?: "mutation_root";
  insert_cards_one?: {
    __typename?: "cards";
    id: any;
    title: string;
    position: number;
  } | null;
};

export type UpdateCardMutationVariables = Exact<{
  id: Scalars["uuid"]["input"];
  columnId: Scalars["uuid"]["input"];
  position: Scalars["Int"]["input"];
}>;

export type UpdateCardMutation = {
  __typename?: "mutation_root";
  update_cards_by_pk?: {
    __typename?: "cards";
    id: any;
    column_id: any;
    position: number;
  } | null;
};

export type DeleteCardMutationVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type DeleteCardMutation = {
  __typename?: "mutation_root";
  delete_cards_by_pk?: { __typename?: "cards"; id: any } | null;
};

export type GetBoardsQueryVariables = Exact<{ [key: string]: never }>;

export type GetBoardsQuery = {
  __typename?: "query_root";
  boards: Array<{
    __typename?: "boards";
    id: any;
    title: string;
    created_at: any;
    updated_at: any;
  }>;
};

export type GetBoardQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type GetBoardQuery = {
  __typename?: "query_root";
  boards_by_pk?: {
    __typename?: "boards";
    id: any;
    title: string;
    created_at: any;
    updated_at: any;
    columns: Array<{
      __typename?: "columns";
      id: any;
      title: string;
      position: number;
      cards: Array<{
        __typename?: "cards";
        id: any;
        title: string;
        position: number;
      }>;
    }>;
  } | null;
};

export type GetBoardByIdQueryVariables = Exact<{
  id: Scalars["uuid"]["input"];
}>;

export type GetBoardByIdQuery = {
  __typename?: "query_root";
  boards_by_pk?: {
    __typename?: "boards";
    id: any;
    title: string;
    created_at: any;
    updated_at: any;
  } | null;
};

export type OnCardsByBoardSubscriptionVariables = Exact<{
  boardId: Scalars["uuid"]["input"];
}>;

export type OnCardsByBoardSubscription = {
  __typename?: "subscription_root";
  columns: Array<{
    __typename?: "columns";
    id: any;
    title: string;
    position: number;
    board_id: any;
    cards: Array<{
      __typename?: "cards";
      id: any;
      title: string;
      position: number;
      column_id: any;
    }>;
  }>;
};

export const CreateBoardDocument = gql`
  mutation CreateBoard($title: String!) {
    insert_boards_one(object: { title: $title }) {
      id
      title
    }
  }
`;
export type CreateBoardMutationFn = Apollo.MutationFunction<
  CreateBoardMutation,
  CreateBoardMutationVariables
>;

/**
 * __useCreateBoardMutation__
 *
 * To run a mutation, you first call `useCreateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardMutation, { data, loading, error }] = useCreateBoardMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBoardMutation,
    CreateBoardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateBoardMutation, CreateBoardMutationVariables>(
    CreateBoardDocument,
    options,
  );
}
export type CreateBoardMutationHookResult = ReturnType<
  typeof useCreateBoardMutation
>;
export type CreateBoardMutationResult =
  Apollo.MutationResult<CreateBoardMutation>;
export type CreateBoardMutationOptions = Apollo.BaseMutationOptions<
  CreateBoardMutation,
  CreateBoardMutationVariables
>;
export const UpdateBoardDocument = gql`
  mutation UpdateBoard($id: uuid!, $title: String!) {
    update_boards_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`;
export type UpdateBoardMutationFn = Apollo.MutationFunction<
  UpdateBoardMutation,
  UpdateBoardMutationVariables
>;

/**
 * __useUpdateBoardMutation__
 *
 * To run a mutation, you first call `useUpdateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardMutation, { data, loading, error }] = useUpdateBoardMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBoardMutation,
    UpdateBoardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateBoardMutation, UpdateBoardMutationVariables>(
    UpdateBoardDocument,
    options,
  );
}
export type UpdateBoardMutationHookResult = ReturnType<
  typeof useUpdateBoardMutation
>;
export type UpdateBoardMutationResult =
  Apollo.MutationResult<UpdateBoardMutation>;
export type UpdateBoardMutationOptions = Apollo.BaseMutationOptions<
  UpdateBoardMutation,
  UpdateBoardMutationVariables
>;
export const DeleteBoardDocument = gql`
  mutation DeleteBoard($id: uuid!) {
    delete_boards_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteBoardMutationFn = Apollo.MutationFunction<
  DeleteBoardMutation,
  DeleteBoardMutationVariables
>;

/**
 * __useDeleteBoardMutation__
 *
 * To run a mutation, you first call `useDeleteBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBoardMutation, { data, loading, error }] = useDeleteBoardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBoardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteBoardMutation,
    DeleteBoardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteBoardMutation, DeleteBoardMutationVariables>(
    DeleteBoardDocument,
    options,
  );
}
export type DeleteBoardMutationHookResult = ReturnType<
  typeof useDeleteBoardMutation
>;
export type DeleteBoardMutationResult =
  Apollo.MutationResult<DeleteBoardMutation>;
export type DeleteBoardMutationOptions = Apollo.BaseMutationOptions<
  DeleteBoardMutation,
  DeleteBoardMutationVariables
>;
export const CreateColumnDocument = gql`
  mutation CreateColumn($boardId: uuid!, $title: String!, $position: Int!) {
    insert_columns_one(
      object: { board_id: $boardId, title: $title, position: $position }
    ) {
      id
      title
      position
    }
  }
`;
export type CreateColumnMutationFn = Apollo.MutationFunction<
  CreateColumnMutation,
  CreateColumnMutationVariables
>;

/**
 * __useCreateColumnMutation__
 *
 * To run a mutation, you first call `useCreateColumnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateColumnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createColumnMutation, { data, loading, error }] = useCreateColumnMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      title: // value for 'title'
 *      position: // value for 'position'
 *   },
 * });
 */
export function useCreateColumnMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateColumnMutation,
    CreateColumnMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateColumnMutation,
    CreateColumnMutationVariables
  >(CreateColumnDocument, options);
}
export type CreateColumnMutationHookResult = ReturnType<
  typeof useCreateColumnMutation
>;
export type CreateColumnMutationResult =
  Apollo.MutationResult<CreateColumnMutation>;
export type CreateColumnMutationOptions = Apollo.BaseMutationOptions<
  CreateColumnMutation,
  CreateColumnMutationVariables
>;
export const UpdateColumnDocument = gql`
  mutation UpdateColumn($id: uuid!, $title: String!) {
    update_columns_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
      title
    }
  }
`;
export type UpdateColumnMutationFn = Apollo.MutationFunction<
  UpdateColumnMutation,
  UpdateColumnMutationVariables
>;

/**
 * __useUpdateColumnMutation__
 *
 * To run a mutation, you first call `useUpdateColumnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateColumnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateColumnMutation, { data, loading, error }] = useUpdateColumnMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateColumnMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateColumnMutation,
    UpdateColumnMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateColumnMutation,
    UpdateColumnMutationVariables
  >(UpdateColumnDocument, options);
}
export type UpdateColumnMutationHookResult = ReturnType<
  typeof useUpdateColumnMutation
>;
export type UpdateColumnMutationResult =
  Apollo.MutationResult<UpdateColumnMutation>;
export type UpdateColumnMutationOptions = Apollo.BaseMutationOptions<
  UpdateColumnMutation,
  UpdateColumnMutationVariables
>;
export const DeleteColumnDocument = gql`
  mutation DeleteColumn($id: uuid!) {
    delete_columns_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteColumnMutationFn = Apollo.MutationFunction<
  DeleteColumnMutation,
  DeleteColumnMutationVariables
>;

/**
 * __useDeleteColumnMutation__
 *
 * To run a mutation, you first call `useDeleteColumnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteColumnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteColumnMutation, { data, loading, error }] = useDeleteColumnMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteColumnMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteColumnMutation,
    DeleteColumnMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteColumnMutation,
    DeleteColumnMutationVariables
  >(DeleteColumnDocument, options);
}
export type DeleteColumnMutationHookResult = ReturnType<
  typeof useDeleteColumnMutation
>;
export type DeleteColumnMutationResult =
  Apollo.MutationResult<DeleteColumnMutation>;
export type DeleteColumnMutationOptions = Apollo.BaseMutationOptions<
  DeleteColumnMutation,
  DeleteColumnMutationVariables
>;
export const CreateCardDocument = gql`
  mutation CreateCard($columnId: uuid!, $title: String!, $position: Int!) {
    insert_cards_one(
      object: { column_id: $columnId, title: $title, position: $position }
    ) {
      id
      title
      position
    }
  }
`;
export type CreateCardMutationFn = Apollo.MutationFunction<
  CreateCardMutation,
  CreateCardMutationVariables
>;

/**
 * __useCreateCardMutation__
 *
 * To run a mutation, you first call `useCreateCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCardMutation, { data, loading, error }] = useCreateCardMutation({
 *   variables: {
 *      columnId: // value for 'columnId'
 *      title: // value for 'title'
 *      position: // value for 'position'
 *   },
 * });
 */
export function useCreateCardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCardMutation,
    CreateCardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateCardMutation, CreateCardMutationVariables>(
    CreateCardDocument,
    options,
  );
}
export type CreateCardMutationHookResult = ReturnType<
  typeof useCreateCardMutation
>;
export type CreateCardMutationResult =
  Apollo.MutationResult<CreateCardMutation>;
export type CreateCardMutationOptions = Apollo.BaseMutationOptions<
  CreateCardMutation,
  CreateCardMutationVariables
>;
export const UpdateCardDocument = gql`
  mutation UpdateCard($id: uuid!, $columnId: uuid!, $position: Int!) {
    update_cards_by_pk(
      pk_columns: { id: $id }
      _set: { column_id: $columnId, position: $position }
    ) {
      id
      column_id
      position
    }
  }
`;
export type UpdateCardMutationFn = Apollo.MutationFunction<
  UpdateCardMutation,
  UpdateCardMutationVariables
>;

/**
 * __useUpdateCardMutation__
 *
 * To run a mutation, you first call `useUpdateCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCardMutation, { data, loading, error }] = useUpdateCardMutation({
 *   variables: {
 *      id: // value for 'id'
 *      columnId: // value for 'columnId'
 *      position: // value for 'position'
 *   },
 * });
 */
export function useUpdateCardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCardMutation,
    UpdateCardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateCardMutation, UpdateCardMutationVariables>(
    UpdateCardDocument,
    options,
  );
}
export type UpdateCardMutationHookResult = ReturnType<
  typeof useUpdateCardMutation
>;
export type UpdateCardMutationResult =
  Apollo.MutationResult<UpdateCardMutation>;
export type UpdateCardMutationOptions = Apollo.BaseMutationOptions<
  UpdateCardMutation,
  UpdateCardMutationVariables
>;
export const DeleteCardDocument = gql`
  mutation DeleteCard($id: uuid!) {
    delete_cards_by_pk(id: $id) {
      id
    }
  }
`;
export type DeleteCardMutationFn = Apollo.MutationFunction<
  DeleteCardMutation,
  DeleteCardMutationVariables
>;

/**
 * __useDeleteCardMutation__
 *
 * To run a mutation, you first call `useDeleteCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCardMutation, { data, loading, error }] = useDeleteCardMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCardMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteCardMutation,
    DeleteCardMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteCardMutation, DeleteCardMutationVariables>(
    DeleteCardDocument,
    options,
  );
}
export type DeleteCardMutationHookResult = ReturnType<
  typeof useDeleteCardMutation
>;
export type DeleteCardMutationResult =
  Apollo.MutationResult<DeleteCardMutation>;
export type DeleteCardMutationOptions = Apollo.BaseMutationOptions<
  DeleteCardMutation,
  DeleteCardMutationVariables
>;
export const GetBoardsDocument = gql`
  query GetBoards {
    boards {
      id
      title
      created_at
      updated_at
    }
  }
`;

/**
 * __useGetBoardsQuery__
 *
 * To run a query within a React component, call `useGetBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBoardsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetBoardsQuery,
    GetBoardsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBoardsQuery, GetBoardsQueryVariables>(
    GetBoardsDocument,
    options,
  );
}
export function useGetBoardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBoardsQuery,
    GetBoardsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBoardsQuery, GetBoardsQueryVariables>(
    GetBoardsDocument,
    options,
  );
}
export function useGetBoardsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetBoardsQuery, GetBoardsQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetBoardsQuery, GetBoardsQueryVariables>(
    GetBoardsDocument,
    options,
  );
}
export type GetBoardsQueryHookResult = ReturnType<typeof useGetBoardsQuery>;
export type GetBoardsLazyQueryHookResult = ReturnType<
  typeof useGetBoardsLazyQuery
>;
export type GetBoardsSuspenseQueryHookResult = ReturnType<
  typeof useGetBoardsSuspenseQuery
>;
export type GetBoardsQueryResult = Apollo.QueryResult<
  GetBoardsQuery,
  GetBoardsQueryVariables
>;
export const GetBoardDocument = gql`
  query GetBoard($id: uuid!) {
    boards_by_pk(id: $id) {
      id
      title
      created_at
      updated_at
      columns {
        id
        title
        position
        cards {
          id
          title
          position
        }
      }
    }
  }
`;

/**
 * __useGetBoardQuery__
 *
 * To run a query within a React component, call `useGetBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBoardQuery(
  baseOptions: Apollo.QueryHookOptions<GetBoardQuery, GetBoardQueryVariables> &
    ({ variables: GetBoardQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBoardQuery, GetBoardQueryVariables>(
    GetBoardDocument,
    options,
  );
}
export function useGetBoardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBoardQuery,
    GetBoardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBoardQuery, GetBoardQueryVariables>(
    GetBoardDocument,
    options,
  );
}
export function useGetBoardSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetBoardQuery, GetBoardQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetBoardQuery, GetBoardQueryVariables>(
    GetBoardDocument,
    options,
  );
}
export type GetBoardQueryHookResult = ReturnType<typeof useGetBoardQuery>;
export type GetBoardLazyQueryHookResult = ReturnType<
  typeof useGetBoardLazyQuery
>;
export type GetBoardSuspenseQueryHookResult = ReturnType<
  typeof useGetBoardSuspenseQuery
>;
export type GetBoardQueryResult = Apollo.QueryResult<
  GetBoardQuery,
  GetBoardQueryVariables
>;
export const GetBoardByIdDocument = gql`
  query GetBoardById($id: uuid!) {
    boards_by_pk(id: $id) {
      id
      title
      created_at
      updated_at
    }
  }
`;

/**
 * __useGetBoardByIdQuery__
 *
 * To run a query within a React component, call `useGetBoardByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBoardByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetBoardByIdQuery,
    GetBoardByIdQueryVariables
  > &
    (
      | { variables: GetBoardByIdQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBoardByIdQuery, GetBoardByIdQueryVariables>(
    GetBoardByIdDocument,
    options,
  );
}
export function useGetBoardByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBoardByIdQuery,
    GetBoardByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBoardByIdQuery, GetBoardByIdQueryVariables>(
    GetBoardByIdDocument,
    options,
  );
}
export function useGetBoardByIdSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetBoardByIdQuery,
        GetBoardByIdQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetBoardByIdQuery, GetBoardByIdQueryVariables>(
    GetBoardByIdDocument,
    options,
  );
}
export type GetBoardByIdQueryHookResult = ReturnType<
  typeof useGetBoardByIdQuery
>;
export type GetBoardByIdLazyQueryHookResult = ReturnType<
  typeof useGetBoardByIdLazyQuery
>;
export type GetBoardByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetBoardByIdSuspenseQuery
>;
export type GetBoardByIdQueryResult = Apollo.QueryResult<
  GetBoardByIdQuery,
  GetBoardByIdQueryVariables
>;
export const OnCardsByBoardDocument = gql`
  subscription OnCardsByBoard($boardId: uuid!) {
    columns(
      where: { board_id: { _eq: $boardId } }
      order_by: { position: asc }
    ) {
      id
      title
      position
      board_id
      cards(order_by: { position: asc }) {
        id
        title
        position
        column_id
      }
    }
  }
`;

/**
 * __useOnCardsByBoardSubscription__
 *
 * To run a query within a React component, call `useOnCardsByBoardSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCardsByBoardSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCardsByBoardSubscription({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useOnCardsByBoardSubscription(
  baseOptions: Apollo.SubscriptionHookOptions<
    OnCardsByBoardSubscription,
    OnCardsByBoardSubscriptionVariables
  > &
    (
      | { variables: OnCardsByBoardSubscriptionVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    OnCardsByBoardSubscription,
    OnCardsByBoardSubscriptionVariables
  >(OnCardsByBoardDocument, options);
}
export type OnCardsByBoardSubscriptionHookResult = ReturnType<
  typeof useOnCardsByBoardSubscription
>;
export type OnCardsByBoardSubscriptionResult =
  Apollo.SubscriptionResult<OnCardsByBoardSubscription>;
