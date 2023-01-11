import { useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import Rectangle from "../../assets/rectangle.svg";
import { PRESALE_CONTRACT_ADDRESS, USDT_CONTRACT_ADDRESS } from "../../config";
import { ProgressBar, Timer, TransactionStatus } from "../core";
import PurchaseToken from "../PurchaseToken";
import { BEP40Abi, PreSaleAbi } from "../../utils/abi";
import { makeNum } from "../../lib/number-utils";
import { ethers } from "ethers";

const TransactionForm = () => {
  const { address } = useAccount();

  const { data: balanceOf } = useContractRead({
    address: USDT_CONTRACT_ADDRESS,
    abi: BEP40Abi,
    functionName: "balanceOf",
    args: [address],
  });

  // @ts-ignore
  const balance = balanceOf && makeNum(balanceOf?._hex);

  const { data: symbol } = useContractRead({
    address: USDT_CONTRACT_ADDRESS,
    abi: BEP40Abi,
    functionName: "symbol",
  });

  const { data: raisedBNB } = useContractRead({
    address: PRESALE_CONTRACT_ADDRESS,
    abi: PreSaleAbi,
    functionName: "raisedBNB",
  });

  const { data: hardCap } = useContractRead({
    address: PRESALE_CONTRACT_ADDRESS,
    abi: PreSaleAbi,
    functionName: "hardCap",
  });

  // @ts-ignore
  console.log("TTTTTTT: ", ethers.utils.formatUnits(hardCap));
  
  // @ts-ignore
  const percentage = (Number(ethers.utils.formatUnits(raisedBNB)) / Number(ethers.utils.formatUnits(hardCap))) * 100
  
  console.log("OOOOOOO: ", typeof percentage);
  return (
    <div className="mt-4 relative">
      <div
        style={{ background: "rgba(255, 255, 255, 0.4)" }}
        className="inline text-primary font-dm_sans font-bold text-[14px] tracking-[-0.02em] leading-[18px] rounded-[10px] py-[16px] px-[20px]"
      >
        {`${balance || 0} ${symbol}`}
      </div>

      <div className="absolute -left-6 top-9">
        <img src={Rectangle} alt="rectangle icon" />
      </div>
      <div className="w-full bg-white pt-[20px] pb-[14px] px-[12px] md:p-[20px] mt-8 rounded-[10px]">
        <div className="flex items-center justify-between">
          <Timer />
          <TransactionStatus status={"Pending"} />
        </div>

        <div className="mt-5 md:mt-[43px]">
          <div
            style={{ color: "rgba(17, 19, 21, 0.63)" }}
            className="font-space_grot font-medium text-sm tracking-[-0.02em] mb-[10px]"
          >
            Sales Progress
          </div>
          <ProgressBar percentage={percentage || 0} />
        </div>

        <div className="mt-[30px] md:mt-[40px]">
          <div className="mb-[10px] font-space_grot font-bold text-[18px] leading-[23px] tracking-[-0.02em]">
            Enter amount to buy
          </div>

          <PurchaseToken />
        </div>

        <div className="mt-[30px] md:mt-10">
          <div className="font-bold font-dm_sans text-[14px] leading-[18px] tracking-[-0.02em] text-dark mb-[10px]">
            Disclaimer:
          </div>

          <div
            className="font-dm_sans text-[12px] leading-[16px] tracking-[-0.02em]"
            style={{ color: "rgba(17, 19, 21, 0.6)" }}
          >
            The information provided shall not in any way constitute a
            recommendation as to whether you should invest in any product
            discussed.{" "}
            <span className="text-dark font-bold">
              We accept no liability for any loss
            </span>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export { TransactionForm as default };
