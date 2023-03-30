import Head from "next/head";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import fs from "fs";
import Image from "next/image";
import Cards from "./components/Cards";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind Project</title>
      </Head>
      <main>
        <div className="bg-shades-gray-00 dark:bg-shades-gray-100 h-screen">
          <Navbar />
          <Banner />
          <Cards />
        </div>
      </main>
    </>
  );
}
