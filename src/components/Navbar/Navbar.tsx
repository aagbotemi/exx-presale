import { useState } from "react";
import ConnectionButton from "../ConnectionButton";
import Download from "../../assets/download.svg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Wallet from "../../assets/wallet.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center pt-[40px] pb-[29px] md:pt-[23px] md:pb-[23px]">
      <div className="text-deep_blue text-[24px] leading-[31px] font-bold font-space_grot">
        Logo here
      </div>

      <ul className="hidden md:flex items-center">
        <li className="flex items-end">
          <span className="mr-1">
            <img
              src={Download}
              alt="Download icon"
              style={{ width: 28, height: 18 }}
            />
          </span>

          <span className="font-space_grot font-bold text-[14px] leading-[18px]">
            Download Tokenomics
          </span>
        </li>
        <li className="ml-6 lg:ml-10">
          <ConnectionButton />
        </li>
      </ul>
      <div className="md:hidden">
        <div className="flex items-center">
          <div
            style={{ border: "1px solid rgba(0, 0, 0, 0.28)" }}
            className="rounded-[10px] border-light_blue p-[8px]"
          >
            <img src={Wallet} alt="wallet icon" className="w-[14px] h-[12px]" />
          </div>
          <FiMenu
            className="text-3xl cursor-pointer ml-[14px]"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="animate__animated animate__fadeInRight absolute right-0 top-0 bg-primary w-[80%] h-screen z-50"
          style={{ zIndex: "9999" }}
        >
          <AiOutlineClose
            onClick={() => setIsOpen(false)}
            size={24}
            className={
              "absolute cursor-pointer top-5 right-5 text-white font-bold"
            }
          />

          <ul className="mt-20 flex flex-col justify-center items-center text-lg font-semibold font-mono mx-auto w-[100%]">
            <li className="">
              <ConnectionButton />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export { Navbar as default};
