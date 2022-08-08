import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import Sidebar from "../sidebar/Sidebar";
import Widget from "../widgets/Widget";
import Button from "../../subcomponents/btns/Button";
import Loading from "../../subcomponents/loading/Loading";
import { MainContext } from "../../context/MainContext";
import Link from 'next/link'

const MainLayout = ({title, children}) => {
  const { currentStatus, connectWallet } = useContext(MainContext);

  const app = (status = currentStatus) => {
    switch (status) {
      case "connected":
        return userLoggedIn;

      case "notConnected":
        return noUserFound;

      case "noMetamask":
        return noMetamask;

      case "error":
        return clientError;

      default:
        return loading;
    }
  };

  const noUserFound = (
    <div>
      <Image
        src="/images/metamask_logo.png"
        width={300}
        height={150}
        alt="metamask_logo"
      />
      <Button
        text="Connect Wallet"
        fullWidth={true}
        className="rounded"
        onClick={() => connectWallet()}
      />
    </div>
  );

  const noMetamask =  (
    <div className="flex flex-col justify-center items-center">
      <img
        src="/images/metamask_full_img.png"
        className="w-full"
        alt="metamask"
      />
      <Link href="https://metamask.io/download/">
        <Button text="Download Metamask" className="rounded" />
      </Link>
    </div>
  );
  const clientError = (
    <div className="flex flex-col justify-center items-center">
      <img
        src="/images/error_img.webp"
       className="w-2/4"
        alt="error"
      />
      <p>An error occured! Please try again.</p>
    </div>
  );

  const loading = (
      <Loading />
  );

  const userLoggedIn = (
    <>
      <div className="border-r border-gray-300 px-2">
        <Sidebar />
      </div>
      <div className=" w-full border-r border-gray-300 px-2">
        {children}
      </div>
      <div className="px-6">
        <Widget />
      </div>
    </>
  );
  return (
    <div className="flex min-h-screen w-screen justify-center py-7 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:flex w-4/5 justify-center">{app(currentStatus)}</main>
    </div>
  );
};

export default MainLayout;
