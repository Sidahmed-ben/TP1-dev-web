import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("propiete", 4.0),
  createData("propiete", 4.3),
  createData("propiete", 11),
  createData("propiete", 0.5),
  createData("propiete", 9),
];

export default function MyTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ margin: 0 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0, margin: 0 },
              }}
            >
              <TableCell
                align="left"
                sx={{ fontSize: 20 }}
                component="th"
                scope="row"
              >
                {row.name}
              </TableCell>
              <TableCell align="center" sx={{ fontSize: 20 }}>
                {row.calories}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
