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
  onClick?: Function;
  closeMenu: Function;
}) {
  const { url, text, ListIcon, onClick, closeMenu } = props;
  return (
    <ListItem button onClick={closeMenu}>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      {url && <LinkElement url={url} text={text} />}
      {onClick && <LinkElement onClick={onClick} text={text} />}
    </ListItem>
  );
}
