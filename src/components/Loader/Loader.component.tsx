import React from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Loader: React.FC = () => {
  return (
    <Box
      width="100vw"
      height="400px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress sx={{ color: '#FFFFFF' }} />
    </Box>
  );
};
