import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';

const columns = [
  { 
    field: '_id', 
    headerName: 'ID', 
    width: 90 
  },
  {
    field: 'AGE',
    headerName: 'Age',
    width: 150,
    editable: false,
  },
  {
    field: 'PATIENT_ID',
    headerName: 'Patient ID',
    width: 150,
    editable: false,
  },
  {
    field: 'ZIP',
    headerName: 'Zip',
    type: 'number',
    width: 110,
    editable: false,
  },
];

// const rows = [

//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },

// ];

export default function PatientDataGrid(record) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={record}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}