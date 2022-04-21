import React, { useEffect, useState } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BidInfo } from '@sections/types';
import { truncateAddress } from '@sections/utils';

type BidsHistoryTableProps = {
  bids: BidInfo[];
};

function calculateTimeFrom(date: Date) {
  let difference = +new Date() - +date;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (days > 0) return days === 1 ? '1 day ago' : `${days} days ago`;

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  if (hours > 0) return hours === 1 ? '1 hour ago' : `${hours} hours ago`;

  const minutes = Math.floor((difference / 1000 / 60) % 60);

  if (minutes > 0) return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;

  return 'few moments ago';
}

function createData(bidInfo: BidInfo) {
  return {
    price: bidInfo.eth,
    time: calculateTimeFrom(bidInfo.date),
    from: truncateAddress(bidInfo.bidder, 13),
  };
}

function BidsHistoryTable({ bids }: BidsHistoryTableProps) {
  const [rows, setRows] = useState(bids.map(createData));

  useEffect(() => {
    const interval = setInterval(() => {
      setRows(bids.map(createData));
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, [bids]);

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
              <TableCell>{row.price} ETH</TableCell>
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
