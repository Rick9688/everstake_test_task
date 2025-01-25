declare global {
  interface Ethereum {
    request: (args: { method: string; params?: unknown[] }) => Promise<never>;
  }

  interface Window {
    ethereum?: Ethereum;
  }
}

export {};
