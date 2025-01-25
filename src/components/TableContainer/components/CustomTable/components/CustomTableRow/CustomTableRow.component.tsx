import React from 'react';
import { TableCell, TableRow, Typography } from '@mui/material';
import { ValidatorRowProps } from './CustomTableRow.types.ts';
import { cellSx } from './CustomTableRow.styles.ts';

export const CustomTableRow: React.FC<ValidatorRowProps> = ({
  validator,
  index,
  ethPrice,
}) => {
  return (
    <TableRow>
      <TableCell sx={cellSx}>{index + 1}</TableCell>
      <TableCell sx={cellSx}>{validator.name}</TableCell>
      <TableCell sx={cellSx}>
        <Typography
          fontFamily="DM Mono"
          fontSize={14}
        >{`${validator.staked} ETH`}</Typography>
        <Typography fontFamily="DM Mono" color="#575757" fontSize={10}>
          ${ethPrice}
        </Typography>
      </TableCell>
      <TableCell sx={{ color: '#00FF47' }}>
        {(validator.apr * 100).toFixed(2)}%
      </TableCell>
      <TableCell sx={cellSx}>{validator.executed_rewards} ETH</TableCell>
      <TableCell sx={cellSx}>{validator.consensus_rewards} ETH</TableCell>
      <TableCell sx={cellSx}>{validator.produced_blocks}%</TableCell>
    </TableRow>
  );
};
