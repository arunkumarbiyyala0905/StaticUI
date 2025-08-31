import { Box, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from '../assets/Gilead_Sciences-Logo.png'; // Download and place the logo SVG here
import bookIcon from '../assets/bookicon.png'; // Download and place a book icon here
import chatHistoryIcon from '../assets/chatHistoryIcon.png'; // Download and place a chat history icon here
import chevronRightIcon from '../assets/chevronRightIcon.png'; // Download and place a chevron right icon here
import workSpaceIcon from '../assets/workSpaceIcon.png'; // Download and place a workspace icon here
//import newIcon from '../assets/newIcon.png'; // Download and place a new chat icon here
import newIcon from '../assets/newIcon.png';

export default function Sidebar() {
  return (
      <Box sx={{
          width: '17.5%',
          background: '#fff',
          borderRight: '1px solid #D2D2D2',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
      }}>

          <Box sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              width: '17.5vw', height: '8.16vh', borderBottom: '1px solid #D2D2D2',
          }}>
              <img src={Logo} alt="Gilead" style={{ height: 24, width: 96, paddingLeft: 24 }} />
              <img src={bookIcon} alt="book" style={{ height: 24, width: 48, paddingRight: 24 }} />
          </Box>

          <List sx={{ width: '17.5vw', height: '81.65vh', borderBottom: '1px solid #D2D2D2' }}>
              <ListItem button>

                  <Box sx={{ display: 'flex', alignItems: 'center', width: 288, background: '#C8102E', color: '#fff' }}>
                      <ListItemIcon sx={{ minWidth: 32, mr: 0 }}>
                          <img src={newIcon} alt="Chat History" style={{ width: 24, height: 24 }} />
                      </ListItemIcon>
                      <ListItemText primary="New Chat"
                          sx={{
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              minWidth: 0,
                              flexShrink: 1,
                              fontSize: { xs: '0.95rem', sm: '1rem' }
                          }} />
                  </Box>
              </ListItem>
              <ListItem button sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <ListItemIcon sx={{ minWidth: 32, mr: 0 }}>
                          <img src={chatHistoryIcon} alt="Chat History" style={{ width: 24, height: 24 }} />
                      </ListItemIcon>
                      <ListItemText primary="Chat History"
                          sx={{
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              minWidth: 0,
                              flexShrink: 1,
                              fontSize: { xs: '0.95rem', sm: '1rem' }
                          }} />
                  </Box>
                  <img src={chevronRightIcon} alt="" style={{ width: 20, height: 20, marginLeft: 8 }} />
              </ListItem>
              <ListItem button sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <ListItemIcon sx={{ minWidth: 32, mr: 0 }}>
                          <img src={workSpaceIcon} alt="My Workspace" style={{ width: 24, height: 24 }} />
                      </ListItemIcon>
                      <ListItemText primary="My Workspace"
                          sx={{
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              minWidth: 0,
                              flexShrink: 1,
                              fontSize: { xs: '0.95rem', sm: '1rem' }
                          }} />
                  </Box>
                  <img src={chevronRightIcon} alt="" style={{ width: 20, height: 20, marginLeft: 8 }} />
              </ListItem>
          </List>

          <Box sx={{ height: '10.20vh', display: 'flex', alignItems: 'center' }}>
              <Button
                  startIcon={<LogoutIcon />}
                  sx={{ color: '#54565B', textTransform: 'none', width: '100%', justifyContent: 'flex-start', left: 24 }}
              >
                  Log Out
              </Button>
          </Box>
      </Box>
  );
}
