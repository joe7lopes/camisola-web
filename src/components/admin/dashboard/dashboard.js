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
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MainListItems } from './listItems';
import Orders from '../orders/Orders';
import ProductList from '../product/ProductList';
import { ImagesManager, NewProduct, Settings } from '../index';
import DashBoardContent from './DashboardContent';
import { useStyles } from './styles';
import path from '../../../routes/path';
import HomePageLayout from '../settings/home_page_layout/HomePageLayout';
import { requestStatus } from '../../../store/selectors';
import { resetUIAdminDashBoard } from '../../../actions';
import Alert, {AlertType} from '../../ui/Alert';
import Discounts from "../discounts/Discounts";

export default function Dashboard() {
  const classes = useStyles();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const { loading, success, error } = useSelector(requestStatus);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const renderContent = () => {
    switch (pathname) {
      case path.ADMIN_ORDERS:
        return <Orders/>;
      case path.ADMIN_PRODUCTS:
        return <ProductList/>;
      case path.ADMIN_NEW_PRODUCT:
        return <NewProduct/>;
      case path.ADMIN_IMAGES:
        return <ImagesManager/>;
      case path.ADMIN_SETTINGS:
        return <Settings/>;
      case path.ADMIN_SETTINGS_HOME_PAGE_LAYOUT:
        return <HomePageLayout/>;
      case path.ADMIN_DISCOUNTS:
        return <Discounts/>;
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
                open={open}>
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                   <MainListItems />
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Backdrop open={loading} style={{ zIndex: 100, color: '#fff' }}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    <Snackbar
                        open={!!success || !!error} autoHideDuration={6000}
                        onClose={() => dispatch(resetUIAdminDashBoard())}>
                        <Alert type={success ? AlertType.SUCCESS : AlertType.ERROR}>
                            {success ? 'Alteracoes guardadas' : `Error ao guardar alteracoes ${error}`}
                        </Alert>
                    </Snackbar>
                    {renderContent()}
                </Container>
            </main>
        </div>
  );
}
