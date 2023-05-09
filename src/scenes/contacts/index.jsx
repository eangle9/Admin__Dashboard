import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockData';
import * as React from 'react';





export default function Contacts() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: 'id', headerName: 'ID', flex:0.5, },
        {
            field: 'registrarId',
            headerName: 'RegistrarId',
        },
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
            field: 'address',
            headerName: 'Address',
            flex: 1,
        },
        {
            field: 'city',
            headerName: 'City',
            flex: 1,
          },
          {
            field: 'zipCode',
            headerName: 'ZipCode',
            flex: 1,
          },
    ];

    return (
        <Box m="10px 20px 10px 270px"  >
            <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />
            <Box
                height="75vh"
                m="40px 0 0 0"
                sx={{
                    '& .MuiDataGrid-root': {
                        border: "none"
                    },
                    '& .name-column--cell': {
                        color: colors.greenAccent[300],
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    '& .MuiDataGrid-footerContainer': {
                        backgroundColor: colors.blueAccent[700],
                        borderTop: "none",
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        backgroundColor: colors.primary[400],
                    },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text':{
                        color:`${colors.grey[100]} !important`,
                    }
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    );
}

