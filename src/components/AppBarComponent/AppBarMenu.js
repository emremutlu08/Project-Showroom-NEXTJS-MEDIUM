/* MATERIAL UI */
// Components
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Divider } from '@material-ui/core';

/* COMPONENTS */
import ListItemIconButton from '../General/ListItemIconButton';
import UrlHomepage from '../General/UrlHomepage';

import { getCookie } from 'cookies-next';

/* MAIN FUNCTION */
export default function AppBarMenu(props) {
  const { setOpenMenu, openMenu } = props;
  const closeMenu = () => setOpenMenu(false);
  const firstItem = {
    url: UrlHomepage('/add-project'),
    text: 'Add New Project',
  };

  const secondItem = {
    url: UrlHomepage('/my-details'),
    text: 'Manege Your Details',
  };

  const cookieExists = getCookie('token');

  const LeftMenuList = () => (
    <List>
      <>
        <ListItemIconButton
          url={firstItem.url}
          text={firstItem.text}
          ListIcon={InboxIcon}
          onClick={closeMenu}
        />
        <Divider variant="middle" />
        <ListItemIconButton
          url={secondItem.url}
          text={secondItem.text}
          ListIcon={InboxIcon}
          onClick={closeMenu}
        />
        <Divider />
      </>
    </List>
  );

  return (
    <>
      {cookieExists ? (
        <>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpenMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor={'left'} open={openMenu} onClose={closeMenu}>
            <LeftMenuList />
          </Drawer>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
