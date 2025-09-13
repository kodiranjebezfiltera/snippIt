'use client';

import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';

import ContentHeader from './ContentHeader';
import { Box } from '@mui/material';
import { sidebarWidth, sidebar } from './SideBar';
import Content from './Content';
import { Suspense } from 'react';

const AppLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Suspense fallback={<div>Loading header...</div>}>
        <ContentHeader />
      </Suspense>
      <Box
        component="nav"
        sx={{ width: { sm: sidebarWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: sidebarWidth,
            },
          }}
          open
        >
          {sidebar}
        </Drawer>
      </Box>
      <Suspense fallback={<div>Loading content...</div>}>
        <Content />
      </Suspense>
    </Box>
  );
};

export default AppLayout;
