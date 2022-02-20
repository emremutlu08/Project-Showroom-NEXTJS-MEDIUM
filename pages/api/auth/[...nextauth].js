import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import {
  jwtParams,
  redirectFunction,
  sessionFunction,
  jwtFunction,
  providers,
} from './authHelpers';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise, { custom: true }),
  providers,
  jwt: jwtParams,
  secret: process.env.JWT_SECRET,
  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: 'jwt',
  },
  callbacks: {
    jwt: jwtFunction,
    redirect: redirectFunction,
    session: sessionFunction,
  },
});
