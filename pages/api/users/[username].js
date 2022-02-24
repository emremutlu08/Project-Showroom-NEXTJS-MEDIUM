/* DATABASE */
import dbConnect from '../../../lib/dbConnect';
import Users from '../../../models/Users';

/* MESSAGES */
import { WRONG_METHOD } from '../../../lib/general/messages';
import {
  USER_LISTED,
  USER_LISTED_ERROR,
} from '../../../lib/api/users/messages';

/* MAIN FUNCTION */
export default async function handler(req, res) {
  const {
    query: { username },
    method,
  } = req;
  await dbConnect();

  switch (method) {
    // Get the user
    case 'GET':
      try {
        const userItem = await Users.findOne({ username });

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

    default:
      res
        .status(400)
        .json({ success: false, message: WRONG_METHOD, loading: false });
      break;
  }
}
