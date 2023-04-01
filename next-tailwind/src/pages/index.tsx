import Head from "next/head";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Cards from "../components/Cards";

import { ListArray } from "./constants/types";

export default function Home({list}: {list: ListArray[]}) {
  return (
    <>
      <Head>
        <title>Tailwind Project</title>
      </Head>
      <main>
        <div className="bg-shades-gray-00 dark:bg-shades-gray-100 h-screen">
          <Navbar />
          <Banner />
          <Cards moviesList={list} />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/trending");

  const json = await res.json();

  return {
    props: {
      list: json.list,
    },
  };
}
