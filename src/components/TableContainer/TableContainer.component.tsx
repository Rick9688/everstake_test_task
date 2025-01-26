import React from 'react';
import { Box, Typography } from '@mui/material';
import { CustomTable } from './components/CustomTable/CustomTable.component.tsx';
import { containerSx, titleSx } from './TableContainer.style.ts';

export const TableContainer: React.FC = () => {
  return (
    <Box sx={containerSx}>
      <Typography sx={titleSx}>
        Stay on top of crypto. Task for front end.
      </Typography>
      <CustomTable />
    </Box>
  );
};
