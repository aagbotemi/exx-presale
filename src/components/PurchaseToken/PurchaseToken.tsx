import { Fragment, useState } from "react";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import { toast } from "react-toastify";
import { PRESALE_CONTRACT_ADDRESS } from "../../config";
import { PreSaleAbi } from "../../utils/abi";
import { Loader } from "../core";
import { ethers } from "ethers";

const PurchaseToken = () => {
  const [amount, setAmount] = useState<number>(0);

  const {
    data: buyData,
    error: buyError,
    isLoading: buyLoading,
    write: buy,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: PRESALE_CONTRACT_ADDRESS,
    abi: PreSaleAbi,
    functionName: "buy",
    overrides: {
      value: ethers.utils.parseEther(amount.toString() || "0"),
    },

    onError(error: any) {
      toast.error(`Failed! ${error.reason}`);
    },
  });

  const { isLoading: buyWaitLoading } = useWaitForTransaction({
    hash: buyData?.hash,
    onSuccess(data: any) {
      setAmount(0);
      toast.success("Successful!");
    },
    onError(error: any) {
      toast.error(`Failed! ${error.reason}`);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    buy?.();
  };

  return (
    <Fragment>
      <form
        className="flex items-center justify-between"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full">
          <input
            disabled={buyLoading || buyWaitLoading}
            type="number"
            style={{ background: "rgba(255, 255, 255, 0.4)" }}
            className="w-full py-[18px] pl-5 rounded-[10px] text-[14px] leading-[18px] tracking-[-0.02em] text-dark opacity-60 font-medium border border-inverse_blue outline-inverse_blue pr-20"
            placeholder="00.00 USDT"
            onChange={(e: any) => setAmount(e.target.value)}
          />

          <div className="absolute right-0 top-5 pr-3 lg:pr-5 text-dark opacity-60 text-[12px] leading-[16px] tracking-[-0.02em] border-l border-dark pl-3 lg:pl-5">
            <span className="">00.00 EXX</span>
          </div>
        </div>

        <button
          disabled={buyLoading || buyWaitLoading}
          // disabled={amount <= 0 || buyLoading || buyWaitLoading}
          type="submit"
          className="bg-primary text-white font-bold text-[14px] leading-[18px] tracking-[-0.02em] py-[18px] pl-[22px] pr-[37px] lg:pl-[42px] lg:pr-[41px] rounded-[10px] ml-[10px]"
        >
          {buyLoading || buyWaitLoading ? <Loader /> : "Buy"}
        </button>
      </form>

      <div
        className="flex mt-[10px] font-medium text-[14px] leading-[18px] tracking-[-0.02em]"
        style={{ color: "rgba(17, 19, 21, 0.63)" }}
      >
        <div className="mr-[17px]">
          Min. Buy: <strong className="text-dark">30 USDT</strong>
        </div>
        <div className="">
          Max. Buy: <strong className="text-dark">10,000 USDT</strong>
        </div>
      </div>
    </Fragment>
  );
};

export { PurchaseToken as default };
