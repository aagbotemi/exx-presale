import { BEP40Abi, PreSaleAbi } from "../utils/abi";

export const USDT_CONTRACT_ADDRESS =
  "0x337610d27c682e347c9cd60bd4b3b107c9d34ddd";
export const PRESALE_CONTRACT_ADDRESS =
  "0xDA497727316FBDD71D2b555041035c6641c0D85F";

export const USDT_CONTRACT = {
  address: USDT_CONTRACT_ADDRESS,
  abi: BEP40Abi,
};

export const PRESALE_CONTRACT = {
  address: PRESALE_CONTRACT_ADDRESS,
  abi: PreSaleAbi,
};
