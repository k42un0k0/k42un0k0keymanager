// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserAccount, OuterAccount } = initSchema(schema);

export {
  UserAccount,
  OuterAccount
};