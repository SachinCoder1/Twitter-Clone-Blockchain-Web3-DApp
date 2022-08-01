// import { Main } from "next/document";
import Head from "next/head";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";
import Widget from "../components/widgets/Widget";

const Home = () => {
  return (
    <div className="flex min-h-screen w-screen justify-center py-7 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:flex w-4/5 justify-center">
        <div className="border-r border-gray-300 px-2">
          <Sidebar />
        </div>
        <div className=" w-full border-r border-gray-300 px-2">
          <Main />
        </div>
        <div className="px-6">
          <Widget />
        </div>
      </main>
    </div>
  );
};

export default Home;
