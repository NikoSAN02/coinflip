"use client";
import { useState, useEffect } from 'react';
import { useConnect } from '@particle-network/auth-core-modal';
import { useWallet } from '@solana/wallet-adapter-react';
import ConnectButton from './ConnectButton';

function Header() {
  const { connect, connected } = useConnect();
  const { disconnect, connected: walletConnected } = useWallet();
  const [userInfo, setUserInfo] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This will run only on the client side
    setIsClient(true);
  }, []);

  const handleConnect = async () => {
    if (!connected) {
      try {
        const userInfo = await connect();
        setUserInfo(userInfo);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      setUserInfo(null);
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  return (
    <div className='w-full absolute flex justify-between items-center p-7 text-white h-[70px] z-10'>
      <div>
        logo
      </div>
      <div className='w-[500px] h-full flex justify-center items-center'>
        <ul className='flex w-full justify-between items-center'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            {isClient ? (
              walletConnected ? (
                <button onClick={handleDisconnect}>Disconnect</button>
              ) : (
                <ConnectButton />
              )
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
