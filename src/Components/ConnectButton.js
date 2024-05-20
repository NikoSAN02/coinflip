"use client";

// components/ConnectButton.js
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const ConnectButton = () => {
  const { connected } = useWallet();

  return (
    <div>
      {connected ? (
        <div>Wallet Connected</div>
      ) : (
        <WalletMultiButton />
      )}
    </div>
  );
};

export default ConnectButton;
