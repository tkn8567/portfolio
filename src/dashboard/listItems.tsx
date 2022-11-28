import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox';
import PostAddIcon from '@mui/icons-material/PostAdd';
import TagIcon from '@mui/icons-material/Tag';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import DeleteIcon from '@mui/icons-material/Delete';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PostAddIcon />
      </ListItemIcon>
      <ListItemText primary="Create article" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TagIcon />
      </ListItemIcon>
      <ListItemText primary="Hashtags" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PhotoLibraryIcon />
      </ListItemIcon>
      <ListItemText primary="Photos" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <ListItemText primary="Trash" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved paper
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <MarkunreadMailboxIcon />
      </ListItemIcon>
      <ListItemText primary="title1" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MarkunreadMailboxIcon />
      </ListItemIcon>
      <ListItemText primary="title2" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MarkunreadMailboxIcon />
      </ListItemIcon>
      <ListItemText primary="title3" />
    </ListItemButton>
  </React.Fragment>
);