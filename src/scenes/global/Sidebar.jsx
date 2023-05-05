import * as React from 'react';
import { useTheme, MenuItem, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';



const drawerWidth = 250;

export default function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ boxShadow: "none", backgroundImage: "none important!", width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        PaperProps={{
          sx: {
            backgroundColor: `${colors.primary[400]}`,
            border: "none",
          }
        }}

        drawerContentOptions={{
          activeTintColor: '#cccccc',
          itemStyle: {
            marginHorizontal: 0,
            marginBottom: 0,
            paddingBottom: 0,
            borderRadius: 0
          }
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/*  <Toolbar /> */}
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="20px">
          <Typography sx={{ ml: "25px" }}>
            ADMINS
          </Typography>
          <IconButton sx={{ mr: "25px" }}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop="15px">
          <img
            src="https://github.com/ed-roh/react-admin-dashboard/blob/master/public/assets/user.png?raw=true"
            width="100px"
            height="100px"
            sx={{ borderRadius: "50%" }}
          />
          <Typography sx={{ color: `${colors.grey[100]}`, mb: "0px", mt: "3px", }}>
            <h1 style={{ margin: "0px" }}>addis</h1>
          </Typography>
          <Typography sx={{ color: `${colors.greenAccent[500]}` }}>
            <h3 style={{ margin: "0px", lineHeight: "0.6" }}>eangle</h3>
          </Typography>
        </Box>
        <Box display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="40px">
          <HomeOutlinedIcon sx={{ cursor: "pointer" }} />
          <Link to="/dashboard" style={{ textDecoration: "none" }} >
            <Typography sx={{ color: `${colors.grey[100]}` }}>
              <h5 style={{ margin: "0px" }}>Dashboard</h5>
            </Typography>
          </Link>
        </Box>
        <Typography sx={{ ml: "24px", mt: "30px", color: `${colors.grey[300]}` }}>
          <p style={{ margin: "0px", fontSize:"12px" }}>Data</p>
        </Typography>

        <Box display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="17px">
          <PeopleOutlinedIcon sx={{ cursor: "pointer" }} />
          <Link to="/team" style={{ textDecoration: "none" }} >
            <Typography sx={{ color: `${colors.grey[100]}` }}>
              <h5 style={{ margin: "0px" }}>Manage Team</h5>
            </Typography>
          </Link>
        </Box> 
        <Box display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="17px">
          <ContactsOutlinedIcon sx={{ cursor: "pointer" }} />
          <Link to="/contacts" style={{ textDecoration: "none" }} >
            <Typography sx={{ color: `${colors.grey[100]}` }}>
              <h5 style={{ margin: "0px" }}>Contacts Information</h5>
            </Typography>
          </Link>
        </Box>
        <Box display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="17px">
          <ReceiptOutlinedIcon sx={{ cursor: "pointer" }} />
          <Link to="/receipt" style={{ textDecoration: "none" }} >
            <Typography sx={{ color: `${colors.grey[100]}` }}>
              <h5 style={{ margin: "0px" }}>Invoices Balances</h5>
            </Typography>
          </Link>
        </Box>

        <Typography sx={{ ml: "24px", mt: "30px", color: `${colors.grey[300]}` }}>
          <p style={{ margin: "0px", fontSize:"12px" }}>Pages</p>
        </Typography>
        
        <Box display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="17px">
          <PersonOutlineOutlinedIcon sx={{ cursor: "pointer" }} />
          <Link to="/profile" style={{ textDecoration: "none" }} >
            <Typography sx={{ color: `${colors.grey[100]}` }}>
              <h5 style={{ margin: "0px" }}>Profile Form</h5>
            </Typography>
          </Link>
        </Box>
        <Box display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="17px">
          <CalendarTodayOutlinedIcon sx={{ cursor: "pointer" }} />
          <Link to="/calendar" style={{ textDecoration: "none" }} >
            <Typography sx={{ color: `${colors.grey[100]}` }}>
              <h5 style={{ margin: "0px" }}>Calendar</h5>
            </Typography>
          </Link>
        </Box>
        <Box display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="17px">
          <HelpOutlineOutlinedIcon sx={{ cursor: "pointer" }} />
          <Link to="/faq" style={{ textDecoration: "none" }} >
            <Typography sx={{ color: `${colors.grey[100]}` }}>
              <h5 style={{ margin: "0px" }}>FAQ Page</h5>
            </Typography>
          </Link>
        </Box>

        <Typography sx={{ ml: "24px", mt: "30px", color: `${colors.grey[300]}` }}>
          <p style={{ margin: "0px", fontSize:"12px" }}>Charts</p>
        </Typography>

        <Box display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="17px">
          <BarChartOutlinedIcon sx={{ cursor: "pointer" }} />
          <Link to="/bar" style={{ textDecoration: "none" }} >
            <Typography sx={{ color: `${colors.grey[100]}` }}>
              <h5 style={{ margin: "0px" }}>Bar Chart</h5>
            </Typography>
          </Link>
        </Box>
        <Box display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="17px">
          <PieChartOutlineOutlinedIcon sx={{ cursor: "pointer" }} />
          <Link to="/pie" style={{ textDecoration: "none" }} >
            <Typography sx={{ color: `${colors.grey[100]}` }}>
              <h5 style={{ margin: "0px" }}>Pie Chart</h5>
            </Typography>
          </Link>
        </Box>
        <Box display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="17px">
          <TimelineOutlinedIcon sx={{ cursor: "pointer" }} />
          <Link to="/line" style={{ textDecoration: "none" }} >
            <Typography sx={{ color: `${colors.grey[100]}` }}>
              <h5 style={{ margin: "0px" }}>Line Chart</h5>
            </Typography>
          </Link>
        </Box>
        <Box display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="17px" marginBottom="50px">
          <MapOutlinedIcon sx={{ cursor: "pointer" }} />
          <Link to="/geography" style={{ textDecoration: "none" }} >
            <Typography sx={{ color: `${colors.grey[100]}` }}>
              <h5 style={{ margin: "0px" }}>Geography Chart</h5>
            </Typography>
          </Link>
        </Box>
        {/* <List>
          <ListItem>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              <ListItemButton sx={{ paddingBotton: "0px" }}>
                <ListItemIcon>
                  <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" sx={{ color: "#fff", textDecoration: "none" }} />
              </ListItemButton>
            </Link>
          </ListItem>
        </List> */}
      </Drawer>
    </Box>
  );
}