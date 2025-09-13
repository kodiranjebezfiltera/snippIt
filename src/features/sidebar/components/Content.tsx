'use client';

import Toolbar from '@mui/material/Toolbar';
import Command from '../../commands/components/Commands';
import { Box } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { sidebarWidth } from './SideBar';

const Content = () => {
  const searchParams = useSearchParams();
  const panelKey = searchParams.get('panel');

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        width: { sm: `calc(100% - ${sidebarWidth}px)` },
      }}
    >
      <Toolbar />

      {panelKey === 'commands' ? <Command /> : null}
    </Box>
  );
};

export default Content;
