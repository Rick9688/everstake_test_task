import React from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';
import { RowProps } from './CustomTableRow.types.ts';
import { cellSx } from './CustomTableRow.styles.ts';

export const CustomTableRow: React.FC<RowProps> = ({
  row,
  index,
  ethPrice,
}) => {
  return (
    <TableRow>
      <TableCell sx={cellSx}>{index + 1}</TableCell>
      <TableCell sx={cellSx}>{row.name}</TableCell>
      <TableCell sx={cellSx}>
        <Typography
          fontFamily="DM Mono"
          fontSize={14}
        >{`${row.staked} ETH`}</Typography>
        <Typography fontFamily="DM Mono" color="#575757" fontSize={10}>
          ${ethPrice}
        </Typography>
      </TableCell>
      <TableCell sx={{ color: '#00FF47' }}>
        {(row.apr * 100).toFixed(2)}%
      </TableCell>
      <TableCell sx={cellSx}>{row.executed_rewards} ETH</TableCell>
      <TableCell sx={cellSx}>{row.consensus_rewards} ETH</TableCell>
      <TableCell sx={cellSx}>{row.produced_blocks}%</TableCell>
    </TableRow>
  );
};
