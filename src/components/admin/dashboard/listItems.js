import React from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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

import path from '../../../routes/path';

export const MainListItems = () => {
  const [open, setOpen] = React.useState(true);
  const history = useHistory();
  const handleProductClick = () => {
    setOpen(!open);
  };

  return (
    <div>
        <ListItem button onClick={() => history.push(path.ADMIN_DASHBOARD)}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button onClick={() => history.push(path.ADMIN_ORDERS) }>
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
                <ListItem button style={{ paddingLeft: '2rem' }} onClick={() => history.push(path.ADMIN_PRODUCTS)}>
                    <ListItemIcon>
                        <ListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Lista" />
                </ListItem>
            </List>
            <List component="div" disablePadding>
                <ListItem button style={{ paddingLeft: '2rem' }} onClick={() => history.push(path.ADMIN_NEW_PRODUCT)}>
                    <ListItemIcon>
                        <AddCircle />
                    </ListItemIcon>
                    <ListItemText primary="Novo Produto" />
                </ListItem>
            </List>
        </Collapse>

        <ListItem button onClick={() => history.push(path.ADMIN_IMAGES) }>
            <ListItemIcon>
                <Image />
            </ListItemIcon>
            <ListItemText primary="Images" />
        </ListItem>
        <ListItem button onClick={() => history.push(path.ADMIN_SETTINGS) }>
            <ListItemIcon>
                <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItem>
    </div>
  );
};

// export const secondaryListItems = (
//     <div>
//         <ListSubheader inset>Saved reports</ListSubheader>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Current month" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Last quarter" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Year-end sale" />
//         </ListItem>
//     </div>
// );
