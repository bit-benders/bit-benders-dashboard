import { Magic } from "magic-sdk";
// import { ethers } from 'ethers';

export const magicLogout = async (magic: Magic | null) => {
  if (await magic?.user.isLoggedIn()) {
    await magic?.user.logout();
  }
};

const createMagic = (key: string) => {
  return typeof window !== "undefined" && new Magic(key);
};

// const createProvider = (magic: any) => {
//   return typeof window !== "undefined" && new ethers.providers.Web3Provider(magic.rpcProvider);
// };

// Pass in your publishable key from your .env file
export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_API_KEY!);
// export const magicProvider = createProvider(magic)
