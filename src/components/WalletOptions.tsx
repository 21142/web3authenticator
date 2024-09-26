import * as React from "react";
import { useConnect } from "wagmi";
import { WalletOption } from "./WalletOption";

export const WalletOptions = () => {
  const { connectors, connect } = useConnect();

  return (
    <div className="flex justify-center gap-6">
      {connectors.map((connector) => (
        <WalletOption
          key={connector.uid}
          connector={connector}
          onClick={() => connect({ connector })}
        />
      ))}
    </div>
  );
};
