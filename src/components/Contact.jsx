import { Box} from "@mui/material";
import { DataGrid , GridToolbar} from "@mui/x-data-grid";
import { tokens } from "../theme";
import { MockDataContacts } from "../data/mockData";
import Header from "./Header";
import { useTheme } from "@mui/material/styles";

export default function Contact() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" , flex:0.5 },
    { field: "registerId", headerName: "RegisterId" },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
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
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZipCode",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },

  ];
  return (
    <Box m="20px">
      {/* إضافة تباعد لتنسيق أفضل */}
      <Header title="CONTACTS" subtitle="List of contacts for Future Reference " /> 
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
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color:`${colors.blueAccent[700]} !important`,
          }
        }}
      >
        <DataGrid
          rows={MockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          rowsPerPageOptions={[10, 20, 30, 40, 50]}
        />
      </Box>
    </Box>
  );
}
