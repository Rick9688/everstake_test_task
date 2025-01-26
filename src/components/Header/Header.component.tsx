import React, { useState } from 'react';
import { Box } from '@mui/material';
import { headerSx } from './Header.style.ts';
import { CustomButton } from '../CustomButton/CustomButton.component.tsx';
import { connectWallet, shortenAddress, signMessage } from './Header.utils.ts';

export const Header: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [signature, setSignature] = useState<string>('');

  return (
    <Box sx={headerSx}>
      <Box display="flex" gap={1}>
        {walletAddress && (
          <CustomButton
            handleClick={() => signMessage(setSignature)}
            label={signature ? shortenAddress(signature) : 'Sign Message'}
          />
        )}
        <CustomButton
          label={
            walletAddress ? shortenAddress(walletAddress) : 'Connect Wallet'
          }
          handleClick={() => connectWallet(setWalletAddress)}
        />
      </Box>
    </Box>
  );
};
