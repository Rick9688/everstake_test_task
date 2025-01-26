import React from 'react';
import { TableCell, TableHead, TableRow } from '@mui/material';
import { cellSx } from './CustomTableHead.style';
import { tableHeaders } from './CustomTableHead.utils';

export const CustomTableHead: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        {tableHeaders.map((label, index) => (
          <TableCell key={index} sx={cellSx}>
            {label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
