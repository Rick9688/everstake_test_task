import { Dispatch, SetStateAction } from 'react';
import { ethers } from 'ethers';

export const connectWallet = async (
  setWalletAddress: Dispatch<SetStateAction<string | null>>,
): Promise<void> => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
        params: [],
      });
      const address = accounts[0];
      setWalletAddress(address);
    } catch (error: unknown) {
      if (error instanceof Error) {
        if ((error as never).code === 4001) {
          alert('You must connect to MetaMask to proceed.');
        } else {
          console.error('Error connecting to MetaMask:', error.message);
          alert('There was an error connecting to MetaMask. Please try again.');
        }
      } else {
        console.error('Unexpected error:', error);
      }
    }
  } else {
    alert('MetaMask is not installed.');
  }
};

export const signMessage = async (
  setSignature: Dispatch<SetStateAction<string>>,
): Promise<void> => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const message = 'test message';
      const signature = await signer.signMessage(message);
      setSignature(signature);
    } catch (err) {
      console.error('Error signing message:', err);
    }
  } else {
    console.log('MetaMask is not installed');
  }
};

export const shortenAddress = (address: string) => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
