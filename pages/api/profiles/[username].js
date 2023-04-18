/* DATABASE */
import Profiles from '../../../models/Profiles';

/* MESSAGES */
import { WRONG_METHOD } from '../../../lib/general/messages';
import {
  USER_LISTED,
  USER_LISTED_ERROR,
} from '../../../lib/api/users/messages';
import connect from '../../../lib/database';

/* MAIN FUNCTION */
export default async function handler(req, res) {
  await connect();
  const {
    query: { username },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const findWithUsername = await Profiles.findOne({
          creatorDefaultUserName: username,
        });

        if (!findWithUsername) {
          return res.status(400).json({
            success: false,
            message: USER_LISTED_ERROR,
            loading: false,
          });
        }

        res.status(200).json({
          success: true,
          data: findWithUsername,
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
