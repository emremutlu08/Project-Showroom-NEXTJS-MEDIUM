/* NEXT.JS */
import LinkNext from 'next/link';

/* MATERIAL UI */

// Components
import MailIcon from '@material-ui/icons/Mail';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

/* Main Component */
export default function ListItemIconButton(props: {
  url?: URL;
  text: any;
  ListIcon: typeof MailIcon;
  disabled?: boolean;
  onClick?: any;
}) {
  const { url, text, ListIcon, onClick, disabled = false } = props;

  if (url) {
    return (
      <LinkNext href={url} passHref>
        <ListItem button onClick={onClick} disabled={disabled}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          {text}
        </ListItem>
      </LinkNext>
    );
  }
  return (
    <ListItem button onClick={onClick} disabled={disabled}>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      {text}
    </ListItem>
  );
}
