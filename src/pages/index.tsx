import Head from "next/head";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import ConnectWallet from "~/components/ConnectWallet";

export default function Home() {
  const [showConnection, setShowConnection] = useState(false);
  const { isConnected, connector, status } = useAccount();

  useEffect(() => {
    setShowConnection(true);
  }, []);

  return (
    <>
      <Head>
        <title>Web 3 Authenticator</title>
        <meta name="description" content="web 3 authenticator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e0262] to-[#151622]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="max-w-5xl text-center text-5xl font-extrabold tracking-tight text-fuchsia-100 sm:text-[5rem]">
            Web 3{" "}
            <span className="text-[hsl(280,100%,70%)]">Authenticator</span> App
          </h1>
          {showConnection && (
            <div className="grid grid-cols-1 gap-4 text-fuchsia-100 md:gap-8">
              <h3 className="text-center text-2xl font-bold text-white">
                {isConnected
                  ? `${status.toUpperCase()} with ${connector?.name}`
                  : "Authenticate by connecting your wallet →"}
              </h3>
              <ConnectWallet />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
