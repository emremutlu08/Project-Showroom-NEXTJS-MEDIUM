/* DATABASE */
import connect from '../../../lib/database';
import Profiles from '../../../models/Profiles';

/* MESSAGES */
import {
  // PROVIDE_PW,
  GALLERY_LISTED,
  GALLERY_LISTED_ERROR,
  PROJECT_ADDED,
  PROJECT_ADDED_ERROR,
} from '../../../lib/api/projects/messages';
import { WRONG_METHOD } from '../../../lib/general/messages';

import { getCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';

/* MAIN FUNCTION */
export default async function handler(req, res) {
  const { method } = req;
  let { body } = req;
  await connect();

  const token = getCookie('token', { req, res });

  const verified = jwt.decode(token);

  const userId = verified?.id;

  if (method === 'POST') {
    const bodyArr = [body];
    const filteredBody = bodyArr.map(
      ({
        username,
        myDetails,
        giveNameToButton,
        addOneUrl,
        title,
        creatorId,
        creatorEmail,
        creatorDisplayName,
      }) => ({
        username,
        myDetails,
        giveNameToButton,
        addOneUrl,
        title,
        creatorId,
        creatorEmail,
        creatorDisplayName,
      }),
    );
    body = filteredBody[0];
  }

  switch (method) {
    case 'GET':
      try {
        const projectList = await Profiles.find({});
        res.status(200).json({
          success: true,
          data: projectList,
          message: GALLERY_LISTED,
          loading: false,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: GALLERY_LISTED_ERROR,
          error,
          loading: false,
        });
      }
      break;
    case 'POST':
      try {
        const profile = await Profiles.findOne({ creatorId: userId });
        if (!profile) {
          body.createdAt = Date.now();
          const profile = await Profiles.create(
            req.body,
          ); /* create a new model in the database */
          res.status(201).json({
            success: true,
            data: profile,
            message: PROJECT_ADDED,
            loading: false,
          });
        }
        const updatedProfile = await Profiles.findOneAndUpdate(
          { creatorId: userId },
          req.body,
        );
        res.status(201).json({
          success: true,
          data: updatedProfile,
          message: PROJECT_ADDED,
          loading: false,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: PROJECT_ADDED_ERROR,
          error,
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
