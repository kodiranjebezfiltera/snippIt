'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { useRouter, useSearchParams } from 'next/navigation';
import Command from '../../commands/components/Commands';
const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

const Sidebar = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const panelKey = searchParams.get('panel');

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const sideBarLinks = [
    {
      text: 'Commands',
      path: 'commands',
    },
    {
      text: 'Favorites',
      path: 'favorites',
    },
    {
      text: 'Recently',
      path: 'recently',
    },
    {
      text: 'Programmer rules',
      path: 'programmer-rules',
    },
    {
      text: 'Usefull libraries',
      path: 'usefull-libraries',
    },
  ];

  const drawer = (
    <div>
      {/* HERE IS GOIND LOGO, etc... */}
      <div className="logo-container">
        <div>
          <span className="brackets">〈</span>
          <span className="snippit-text">SNIPPIT</span>
          <span className="brackets">〉</span>
        </div>
      </div>
      <Divider />
      <List>
        {sideBarLinks.map((sideBarLink, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(`?panel=${sideBarLink.path}`);
              }}
            >
              <ListItemIcon style={{ minWidth: '40px' }}>
                {index === 0 ? (
                  <TerminalOutlinedIcon />
                ) : index === 1 ? (
                  <GradeOutlinedIcon />
                ) : index === 2 ? (
                  <AccessTimeOutlinedIcon />
                ) : index === 3 ? (
                  <GavelOutlinedIcon />
                ) : index === 4 ? (
                  <CodeOutlinedIcon />
                ) : null}
              </ListItemIcon>
              <ListItemText primary={sideBarLink.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      {/* HEADER OF CONTENT */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* Content going here */}

        {panelKey === 'commands' ? <Command /> : null}
      </Box>
    </Box>
  );
};

export default Sidebar;
