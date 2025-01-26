import React from 'react';
import { Button } from '@mui/material';
import { btnSx } from './CustomButton.style.ts';
import { CustomButtonProps } from './CustomButton.type.ts';

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  handleClick,
}) => {
  return (
    <Button onClick={handleClick} variant="contained" sx={btnSx}>
      {label}
    </Button>
  );
};
