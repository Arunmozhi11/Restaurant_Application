import React from 'react';
import MaterialTable from "material-table";
import {ThemeProvider, createTheme} from "@mui/material";

const DataTable = ({colums, data, title, actions}) => {

  const defaultMaterialTheme = createTheme()

  return (
    <ThemeProvider theme={defaultMaterialTheme}>
    <MaterialTable 
    columns={colums}
    data={data}
    tittle={title}
    actions={actions}
     />

    </ThemeProvider>
  )
}

export default DataTable;