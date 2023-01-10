import { ConnectButton } from "@rainbow-me/rainbowkit";
import bsc from "../../assets/bsc-logo.svg";
import ArrowTP from "../../assets/arrow-top-right.svg";

const ConnectionButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="bg-white md:bg-primary flex items-center px-[28px] py-[18px] text-primary md:text-white font-bold text-[14px] leading-[18px] tracking-[-0.02em] rounded-[10px]"
                    onClick={openConnectModal}
                    type="button"
                  >
                    <span className="mr-[19px]">Connect Wallet</span>
                    <img src={ArrowTP} alt="arrow icon" className="w-[12px] h-[12px]" />
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    className="bg-white md:bg-primary flex items-center px-[28px] py-[18px] text-primary md:text-white font-bold text-[14px] leading-[18px] tracking-[-0.02em] rounded-[10px]"
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div className="md:flex">
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="flex items-center main__button rounded-[10px] px-[35px] md:px-[16px] lg:px-[35px] pt-[10px] pb-[11px] mr-[13px]"
                  >
                    <img
                      alt={chain.name ?? "Chain icon"}
                      src={bsc}
                      style={{ width: 33, height: 33 }}
                      className="mr-[10px] md:mr-[5px] lg:mr-[10px]"
                    />
                    {chain.name === "Binance Smart Chain Testnet"
                      ? "BSC Mainnet"
                      : chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="main__button border border-[#0077FE] rounded-[10px] text-primary font-bold leading-[18px] text-[14px] tracking-[-0.02em] font-dm_sans px-[18px] pl-[28px] md:pl-[14px] lg:pl-[28px] pr-[40px] md:pr-[20px] lg:pr-[40px] py-5 mt-6 md:mt-0 w-[14rem] md:w-auto"
                  >
                    {account.displayName}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export { ConnectionButton as default };
