import Head from "next/head";
import Sidebar from "../components/sidebar/Sidebar";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex min-h-screen w-screen justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:flex md:w-9/12 items-center justify-center">
        <div className="border-r border-gray-300 px-2">
          <Sidebar />
        </div>
        <div className="flex-1 border-r border-gray-300">
          <Sidebar />
        </div>
        <div className="px-6">
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Home;
