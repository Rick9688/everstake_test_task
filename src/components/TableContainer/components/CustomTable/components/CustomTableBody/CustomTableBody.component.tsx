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
      {tableData.map((curency, index) => (
        <CustomTableRow
          key={index}
          row={curency}
          index={index}
          ethPrice={ethPrice}
        />
      ))}
    </TableBody>
  );
};
