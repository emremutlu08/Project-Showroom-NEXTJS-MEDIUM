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
  adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers,
  jwt: jwtParams,
  secret: process.env.JWT_SECRET,
  callbacks: {
    jwt: jwtFunction,
    redirect: redirectFunction,
    session: sessionFunction,
  },
});
