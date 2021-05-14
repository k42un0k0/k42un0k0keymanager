/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from '@angular/core';
import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api-graphql';
import { Observable } from 'zen-observable-ts';

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateUserAccountInput = {
  id?: string | null;
  name: string;
  _version?: number | null;
};

export type ModelUserAccountConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelUserAccountConditionInput | null> | null;
  or?: Array<ModelUserAccountConditionInput | null> | null;
  not?: ModelUserAccountConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UserAccount = {
  __typename: 'UserAccount';
  id?: string;
  name?: string;
  OuterAccounts?: ModelOuterAccountConnection;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

export type ModelOuterAccountConnection = {
  __typename: 'ModelOuterAccountConnection';
  items?: Array<OuterAccount | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OuterAccount = {
  __typename: 'OuterAccount';
  id?: string;
  providerName?: string;
  iconPath?: string;
  userId?: string;
  link?: string;
  password?: string;
  userAccountID?: string;
  userAccount?: UserAccount;
  _version?: number;
  _deleted?: boolean | null;
  _lastChangedAt?: number;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

export type UpdateUserAccountInput = {
  id: string;
  name?: string | null;
  _version?: number | null;
};

export type DeleteUserAccountInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateOuterAccountInput = {
  id?: string | null;
  providerName: string;
  iconPath: string;
  userId: string;
  link: string;
  password: string;
  userAccountID: string;
  _version?: number | null;
};

export type ModelOuterAccountConditionInput = {
  providerName?: ModelStringInput | null;
  iconPath?: ModelStringInput | null;
  userId?: ModelStringInput | null;
  link?: ModelStringInput | null;
  password?: ModelStringInput | null;
  userAccountID?: ModelIDInput | null;
  and?: Array<ModelOuterAccountConditionInput | null> | null;
  or?: Array<ModelOuterAccountConditionInput | null> | null;
  not?: ModelOuterAccountConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateOuterAccountInput = {
  id: string;
  providerName?: string | null;
  iconPath?: string | null;
  userId?: string | null;
  link?: string | null;
  password?: string | null;
  userAccountID?: string | null;
  _version?: number | null;
};

export type DeleteOuterAccountInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelUserAccountFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelUserAccountFilterInput | null> | null;
  or?: Array<ModelUserAccountFilterInput | null> | null;
  not?: ModelUserAccountFilterInput | null;
};

export type ModelUserAccountConnection = {
  __typename: 'ModelUserAccountConnection';
  items?: Array<UserAccount | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelOuterAccountFilterInput = {
  id?: ModelIDInput | null;
  providerName?: ModelStringInput | null;
  iconPath?: ModelStringInput | null;
  userId?: ModelStringInput | null;
  link?: ModelStringInput | null;
  password?: ModelStringInput | null;
  userAccountID?: ModelIDInput | null;
  and?: Array<ModelOuterAccountFilterInput | null> | null;
  or?: Array<ModelOuterAccountFilterInput | null> | null;
  not?: ModelOuterAccountFilterInput | null;
};

export type CreateUserAccountMutation = {
  __typename: 'UserAccount';
  id: string;
  name: string;
  OuterAccounts?: {
    __typename: 'ModelOuterAccountConnection';
    items?: Array<{
      __typename: 'OuterAccount';
      id: string;
      providerName: string;
      iconPath: string;
      userId: string;
      link: string;
      password: string;
      userAccountID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateUserAccountMutation = {
  __typename: 'UserAccount';
  id: string;
  name: string;
  OuterAccounts?: {
    __typename: 'ModelOuterAccountConnection';
    items?: Array<{
      __typename: 'OuterAccount';
      id: string;
      providerName: string;
      iconPath: string;
      userId: string;
      link: string;
      password: string;
      userAccountID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteUserAccountMutation = {
  __typename: 'UserAccount';
  id: string;
  name: string;
  OuterAccounts?: {
    __typename: 'ModelOuterAccountConnection';
    items?: Array<{
      __typename: 'OuterAccount';
      id: string;
      providerName: string;
      iconPath: string;
      userId: string;
      link: string;
      password: string;
      userAccountID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateOuterAccountMutation = {
  __typename: 'OuterAccount';
  id: string;
  providerName: string;
  iconPath: string;
  userId: string;
  link: string;
  password: string;
  userAccountID: string;
  userAccount: {
    __typename: 'UserAccount';
    id: string;
    name: string;
    OuterAccounts?: {
      __typename: 'ModelOuterAccountConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateOuterAccountMutation = {
  __typename: 'OuterAccount';
  id: string;
  providerName: string;
  iconPath: string;
  userId: string;
  link: string;
  password: string;
  userAccountID: string;
  userAccount: {
    __typename: 'UserAccount';
    id: string;
    name: string;
    OuterAccounts?: {
      __typename: 'ModelOuterAccountConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteOuterAccountMutation = {
  __typename: 'OuterAccount';
  id: string;
  providerName: string;
  iconPath: string;
  userId: string;
  link: string;
  password: string;
  userAccountID: string;
  userAccount: {
    __typename: 'UserAccount';
    id: string;
    name: string;
    OuterAccounts?: {
      __typename: 'ModelOuterAccountConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type SyncUserAccountsQuery = {
  __typename: 'ModelUserAccountConnection';
  items?: Array<{
    __typename: 'UserAccount';
    id: string;
    name: string;
    OuterAccounts?: {
      __typename: 'ModelOuterAccountConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetUserAccountQuery = {
  __typename: 'UserAccount';
  id: string;
  name: string;
  OuterAccounts?: {
    __typename: 'ModelOuterAccountConnection';
    items?: Array<{
      __typename: 'OuterAccount';
      id: string;
      providerName: string;
      iconPath: string;
      userId: string;
      link: string;
      password: string;
      userAccountID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListUserAccountsQuery = {
  __typename: 'ModelUserAccountConnection';
  items?: Array<{
    __typename: 'UserAccount';
    id: string;
    name: string;
    OuterAccounts?: {
      __typename: 'ModelOuterAccountConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncOuterAccountsQuery = {
  __typename: 'ModelOuterAccountConnection';
  items?: Array<{
    __typename: 'OuterAccount';
    id: string;
    providerName: string;
    iconPath: string;
    userId: string;
    link: string;
    password: string;
    userAccountID: string;
    userAccount: {
      __typename: 'UserAccount';
      id: string;
      name: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetOuterAccountQuery = {
  __typename: 'OuterAccount';
  id: string;
  providerName: string;
  iconPath: string;
  userId: string;
  link: string;
  password: string;
  userAccountID: string;
  userAccount: {
    __typename: 'UserAccount';
    id: string;
    name: string;
    OuterAccounts?: {
      __typename: 'ModelOuterAccountConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListOuterAccountsQuery = {
  __typename: 'ModelOuterAccountConnection';
  items?: Array<{
    __typename: 'OuterAccount';
    id: string;
    providerName: string;
    iconPath: string;
    userId: string;
    link: string;
    password: string;
    userAccountID: string;
    userAccount: {
      __typename: 'UserAccount';
      id: string;
      name: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateUserAccountSubscription = {
  __typename: 'UserAccount';
  id: string;
  name: string;
  OuterAccounts?: {
    __typename: 'ModelOuterAccountConnection';
    items?: Array<{
      __typename: 'OuterAccount';
      id: string;
      providerName: string;
      iconPath: string;
      userId: string;
      link: string;
      password: string;
      userAccountID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateUserAccountSubscription = {
  __typename: 'UserAccount';
  id: string;
  name: string;
  OuterAccounts?: {
    __typename: 'ModelOuterAccountConnection';
    items?: Array<{
      __typename: 'OuterAccount';
      id: string;
      providerName: string;
      iconPath: string;
      userId: string;
      link: string;
      password: string;
      userAccountID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteUserAccountSubscription = {
  __typename: 'UserAccount';
  id: string;
  name: string;
  OuterAccounts?: {
    __typename: 'ModelOuterAccountConnection';
    items?: Array<{
      __typename: 'OuterAccount';
      id: string;
      providerName: string;
      iconPath: string;
      userId: string;
      link: string;
      password: string;
      userAccountID: string;
      _version: number;
      _deleted?: boolean | null;
      _lastChangedAt: number;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null> | null;
    nextToken?: string | null;
    startedAt?: number | null;
  } | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateOuterAccountSubscription = {
  __typename: 'OuterAccount';
  id: string;
  providerName: string;
  iconPath: string;
  userId: string;
  link: string;
  password: string;
  userAccountID: string;
  userAccount: {
    __typename: 'UserAccount';
    id: string;
    name: string;
    OuterAccounts?: {
      __typename: 'ModelOuterAccountConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateOuterAccountSubscription = {
  __typename: 'OuterAccount';
  id: string;
  providerName: string;
  iconPath: string;
  userId: string;
  link: string;
  password: string;
  userAccountID: string;
  userAccount: {
    __typename: 'UserAccount';
    id: string;
    name: string;
    OuterAccounts?: {
      __typename: 'ModelOuterAccountConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteOuterAccountSubscription = {
  __typename: 'OuterAccount';
  id: string;
  providerName: string;
  iconPath: string;
  userId: string;
  link: string;
  password: string;
  userAccountID: string;
  userAccount: {
    __typename: 'UserAccount';
    id: string;
    name: string;
    OuterAccounts?: {
      __typename: 'ModelOuterAccountConnection';
      nextToken?: string | null;
      startedAt?: number | null;
    } | null;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

@Injectable({
  providedIn: 'root',
})
export class APIService {
  async CreateUserAccount(
    input: CreateUserAccountInput,
    condition?: ModelUserAccountConditionInput
  ): Promise<CreateUserAccountMutation> {
    const statement = `mutation CreateUserAccount($input: CreateUserAccountInput!, $condition: ModelUserAccountConditionInput) {
        createUserAccount(input: $input, condition: $condition) {
          __typename
          id
          name
          OuterAccounts {
            __typename
            items {
              __typename
              id
              providerName
              iconPath
              userId
              link
              password
              userAccountID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <CreateUserAccountMutation>response.data.createUserAccount;
  }
  async UpdateUserAccount(
    input: UpdateUserAccountInput,
    condition?: ModelUserAccountConditionInput
  ): Promise<UpdateUserAccountMutation> {
    const statement = `mutation UpdateUserAccount($input: UpdateUserAccountInput!, $condition: ModelUserAccountConditionInput) {
        updateUserAccount(input: $input, condition: $condition) {
          __typename
          id
          name
          OuterAccounts {
            __typename
            items {
              __typename
              id
              providerName
              iconPath
              userId
              link
              password
              userAccountID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <UpdateUserAccountMutation>response.data.updateUserAccount;
  }
  async DeleteUserAccount(
    input: DeleteUserAccountInput,
    condition?: ModelUserAccountConditionInput
  ): Promise<DeleteUserAccountMutation> {
    const statement = `mutation DeleteUserAccount($input: DeleteUserAccountInput!, $condition: ModelUserAccountConditionInput) {
        deleteUserAccount(input: $input, condition: $condition) {
          __typename
          id
          name
          OuterAccounts {
            __typename
            items {
              __typename
              id
              providerName
              iconPath
              userId
              link
              password
              userAccountID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <DeleteUserAccountMutation>response.data.deleteUserAccount;
  }
  async CreateOuterAccount(
    input: CreateOuterAccountInput,
    condition?: ModelOuterAccountConditionInput
  ): Promise<CreateOuterAccountMutation> {
    const statement = `mutation CreateOuterAccount($input: CreateOuterAccountInput!, $condition: ModelOuterAccountConditionInput) {
        createOuterAccount(input: $input, condition: $condition) {
          __typename
          id
          providerName
          iconPath
          userId
          link
          password
          userAccountID
          userAccount {
            __typename
            id
            name
            OuterAccounts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <CreateOuterAccountMutation>response.data.createOuterAccount;
  }
  async UpdateOuterAccount(
    input: UpdateOuterAccountInput,
    condition?: ModelOuterAccountConditionInput
  ): Promise<UpdateOuterAccountMutation> {
    const statement = `mutation UpdateOuterAccount($input: UpdateOuterAccountInput!, $condition: ModelOuterAccountConditionInput) {
        updateOuterAccount(input: $input, condition: $condition) {
          __typename
          id
          providerName
          iconPath
          userId
          link
          password
          userAccountID
          userAccount {
            __typename
            id
            name
            OuterAccounts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <UpdateOuterAccountMutation>response.data.updateOuterAccount;
  }
  async DeleteOuterAccount(
    input: DeleteOuterAccountInput,
    condition?: ModelOuterAccountConditionInput
  ): Promise<DeleteOuterAccountMutation> {
    const statement = `mutation DeleteOuterAccount($input: DeleteOuterAccountInput!, $condition: ModelOuterAccountConditionInput) {
        deleteOuterAccount(input: $input, condition: $condition) {
          __typename
          id
          providerName
          iconPath
          userId
          link
          password
          userAccountID
          userAccount {
            __typename
            id
            name
            OuterAccounts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input,
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <DeleteOuterAccountMutation>response.data.deleteOuterAccount;
  }
  async SyncUserAccounts(
    filter?: ModelUserAccountFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncUserAccountsQuery> {
    const statement = `query SyncUserAccounts($filter: ModelUserAccountFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncUserAccounts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            OuterAccounts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <SyncUserAccountsQuery>response.data.syncUserAccounts;
  }
  async GetUserAccount(id: string): Promise<GetUserAccountQuery> {
    const statement = `query GetUserAccount($id: ID!) {
        getUserAccount(id: $id) {
          __typename
          id
          name
          OuterAccounts {
            __typename
            items {
              __typename
              id
              providerName
              iconPath
              userId
              link
              password
              userAccountID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <GetUserAccountQuery>response.data.getUserAccount;
  }
  async ListUserAccounts(
    filter?: ModelUserAccountFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUserAccountsQuery> {
    const statement = `query ListUserAccounts($filter: ModelUserAccountFilterInput, $limit: Int, $nextToken: String) {
        listUserAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            OuterAccounts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <ListUserAccountsQuery>response.data.listUserAccounts;
  }
  async SyncOuterAccounts(
    filter?: ModelOuterAccountFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncOuterAccountsQuery> {
    const statement = `query SyncOuterAccounts($filter: ModelOuterAccountFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncOuterAccounts(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            providerName
            iconPath
            userId
            link
            password
            userAccountID
            userAccount {
              __typename
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <SyncOuterAccountsQuery>response.data.syncOuterAccounts;
  }
  async GetOuterAccount(id: string): Promise<GetOuterAccountQuery> {
    const statement = `query GetOuterAccount($id: ID!) {
        getOuterAccount(id: $id) {
          __typename
          id
          providerName
          iconPath
          userId
          link
          password
          userAccountID
          userAccount {
            __typename
            id
            name
            OuterAccounts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
    };
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <GetOuterAccountQuery>response.data.getOuterAccount;
  }
  async ListOuterAccounts(
    filter?: ModelOuterAccountFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOuterAccountsQuery> {
    const statement = `query ListOuterAccounts($filter: ModelOuterAccountFilterInput, $limit: Int, $nextToken: String) {
        listOuterAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            providerName
            iconPath
            userId
            link
            password
            userAccountID
            userAccount {
              __typename
              id
              name
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(graphqlOperation(statement, gqlAPIServiceArguments))) as any;
    return <ListOuterAccountsQuery>response.data.listOuterAccounts;
  }
  OnCreateUserAccountListener: Observable<SubscriptionResponse<OnCreateUserAccountSubscription>> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUserAccount($owner: String!) {
        onCreateUserAccount(owner: $owner) {
          __typename
          id
          name
          OuterAccounts {
            __typename
            items {
              __typename
              id
              providerName
              iconPath
              userId
              link
              password
              userAccountID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserAccountSubscription>>;

  OnUpdateUserAccountListener: Observable<SubscriptionResponse<OnUpdateUserAccountSubscription>> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUserAccount($owner: String!) {
        onUpdateUserAccount(owner: $owner) {
          __typename
          id
          name
          OuterAccounts {
            __typename
            items {
              __typename
              id
              providerName
              iconPath
              userId
              link
              password
              userAccountID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserAccountSubscription>>;

  OnDeleteUserAccountListener: Observable<SubscriptionResponse<OnDeleteUserAccountSubscription>> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUserAccount($owner: String!) {
        onDeleteUserAccount(owner: $owner) {
          __typename
          id
          name
          OuterAccounts {
            __typename
            items {
              __typename
              id
              providerName
              iconPath
              userId
              link
              password
              userAccountID
              _version
              _deleted
              _lastChangedAt
              createdAt
              updatedAt
              owner
            }
            nextToken
            startedAt
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserAccountSubscription>>;

  OnCreateOuterAccountListener: Observable<SubscriptionResponse<OnCreateOuterAccountSubscription>> = API.graphql(
    graphqlOperation(
      `subscription OnCreateOuterAccount($owner: String!) {
        onCreateOuterAccount(owner: $owner) {
          __typename
          id
          providerName
          iconPath
          userId
          link
          password
          userAccountID
          userAccount {
            __typename
            id
            name
            OuterAccounts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateOuterAccountSubscription>>;

  OnUpdateOuterAccountListener: Observable<SubscriptionResponse<OnUpdateOuterAccountSubscription>> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOuterAccount($owner: String!) {
        onUpdateOuterAccount(owner: $owner) {
          __typename
          id
          providerName
          iconPath
          userId
          link
          password
          userAccountID
          userAccount {
            __typename
            id
            name
            OuterAccounts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateOuterAccountSubscription>>;

  OnDeleteOuterAccountListener: Observable<SubscriptionResponse<OnDeleteOuterAccountSubscription>> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOuterAccount($owner: String!) {
        onDeleteOuterAccount(owner: $owner) {
          __typename
          id
          providerName
          iconPath
          userId
          link
          password
          userAccountID
          userAccount {
            __typename
            id
            name
            OuterAccounts {
              __typename
              nextToken
              startedAt
            }
            _version
            _deleted
            _lastChangedAt
            createdAt
            updatedAt
            owner
          }
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteOuterAccountSubscription>>;
}
