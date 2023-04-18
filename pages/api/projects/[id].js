/* DATABASE */
import Projects from '../../../models/Projects';

/* MESSAGES */
import {
  // PROVIDE_PW,
  ITEM_LISTED,
  ITEM_LISTED_ERROR,
  ITEM_EDITED,
  ITEM_EDITED_ERROR,
  ITEM_DELETED,
  ITEM_DELETED_ERROR,
  WRONG_METHOD,
} from '../../../lib/api/projects/messages';
import connect from '../../../lib/database';

/* MAIN FUNCTION */
export default async function handler(req, res) {
  let { body } = req;
  const {
    query: { id },
    method,
  } = req;
  await connect();

  delete body.pw;
  const bodyArr = [body];
  const filteredBody = bodyArr.map(
    ({
      projectTitle,
      thumbnailUrl,
      description,
      skillTags,
      leftButtonTitle,
      leftButtonUrl,
      rightButtonTitle,
      rightButtonUrl,
    }) => ({
      projectTitle,
      thumbnailUrl,
      description,
      skillTags,
      leftButtonTitle,
      leftButtonUrl,
      rightButtonTitle,
      rightButtonUrl,
    }),
  );
  body = filteredBody[0];

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const galleryItem = await Projects.find({
          $or: [{ creatorId: id }, { creatorDefaultUserName: id }],
        });

        if (!galleryItem) {
          return res.status(400).json({
            success: false,
            message: ITEM_LISTED_ERROR,
            loading: false,
          });
        }

        res.status(200).json({
          success: true,
          data: galleryItem,
          message: ITEM_LISTED,
          loading: false,
        });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: ITEM_LISTED_ERROR, loading: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const updatedData = { id, ...body };
        // update an item
        await Projects.findByIdAndUpdate(id, updatedData);
        res.status(200).json({
          success: true,
          data: updatedData,
          message: ITEM_EDITED,
          loading: false,
        });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: ITEM_EDITED_ERROR, loading: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        await Projects.findByIdAndDelete(id);
        res.status(200).json({
          success: true,
          data: {},
          message: ITEM_DELETED,
          loading: false,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: ITEM_DELETED_ERROR,
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
