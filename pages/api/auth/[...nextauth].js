import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import {
  jwtParams,
  sessionParams,
  redirectFunction,
  sessionFunction,
  jwtFunction,
  providers,
} from './authHelpers';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers,
  jwt: jwtParams,
  secret: process.env.JWT_SECRET,
  session: sessionParams,
  callbacks: {
    jwt: jwtFunction,
    redirect: redirectFunction,
    session: sessionFunction,
  },
});
