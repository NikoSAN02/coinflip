"use client";
import { Inter } from "next/font/google";
import "../styles/globals.css";

import { AuthType } from '@particle-network/auth-core';
import { AuthCoreContextProvider, PromptSettingType } from '@particle-network/auth-core-modal';
import { SolanaTestnet, BNBChain, Ethereum } from '@particle-network/chains';
import { WalletContextProvider } from '../Components/WalletContextProvider';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthCoreContextProvider
          options={{
            projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
            clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY,
            appId: process.env.NEXT_PUBLIC_APP_ID,
            authTypes: [AuthType.email, AuthType.google, AuthType.twitter, AuthType.apple],
            themeType: 'dark',
            fiatCoin: 'USD',
            language: 'en',
            customStyle: {
              logo: 'https://yourlogo.url', // replace with your logo URL
              projectName: 'Your Project Name',
              modalBorderRadius: 16,
              theme: {
                light: {
                  textColor: '#000',
                },
                dark: {
                  textColor: '#fff',
                }
              }
            },
            wallet: {
              visible: true,
              customStyle: {
                supportChains: [SolanaTestnet, BNBChain, Ethereum],
              }
            },
          }}
        >
          <WalletContextProvider>
            {children}
          </WalletContextProvider>
        </AuthCoreContextProvider>
      </body>
    </html>
  );
}
