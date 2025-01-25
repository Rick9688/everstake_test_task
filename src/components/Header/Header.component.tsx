import { Box } from '@mui/material';
import { headerSx } from './Header.style.ts';
import { WalletButton } from '../WalletButton/WalletButton.component.tsx';
import { useState } from 'react';
import { connectWallet, shortenAddress, signMessage } from './Header.utils.ts';

export const Header = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [signature, setSignature] = useState<string>('');

  return (
    <Box sx={headerSx}>
      <Box display="flex" gap={1}>
        {walletAddress && (
          <WalletButton
            handleClick={() => signMessage(setSignature)}
            label={signature ? shortenAddress(signature) : 'Sign Message'}
          />
        )}
        <WalletButton
          label={
            walletAddress ? shortenAddress(walletAddress) : 'Connect Wallet'
          }
          handleClick={() => connectWallet(setWalletAddress)}
        />
      </Box>
    </Box>
  );
};
