import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid} from "@mui/x-data-grid";
import { tokens } from "../theme";
import { MockDataInvoices } from "../data/mockData";
import Header from "./Header";
import { render } from "@fullcalendar/core/preact.js";

export default function Invoices() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID"},

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
        field: "cost",
        headerName: "Cost",
        flex: 1,
        renderCell: (params) => (
          <Typography color={colors.greenAccent[500]}>
            $ {params.row.cost}
          </Typography>
        )
      },      
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },


  ];
  return (
    <Box m="20px">
      {/* إضافة تباعد لتنسيق أفضل */}
      <Header title="Invoices" subtitle="List of Invoices" /> 
      <Box
        m="10px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "2px solid",
            borderRight: "2px solid !important",
            fontSize: "17px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root":{
            color: colors.grey[200]
          }
        }}
      >
        <DataGrid
          rows={MockDataInvoices}
          columns={columns}
          checkboxSelection
          rowsPerPageOptions={[10, 20, 30, 40, 50]}
        />
      </Box>
    </Box>
  );
}
