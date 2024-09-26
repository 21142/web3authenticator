import { useEffect, useState } from "react";
import { type Connector } from "wagmi";

type Props = {
  connector: Connector;
  onClick: () => void;
};

export const WalletOption = ({ connector, onClick }: Props) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <button
      className="w-fit rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
      disabled={!ready}
      onClick={onClick}
    >
      {connector.name}
    </button>
  );
};
