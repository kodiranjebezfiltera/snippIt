import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { sideBarLinks } from '../data/sidebar.data';
import { useRouter } from 'next/navigation';

const SidebarNavigation = () => {
  const router = useRouter();

  return (
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
  );
};

export default SidebarNavigation;
