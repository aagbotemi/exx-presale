import React from "react";

interface IStatus {
  status: string;
}

const TransactionStatus = ({ status }: IStatus) => {
  return (
    <div className="bg-yellow text-deep_blue font-dm_sans font-bold text-[14px] leading-[18px] text-center tracking-[-0.02em] px-[15px] md:px-6 py-3 rounded:[10px] md:rounded-[20px]">
      {status}
    </div>
  );
};

export { TransactionStatus as default };
