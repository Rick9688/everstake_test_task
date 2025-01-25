import { Button } from '@mui/material';
import { btnSx } from './WalletButton.style.ts';
import { WalletButtonProps } from './WalletButton.type.ts';

export const WalletButton = ({ label, handleClick }: WalletButtonProps) => {
  return (
    <Button onClick={handleClick} variant="contained" sx={btnSx}>
      {label}
    </Button>
  );
};
