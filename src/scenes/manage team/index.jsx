import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData';
import * as React from 'react';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';




export default function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: 'id', headerName: 'ID', },
    {
      field: 'name',
      headerName: 'Name',
      cellClassName: "name-column--cell",
      flex: 1,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      headerAlign: "left",
      align: "left",
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0px auto"
            padding="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === 'admin'
                ? colors.greenAccent[600]
                : access === 'manager'
                  ? colors.greenAccent[700]
                  : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        )

      }

    },
  ];

  return (
    <Box m="10px 20px 10px 270px"  >
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box  
      height="75vh"
       m="40px 0 0 0"
       sx={{
         '& .MuiDataGrid-root':{
           border: "none"
         },
         '& .name-column--cell':{
           color:colors.greenAccent[300],
         },
         '& .MuiDataGrid-columnHeaders':{
           backgroundColor:colors.blueAccent[700],
           borderBottom:"none",
         },
         '& .MuiDataGrid-footerContainer':{
           backgroundColor:colors.blueAccent[700],
           borderTop :"none",
         },
           '& .MuiDataGrid-virtualScroller':{
             backgroundColor:colors.primary[400],
           }
       }}
        >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
        />
      </Box>
    </Box>
  );
}

