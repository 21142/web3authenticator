/* eslint-disable @next/next/no-img-element */
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

const Account = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <div className="flex flex-col items-center gap-6">
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && (
        <div className="flex items-center gap-2">
          <span className="text-lg">Your address: </span>
          <code className="text-xl text-fuchsia-100">
            {ensName ? `${ensName} (${address})` : address}
          </code>
        </div>
      )}
      <button
        className="w-fit rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={() => disconnect()}
      >
        Disconnect
      </button>
    </div>
  );
};

export default Account;
