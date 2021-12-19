/* COMPONENTS */
import * as Icons from '@icons-pack/react-simple-icons';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const AllIcons = Object.keys(Icons);
/* MAIN COMPONENT */
export default function index(props) {
  const { iconName, className } = props;
  const IconList = Icons;
  // Icons
  const isIconExist = AllIcons.includes(iconName);
  const TagName = isIconExist && IconList[iconName];

  return (
    <>
      {isIconExist ? (
        <TagName className={className} />
      ) : (
        <FavoriteIcon className={className} />
      )}
    </>
  );
}
