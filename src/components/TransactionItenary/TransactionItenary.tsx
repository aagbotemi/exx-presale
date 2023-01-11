import React, { Fragment } from "react";

const TransactionItenary = () => {
  const itenaryArray: Array<string> = [
    "Sales Pending",
    "Sale Live",
    "Sale Completed",
    "Vetting Started",
    "EXX Launched",
  ];

  const itemList = () => {
    return (
      Array.isArray(itenaryArray) &&
      itenaryArray.length > 0 &&
      itenaryArray.map((item: string, _i: number) => {
        return (
          <div key={_i} className="flex">
            <div className="">
              <div
                className={`${
                  _i === 0 && "shadow-active"
                } bg-primary w-[20px] h-[20px] rounded-full`}
              ></div>
              <div
                className={`${
                  _i + 1 === itenaryArray.length && "hidden"
                } h-[43px] w-[2px] bg-gradient-to-r from-primary to-green ml-[9px]`}
              ></div>
            </div>
            <div className="ml-[35px] mb-[40px] text-dark tracking-[-0.02em] leading-[23px] text-[18px] font-bold font-space_grot">
              {item}{" "}
              {_i == 0 && (
                <span className="text-[#00D9AC] tracking-[-0.02em] leading-[16px] text-[12px] font-normal font-dm_sans ml-[11px]">
                  In Progress
                </span>
              )}
            </div>
          </div>
        );
      })
    );
  };

  return <div className="hidden md:block mt-[35px]">{itemList()}</div>;
};

export { TransactionItenary as default };
