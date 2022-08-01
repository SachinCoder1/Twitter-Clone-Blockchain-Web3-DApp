// import { Main } from "next/document";
import Head from "next/head";
import Sidebar from "../components/sidebar/Sidebar";
import Main from "../components/main/Main";

const Home = () => {
  return (
    <div className="flex min-h-screen w-screen justify-center py-7 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:flex md:w-9/12 justify-center">
        <div className="border-r border-gray-300 px-2">
          <Sidebar />
        </div>
        <div className="flex-1 border-r border-gray-300 px-2">
          <Main />
        </div>
        <div className="px-6">
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Home;
