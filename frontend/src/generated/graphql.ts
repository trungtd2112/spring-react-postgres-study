import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser?: Maybe<User>;
  deleteUser?: Maybe<Scalars['String']['output']>;
  updateUser?: Maybe<User>;
};


export type MutationAddUserArgs = {
  userInput?: InputMaybe<UserInput>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  userInput?: InputMaybe<UserInput>;
};

export type Query = {
  __typename?: 'Query';
  getUserById: User;
  getUsers: Array<Maybe<User>>;
};


export type QueryGetUserByIdArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  password: Scalars['String']['output'];
};

export type UserInput = {
  additional_address?: InputMaybe<Scalars['String']['input']>;
  date_of_birth: Scalars['Date']['input'];
  district: Scalars['String']['input'];
  email: Scalars['String']['input'];
  first_name_kana: Scalars['String']['input'];
  first_name_kanji: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  health_insurance_association: Scalars['String']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  last_name_kana: Scalars['String']['input'];
  last_name_kanji: Scalars['String']['input'];
  number: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['String']['input'];
  postal_code: Scalars['String']['input'];
  prefecture: Scalars['String']['input'];
  symbol: Scalars['String']['input'];
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', getUsers: Array<{ __typename?: 'User', id: string, email: string } | null> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById: { __typename?: 'User', id: string, email: string } };

export type AddUserMutationVariables = Exact<{
  userInput: UserInput;
}>;


export type AddUserMutation = { __typename?: 'Mutation', addUser?: { __typename?: 'User', id: string, email: string } | null };


export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    id
    email
  }
}
    `;

export function useGetUsersQuery(options?: Omit<Urql.UseQueryArgs<GetUsersQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUsersQuery, GetUsersQueryVariables>({ query: GetUsersDocument, ...options });
};
export const GetUserByIdDocument = gql`
    query getUserById($id: ID!) {
  getUserById(id: $id) {
    id
    email
  }
}
    `;

export function useGetUserByIdQuery(options: Omit<Urql.UseQueryArgs<GetUserByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>({ query: GetUserByIdDocument, ...options });
};
export const AddUserDocument = gql`
    mutation addUser($userInput: UserInput!) {
  addUser(userInput: $userInput) {
    id
    email
  }
}
    `;

export function useAddUserMutation() {
  return Urql.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument);
};