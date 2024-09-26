import { GeistSans } from "geist/font/sans";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import { WagmiProvider } from "wagmi";
import { config } from "../wagmi";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <WagmiProvider config={config}>
      <SessionProvider session={session}>
        <div className={GeistSans.className}>
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </WagmiProvider>
  );
};

export default api.withTRPC(MyApp);
