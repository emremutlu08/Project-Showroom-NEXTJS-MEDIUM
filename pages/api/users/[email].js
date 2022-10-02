/* DATABASE */
import Users from '../../../models/Users';

/* MESSAGES */
import { WRONG_METHOD } from '../../../lib/general/messages';
import {
  USER_FIND_ERROR,
  USER_LISTED,
  USER_LISTED_ERROR,
} from '../../../lib/api/users/messages';
import connect from '../../../lib/database';

/* MAIN FUNCTION */
export default async function handler(req, res) {
  await connect();

  const {
    query: { email },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const userItem = await Users.findOne({ creatorEmail: email });

        if (!userItem) {
          return res.status(400).json({
            success: false,
            message: USER_FIND_ERROR,
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
