/* DATABASE */
import dbConnect from '../../../lib/dbConnect';
import Projects from '../../../models/Projects';

/* MESSAGES */
import {
  PROJECT_ADDED,
  PROJECT_ADDED_ERROR,
} from '../../../lib/api/projects/messages';
import { FILL_AREAS, WRONG_METHOD } from '../../../lib/general/messages';

/* MAIN FUNCTION */
export default async function handler(req, res) {
  const { method } = req;
  let { body } = req;
  await dbConnect();

  if (method === 'POST') {
    if (!body.username) {
      return res.status(406).json({
        success: false,
        message: FILL_AREAS,
        loading: false,
      });
    }
  }

  switch (method) {
    case 'POST':
      try {
        body.createdAt = Date.now();
        const project = await Projects.create(
          req.body,
        ); /* create a new model in the database */
        res.status(201).json({
          success: true,
          data: project,
          message: PROJECT_ADDED,
          loading: false,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          error,
          message: PROJECT_ADDED_ERROR,
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
