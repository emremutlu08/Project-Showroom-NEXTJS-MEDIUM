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
import { useSession } from 'next-auth/react';

/* MAIN FUNCTION */
export default function AppBarMenu(props) {
  const { data, status } = useSession();

  const { setOpenMenu, openMenu } = props;
  const closeMenu = () => setOpenMenu(false);
  const firstItem = {
    url: UrlHomepage('/add-project'),
    text: 'Add New Project',
  };

  const secondItem = {
    url: UrlHomepage('/my-details'),
    text: 'Manege Your Details',
  }; // TODO: BURASI HAZIRLANACAK VE PROFİL OLUŞTURULACAK

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

  if (status !== 'authenticated') return null;
  console.log(data?.user?.email, 'data');

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
