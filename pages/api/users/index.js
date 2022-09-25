/** USER */
import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

/* DATABASE */
import connect from '../../../lib/database';
import Users from '../../../models/Users';

/* MESSAGES */
import {
  FILL_AREAS,
  WRONG_METHOD,
  UNAUTHORIZED,
} from '../../../lib/general/messages';
import {
  USER_UPDATED,
  USER_UPDATED_ERROR,
  USER_LISTED,
  USER_LISTED_ERROR,
} from '../../../lib/api/users/messages';

/** ENVIRONMENT */
const secret = process.env.JWT_SECRET;

/* MAIN FUNCTION */
export default async function handler(req, res) {
  const { method, body } = req;
  await connect();
  const session = await getSession({ req });
  const token = await getToken({ req, secret });
  const isModified =
    token?.accessToken !== session?.accessToken ||
    token?.email !== session?.user?.email;

  if (isModified) {
    return res.status(401).json({
      success: false,
      message: UNAUTHORIZED,
      loading: false,
    });
  }

  const createUserBody = {
    ...body,
  };

  const filter = {
    email: session?.user?.email,
  };

  // Only PUT method is allowed
  if (method === 'PUT') {
    if (!createUserBody.username) {
      return res.status(406).json({
        success: false,
        message: FILL_AREAS,
        loading: false,
      });
    }
  }

  switch (method) {
    // Update a user
    case 'PUT':
      try {
        body.createdAt = Date.now();
        const user = await Users.findOneAndUpdate(
          filter,
          createUserBody,
        ); /* create a new model in the database */
        res.status(201).json({
          success: true,
          data: user,
          message: USER_UPDATED,
          loading: false,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          error,
          message: USER_UPDATED_ERROR,
          loading: false,
        });
      }
      break;

    // Get the user
    case 'GET':
      try {
        const userItem = await Users.find({ email: session?.user?.email });

        if (!userItem) {
          return res.status(400).json({
            success: false,
            message: USER_LISTED_ERROR,
            loading: false,
          });
        }

        res.status(200).json({
          success: true,
          data: userItem,
          message: USER_LISTED,
          loading: false,
        });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: USER_LISTED_ERROR, loading: false });
      }
      break;
    // TODO: DELETE the user
    // case 'DELETE' /* Delete a model by its ID */:
    // try {
    //   await Users.findOneAndDelete({ username });
    //   res.status(200).json({
    //     success: true,
    //     data: {},
    //     message: USER_DELETED,
    //     loading: false,
    //   });
    // } catch (error) {
    //   res.status(400).json({
    //     success: false,
    //     message: USER_DELETED_ERROR,
    //     loading: false,
    //   });
    // }
    // break;
    default:
      res
        .status(400)
        .json({ success: false, message: WRONG_METHOD, loading: false });
      break;
  }
}
