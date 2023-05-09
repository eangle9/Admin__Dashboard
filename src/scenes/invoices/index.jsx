import { Box, useTheme, Typography } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mockData';
import * as React from 'react';





export default function Contacts() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.5, },
        {
            field: 'name',
            headerName: 'Name',
            cellClassName: "name-column--cell",
            flex: 1,
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
            field: 'cost',
            headerName: 'Cost',
            flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    {params.row.cost}
                </Typography>
            )
        },
        {
            field: 'date',
            headerName: 'Date',
            flex: 1,
        },
    ];

    return (
        <Box m="10px 20px 10px 270px"  >
            <Header title="INVOICES" subtitle="List of Invoice Balances" />
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
                   '& .MuiCheckbox-root':{
                       color: `${colors.greenAccent[200]} !important`
                   }
                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    );
}

