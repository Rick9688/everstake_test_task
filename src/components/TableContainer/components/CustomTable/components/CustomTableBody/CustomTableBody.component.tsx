import React from 'react';
import { TableBody } from '@mui/material';
import { CustomTableRow } from '../CustomTableRow/CustomTableRow.component';
import { CustomTableBodyProps } from './CustomTableBody.types';

export const CustomTableBody: React.FC<CustomTableBodyProps> = ({
  tableData,
  ethPrice,
}) => {
  return (
    <TableBody>
      {tableData.map((validator, index) => (
        <CustomTableRow
          key={index}
          validator={validator}
          index={index}
          ethPrice={ethPrice}
        />
      ))}
    </TableBody>
  );
};
