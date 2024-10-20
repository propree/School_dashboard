"use client"; // Add this line at the top to enable client-side rendering

import React from 'react';
import { styled } from '@mui/system'; // Use the styled API
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';

import IconExpandLess from '@mui/icons-material/ExpandLess';
import IconExpandMore from '@mui/icons-material/ExpandMore';
import IconDashboard from '@mui/icons-material/Dashboard';
import IconShoppingCart from '@mui/icons-material/ShoppingCart';
import IconPeople from '@mui/icons-material/People';
import IconBarChart from '@mui/icons-material/BarChart';
import IconLibraryBooks from '@mui/icons-material/LibraryBooks';

// Styled components using MUI's styled API
const AppMenuList = styled(List)( {
  width: '100%',
});

const MenuItem = styled(ListItem)( {
  width: '240px', // Set your drawer width here
});

const MenuItemIcon = styled(ListItemIcon)( {
  color: '#97c05c',
});

const sidebar: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (

    <AppMenuList component="nav" disablePadding>
       <MenuItem button>
        <MenuItemIcon className='flex justify-center items-center lg:justify-start gap2 '>
          <img className='h-11 w-11 space-x-2' src= '/logo.png' alt="logo"></img>
          </MenuItemIcon>
        <ListItemText  primary=" NSC school" />
      </MenuItem>

      <MenuItem button>
        <MenuItemIcon>
          <IconDashboard />
        </MenuItemIcon>
        <ListItemText primary="Dashboard" />
      </MenuItem>

      <MenuItem button>
        <MenuItemIcon>
          <IconShoppingCart />
        </MenuItemIcon>
        <ListItemText primary="Orders" />
      </MenuItem>

      <MenuItem button>
        <MenuItemIcon>
          <IconPeople />
        </MenuItemIcon>
        <ListItemText primary="Customers" />
      </MenuItem>

      <MenuItem button>
        <MenuItemIcon>
          <IconBarChart />
        </MenuItemIcon>
        <ListItemText primary="Reports" />
      </MenuItem>

      <MenuItem button onClick={handleClick}>
        <MenuItemIcon>
          <IconLibraryBooks />
        </MenuItemIcon>
        <ListItemText primary="Nested Pages" />
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </MenuItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <MenuItem button>
            <ListItemText inset primary="Nested Page 1" />
          </MenuItem>
          <MenuItem button>
            <ListItemText inset primary="Nested Page 2" />
          </MenuItem>
        </List>
      </Collapse>
    </AppMenuList>
  );
};

export default sidebar;
