import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { urls } from "../constants";

export const MainContext = createContext();

export const mainContextProvider = ({ children }) => {
  const router = useRouter();
  const possibleStatus = {
    connected: "connected",
    notConnected: "notConnected",
    loading: "loading",
    error: "error",
  };
  const { connected, notConnected, loading, error } = possibleStatus;

  /* Use States */
  const [currentStatus, setCurrentStatus] = useState(loading);
  const [currentAccount, setCurrentAccount] = useState("");

  const requestAccount = async () => {
    return await window.ethereum.request({ method: "eth_accounts" });
  };

  const isWalletConnected = async () => {
    if (!window.ethereum) return;

    try {
      const allAddresses = await requestAccount();
      if (allAddresses.length) {
        setCurrentStatus(connected);
        setCurrentAccount(allAddresses[0]);
      } else {
        setCurrentStatus(notConnected);
        setCurrentAccount();
      }
    } catch (err) {
      console.log("Error while connecting if wallet connected", err);
      setCurrentAccount("");
      setCurrentStatus(error);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) return;
    try {
      setCurrentStatus(loading);
      const allAddresses = await requestAccount();
      if (allAddresses.length) {
        setCurrentAccount(allAddresses[0]);
        setCurrentStatus(connected);
      } else {
        router.push(urls.home);
        setCurrentAccount("");
        setCurrentStatus(notConnected);
      }
    } catch (err) {
      console.log("Error while connecting wallet ", err);
      setCurrentStatus(error);
    }
  };

  useEffect(() => {
    isWalletConnected();
  }, []);

  return (
    <MainContext.Provider value={{ currentAccount, currentStatus, connectWallet }}>
      {children}
    </MainContext.Provider>
  );
};
