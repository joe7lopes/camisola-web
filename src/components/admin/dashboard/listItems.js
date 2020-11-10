import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListIcon from '@material-ui/icons/List';

import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';

import {
  ExpandLess,
  ExpandMore,
  Settings,
  Image,
  SportsSoccer,
  AddCircle,
} from '@material-ui/icons';

import { content } from './dashboard';

export const MainListItems = ({ onCLick }) => {
  const [open, setOpen] = React.useState(true);

  const handleProductClick = () => {
    setOpen(!open);
  };

  return (
    <div>
        <ListItem button onClick={() => onCLick(content.DASHBOARD)}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={() => onCLick(content.ORDERS) }>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>

        <ListItem button onClick={handleProductClick}>
            <ListItemIcon>
                <SportsSoccer />
            </ListItemIcon>
            <ListItemText primary="Produtos" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem button style={{ paddingLeft: '2rem' }} onClick={() => onCLick(content.PRODUCTS)}>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Lista" />
                </ListItem>
            </List>
            <List component="div" disablePadding>
                <ListItem button style={{ paddingLeft: '2rem' }} onClick={() => onCLick(content.NEW_PRODUCT)}>
                    <ListItemIcon>
                        <AddCircle />
                    </ListItemIcon>
                    <ListItemText primary="Novo Produto" />
                </ListItem>
            </List>
        </Collapse>

        <ListItem button onClick={() => onCLick(content.IMAGES) }>
            <ListItemIcon>
                <Image />
            </ListItemIcon>
            <ListItemText primary="Images" />
        </ListItem>

        <div>por implementar</div>
        <ListItem button onClick={() => onCLick(content.SETTINGS) }>
            <ListItemIcon>
                <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItem>
    </div>
  );
};

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);
