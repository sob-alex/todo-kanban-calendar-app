import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import ROUTES from '../constants/routes';
export default function TheHeader() {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button
            color='inherit'
            component={RouterLink}
            to={ROUTES.HOME}
          >
            Home
          </Button>
          <Button
            color='inherit'
            component={RouterLink}
            to={ROUTES.TODO_LIST}
          >
            Todo List
          </Button>
          <Button
            color='inherit'
            component={RouterLink}
            to={ROUTES.BOARD}
          >
            Kanban Board
          </Button>
          <Button
            color='inherit'
            component={RouterLink}
            to={ROUTES.CALENDAR}
          >
            Calendar
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
