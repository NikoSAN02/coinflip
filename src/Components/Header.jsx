"use client"
import { useState, useEffect } from 'react';
import { useConnect } from '@particle-network/auth-core-modal';

function Header() {
  const { connect, connected } = useConnect();
  const [userInfo, setUserInfo] = useState(null);

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

  return (
    <div className=' w-full absolute flex justify-between items-center p-7 text-white h-[70px] z-10'>
    <div>
        logo
    </div>
    <div className='w-[500px] h-full flex justify-center items-center '>
        <ul className=' flex w-full justify-between items-center'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li> <button onClick={handleConnect}>
                {connected ? 'Wallet Connected' : 'Connect Wallet'}
              </button></li>
        </ul>
    </div>
   
</div>
  )
}

export default Header