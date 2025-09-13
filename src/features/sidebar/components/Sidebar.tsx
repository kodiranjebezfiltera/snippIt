'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Image from 'next/image';
import SnippitLogo from '@/assets/snippit-logo.png';
import SidebarNavigation from './SidebarNavigation';
import { Fragment } from 'react';

export const sidebarWidth = 240;

export const sidebar = (
  <Fragment>
    <Box sx={{ textAlign: 'center' }}>
      <Image src={SnippitLogo} alt="Snippit logo" width={64} height={64} />
    </Box>

    <SidebarNavigation />
    <Divider />
  </Fragment>
);
