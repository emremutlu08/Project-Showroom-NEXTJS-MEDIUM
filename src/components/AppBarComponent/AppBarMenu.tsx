/* MATERIAL UI */
// Components
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Divider } from '@material-ui/core';

/* COMPONENTS */
import ListItemIconButton from './../General/ListItemIconButton';
import UrlHomepage from './../General/UrlHomepage';

/* MAIN FUNCTION */
export default function AppBarMenu(props: {
  setOpenMenu: Function;
  openMenu: boolean;
}) {
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

  const LeftMenuList = () => (
    <List>
      <>
        <ListItemIconButton
          url={firstItem.url}
          text={firstItem.text}
          ListIcon={InboxIcon}
          closeMenu={closeMenu}
        />
        <Divider variant="middle" />
        <ListItemIconButton
          url={secondItem.url}
          text={secondItem.text}
          ListIcon={InboxIcon}
          closeMenu={closeMenu}
          disabled={true}
        />
        <Divider />
      </>
    </List>
  );

  return (
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
  );
}
