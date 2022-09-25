/* REACT */
import { useState } from 'react';
import Link from 'next/link';

/* MATERIAL UI */
// COMPONENTS
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

// ICONS
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { setCookie } from 'cookies-next';

const useStyles = makeStyles(() => ({
  listIcon: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    bottom: '5px',
  },
  icon: {
    marginBottom: '5px',
  },

  text: { marginLeft: '5px' },
  link: { textDecoration: 'none', cursor: 'pointer' },
}));

export default function CardGalleryHeader({ card }) {
  const firstLatter = card.creatorEmail[0].toUpperCase();
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = async () => {
    const response = await fetch(`/api/projects/${card._id}`, {
      method: 'DELETE',
    });
    return response;
  };

  const handleEdit = async () => {
    setCookie('cardIdToken', card._id);
  };

  return (
    <CardHeader
      avatar={<Avatar aria-label="recipe">{firstLatter}</Avatar>}
      action={
        <>
          <IconButton
            aria-label="settings"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <li>
                <Link href="/">
                  <a onClick={handleDelete} className={classes.link}>
                    <ListItemIcon className={classes.listIcon}>
                      <DeleteIcon fontSize="small" className={classes.icon} />
                      <ListItemText primary="Delete" className={classes.text} />
                    </ListItemIcon>
                  </a>
                </Link>
                <Link href="/edit-project">
                  <a onClick={handleEdit} className={classes.link}>
                    <ListItemIcon className={classes.listIcon}>
                      <EditIcon fontSize="small" className={classes.icon} />
                      <ListItemText primary="Edit" className={classes.text} />
                    </ListItemIcon>
                  </a>
                </Link>
              </li>
            </MenuItem>
          </Menu>
        </>
      }
      title={card.creatorName}
      subheader={
        <>
          <span>Posted at </span>
          <span>{new Date().getFullYear()}</span>
        </>
      }
    />
  );
}
