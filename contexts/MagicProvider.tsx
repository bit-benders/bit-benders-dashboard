import { Magic as MagicBase } from "magic-sdk";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Magic = MagicBase;

type MagicContextType = {
  magic: Magic | null;
};

const MagicContext = createContext<MagicContextType>({
  magic: null,
});

const MagicProvider = ({ children }: { children: ReactNode }) => {
  const [magic, setMagic] = useState<any>(null);
  // const [connection, setConnection] = useState<Connection | null>(null);

  const rpcURL = process.env.NEXT_PUBLIC_RPC_URL;

  const customTestnetNodeOptions = {
    rpcUrl: "https://rpc-mumbai.maticvigil.com/", // Polygon RPC URL
    chainId: 80001, // Polygon chain id
  };

  const customNodeOptions = {
    rpcUrl: "https://polygon-rpc.com/", // Polygon RPC URL
    chainId: 137, // Polygon chain id
  };

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_MAGIC_API_KEY) {
      const pk = process.env.NEXT_PUBLIC_MAGIC_API_KEY;
      const magic = new MagicBase(pk, {
        network: customTestnetNodeOptions,
      });
      // const connection = new Connection(rpcURL!);
      setMagic(magic);
      // setConnection(connection);
    }
  }, [rpcURL]);

  const value = useMemo(() => {
    return {
      magic,
    };
  }, [magic]);

  return (
    <MagicContext.Provider value={value}>{children}</MagicContext.Provider>
  );
};

export const useMagic = () => useContext(MagicContext);

export default MagicProvider;
