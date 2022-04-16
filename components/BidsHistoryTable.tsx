import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type BidsHistoryTableProps = {};

function createData(price: string, time: string, from: string) {
  return { price, time, from };
}

const rows = [
  createData("0.15 ETH", "3 days ago", "0x4EFesagas12...0x4E"),
  createData("0.15 ETH", "3 days ago", "0x4EFesagas12...0x4E"),
  createData("0.15 ETH", "3 days ago", "0x4EFesagas12...0x4E"),
];

function BidsHistoryTable({}: BidsHistoryTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>From</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.from}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BidsHistoryTable;
