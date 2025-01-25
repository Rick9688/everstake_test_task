import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { btnContainerSx, btnSx, containerSx } from './FilterPanel.style.ts';
import { FilterPanelProps } from './FilterPanel.types.ts';
import { filters, getButtonStyles } from './FilterPanel.utils';

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filter,
  onFilterChange,
}) => {
  return (
    <Box sx={containerSx}>
      <Typography variant="h6" sx={{ color: '#B6B6B6' }}>
        Ethereum validator rating
      </Typography>
      <Box sx={btnContainerSx}>
        {filters.map(({ label, value }) => (
          <Button
            key={value}
            sx={{
              ...btnSx,
              ...getButtonStyles(filter, value),
            }}
            onClick={() => onFilterChange(value)}
          >
            {label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
