/* MATERIAL UI */

// Components
import MailIcon from '@material-ui/icons/Mail';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

/* COMPONENTS */
import LinkElement from './LinkElement';

/* Main Component */
export default function ListItemIconButton(props: {
  url?: URL;
  text: String;
  ListIcon: typeof MailIcon;
  closeMenu: Function;
  disabled?: boolean;
}) {
  const { url, text, ListIcon, closeMenu, disabled = false } = props;
  return (
    <ListItem button onClick={closeMenu} disabled={disabled}>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      {url && <LinkElement url={url} text={text} />}
    </ListItem>
  );
}
