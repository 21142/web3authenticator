import Account from "./Account";
import { WalletOptions } from "./WalletOptions";
import { useAccount } from "wagmi";

const ConnectWallet = () => {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
};

export default ConnectWallet;
