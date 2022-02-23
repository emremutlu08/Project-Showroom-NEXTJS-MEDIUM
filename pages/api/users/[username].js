/* DATABASE */
import dbConnect from '../../../lib/dbConnect';
import Users from '../../../models/Users';

/* MESSAGES */
import {
  FILL_AREAS,
  WRONG_METHOD,
  UNAUTHORIZED, // TODO: CHANGE TO UNAUTHORIZED
} from '../../../lib/general/messages';
import {
  USER_LISTED,
  USER_LISTED_ERROR,
  USER_DELETED,
  USER_DELETED_ERROR,
} from '../../../lib/api/users/messages';

/* MAIN FUNCTION */
export default async function handler(req, res) {
  const {
    query: { username },
    method,
  } = req;
  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
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

    case 'DELETE' /* Delete a model by its ID */:
      try {
        await Users.findOneAndDelete({ username });
        res.status(200).json({
          success: true,
          data: {},
          message: USER_DELETED,
          loading: false,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: USER_DELETED_ERROR,
          loading: false,
        });
      }
      break;

    default:
      res
        .status(400)
        .json({ success: false, message: WRONG_METHOD, loading: false });
      break;
  }
}
