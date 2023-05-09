import * as React from 'react';
import { useTheme, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { tokens } from '../../theme';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
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

  const items = [
    {
      title: "Data",
      lists: [
        {
          title: "Manage Team",
          icon: <PeopleOutlinedIcon />,
          link: "/team",
        },
        {
          title: "Contacts Information",
          icon: <ContactsOutlinedIcon />,
          link: "/contacts",
        },
        {
          title: "Invoices Balances",
          icon: <ReceiptOutlinedIcon />,
          link: "/invoices",
        }
      ]
    },
    {
      title: "Pages",
      lists: [
        {
          title: "Profile Form",
          icon: <PersonOutlineOutlinedIcon />,
          link: "/team",
        },
        {
          title: "Calendar",
          icon: <CalendarTodayOutlinedIcon />,
          link: "/calendar",
        },
        {
          title: "FAQ Page",
          icon: <HelpOutlineOutlinedIcon />,
          link: "/faq",
        }
      ]
    },
    {
      title: "Charts",
      lists: [
        {
          title: "Bar Chart",
          icon: <BarChartOutlinedIcon />,
          link: "/bar",
        },
        {
          title: "Pie Chart",
          icon: <PieChartOutlineOutlinedIcon />,
          link: "/pie",
        },
        {
          title: "Line Chart",
          icon: <TimelineOutlinedIcon />,
          link: "/line",
        },
        {
          title: "Geography Chart",
          icon: <MapOutlinedIcon />,
          link: "/geography",
        }
      ]
    }
  ]


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
          <Typography sx={{ ml: "25px", color: `${colors.grey[100]}` }}>
            ADMINS
          </Typography>
          <IconButton sx={{ mr: "25px", color: `${colors.grey[100]}` }}>
            <MenuOutlinedIcon />
          </IconButton>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" marginTop="15px">
          <img
            src="https://github.com/ed-roh/react-admin-dashboard/blob/master/public/assets/user.png?raw=true"
            width="90px"
            height="90px"
            style={{ borderRadius: "50%" }}
          />
          <Typography sx={{ color: `${colors.grey[100]}`, mb: "0px", mt: "3px", }}>
            <h2 style={{ margin: "0px" }}>addis</h2>
          </Typography>
          <Typography sx={{ color: `${colors.greenAccent[500]}` }}>
            <h3 style={{ margin: "0px", lineHeight: "0.6" }}>eangle</h3>
          </Typography>

        </Box>
        <Box display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="40px">
          <HomeOutlinedIcon sx={{ cursor: "pointer" }} />
          <Link to="/" style={{ textDecoration: "none" }} >
            <Typography sx={{ color: `${colors.grey[100]}` }}>
              <h5 style={{ margin: "0px" }}>Dashboard</h5>
            </Typography>
          </Link>
        </Box>

        <Box mb="20px">
        {items.map((item, index) =>
          <>
            <Typography key={index} sx={{ ml: "24px", mt: "30px", color: `${colors.grey[300]}` }}>
              <p style={{ margin: "0px", fontSize: "12px" }}>{item.title}</p>
            </Typography>
            {item.lists.map(list =>
              <Box key={index} display="flex" gap="20px" alignItems="center" marginLeft="35px" marginRight="35px" marginTop="17px">
                {list.icon}
                <Link to={list.link} style={{ textDecoration: "none" }} >
                  <Typography sx={{ color: `${colors.grey[100]}` }}>
                    <h5 style={{ margin: "0px" }}>{list.title}</h5>
                  </Typography>
                </Link>
              </Box>)}
          </>
        )}
        </Box>

      </Drawer>
    </Box >
  );
}