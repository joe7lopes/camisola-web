import React, { useState } from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { MainListItems, secondaryListItems } from './listItems';
import Orders from '../orders/Orders';
import ProductList from '../product/ProductList';
import { ImagesManager, NewProduct, Settings } from '../index';
import DashBoardContent from './DashboardContent';
import { useStyles } from './styles';


export const content = {
  DASHBOARD: 'dashboard',
  ORDERS: 'orders',
  PRODUCTS: 'products',
  NEW_PRODUCT: 'new-product',
  IMAGES: 'images',
  SETTINGS: 'settings',
};

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [selectedContent, setSelectedContent] = useState(content.DASHBOARD);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOnClick = (clickedContent) => {
    setSelectedContent(clickedContent);
  };

  const renderContent = (inContent) => {
    switch (inContent) {
      case content.ORDERS:
        return <Orders/>;
      case content.PRODUCTS:
        return <ProductList/>;
      case content.NEW_PRODUCT:
        return <NewProduct/>;
      case content.IMAGES:
        return <ImagesManager/>;
      case content.SETTINGS:
        return <Settings/>;
      default:
        return <DashBoardContent/>;
    }
  };

  return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                  paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                   <MainListItems onCLick={handleOnClick}/>
                </List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    {renderContent(selectedContent)}
                </Container>
            </main>
        </div>
  );
}
