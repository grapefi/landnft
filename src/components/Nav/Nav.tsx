import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

import ListItemLink from '../ListItemLink';
import mvLogo from '../../assets/img/MINIVERSELOGO.png';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from './AccountButton';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    color: '#e0e3bd',
    'background-color': 'rgba(44, 62, 80, 0.65)',
    borderBottom: '1px solid rgba(52, 152, 219, 0.65)',
    padding: '0',
    marginBottom: '3rem',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    fontFamily: 'monospace',
    fontSize: '30px',
    flexGrow: 1,
  },
  link: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: '18px',
    margin: theme.spacing(1, 2),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
      color: '#BBA14F',
    },
  },
  brandLink: {
    textDecoration: 'none',
    color: '#e0e3bd',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Nav = () => {
  const matches = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              {/* <a className={ classes.brandLink } href="/">2omb Finance</a> */}
                <img alt="MiniVerse" src={mvLogo} height="60px" style={{ marginTop: '20px' }} />
            </Typography>

            <Box mr={5}>
              <a rel="noopener noreferrer" href="https://app.mvfinance.club/" className={classes.link}>
                Home
              </a>
              <a rel="noopener noreferrer" href="https://app.mvfinance.club/farms" className={classes.link}>
              Farms
              </a>     
              <a rel="noopener noreferrer" href="/minichilla" className={classes.link}>
              Minichilla
              </a>
              <a rel="noopener noreferrer" href="/miniguinea" className={classes.link}>
              Miniguinea
              </a>
              <a rel="noopener noreferrer" href="/miniland" className={classes.link}>
              Miniland
              </a>      
              <a rel="noopener noreferrer" href="https://app.mvfinance.club/boardroom" className={classes.link}>
              Boardroom
              </a>
           {/*   <a rel="noopener noreferrer" href="https://app.mvfinance.club/bonds" className={classes.link}>
              Bonds
        </a>*/}
              <a target="_blank" href="https://app.mvfinance.club/strategies" className={classes.link}>
                Strategy
              </a>
              <a target="_blank" href="https://app.mvfinance.club/raffle" className={classes.link}>
                Raffle
              </a>   
              <a target="_blank" rel="noopener noreferrer" href="https://miniversefinance.gitbook.io/docs/" className={classes.link}>
                Docs
              </a>
            </Box>
            <AccountButton text="Connect" />
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              MiniVerse Finance
            </Typography>

            <Drawer
              className={classes.drawer}
              onEscapeKeyDown={handleDrawerClose}
              onBackdropClick={handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
          
                <ListItem button component="a" href="https://app.mvfinance.club/">
                  <ListItemText>HOME</ListItemText>
                </ListItem>

                <ListItem button component="a" href="https://app.mvfinance.club/farms">
                  <ListItemText>FARMS</ListItemText>
                </ListItem>
                <ListItem button component="a" href="https://mvfinance.club/minichilla">
                  <ListItemText>MINICHILLA</ListItemText>
                </ListItem>
                <ListItem button component="a" href="https://mvfinance.club/miniguinea">
                  <ListItemText>MINIGUINEA</ListItemText>
                </ListItem>      
                <ListItem button component="a" href="https://mvfinance.club/miniland">
                  <ListItemText>MINI LAND</ListItemText>
                </ListItem>

                <ListItem button component="a" href="https://app.mvfinance.club/boardroom">
                  <ListItemText>BOARDROOM</ListItemText>
                </ListItem>
               {/* <ListItem button component="a" href="https://app.mvfinance.club/bonds">
                  <ListItemText>BONDS</ListItemText>
            </ListItem>*/}
                <ListItem button component="a" href="https://app.mvfinance.club/raffle">
                  <ListItemText>Raffle</ListItemText>
                </ListItem>
                <ListItem button component="a" href="https://app.mvfinance.club/strategies">
                  <ListItemText>Strategy</ListItemText>
                </ListItem>
                <ListItem button component="a" href="https://miniversefinance.gitbook.io/docs/">
                  <ListItemText>DOCS</ListItemText>
                </ListItem>
                <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccountButton text="Connect" />
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
