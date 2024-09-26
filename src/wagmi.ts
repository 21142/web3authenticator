import { createConfig, http } from "wagmi";
import { polygon, sepolia } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

export const config = createConfig({
   chains: [polygon, sepolia],
   connectors: [walletConnect({ projectId })],
   transports: {
      [polygon.id]: http(),
      [sepolia.id]: http(),
   },
});