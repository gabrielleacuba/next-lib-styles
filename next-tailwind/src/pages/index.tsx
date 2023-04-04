import Head from "next/head";
import Banner from "../components/Banner";
import Cards from "../components/ListCard";

import { ListArray } from "../types/movies";
import { useEffect } from 'react';

export default function Home({
  listWeek,
  listDay,
}: {
  listWeek: ListArray[];
  listDay: ListArray[];
}) {
  useEffect(() => {
    import("@alice-health/wonderland-react").then(
      ({ defineCustomElements }) => {
        defineCustomElements();
      }
    );
  }, []);
  return (
    <>
      <Head>
        <title>Tailwind Project</title>
      </Head>
      <main>
        <Banner />
        <Cards moviesList={listWeek} title="WEEK TRENDING" />
        <Cards moviesList={listDay} title="DAY TRENDING" />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/trending");

  const json = await res.json();

  return {
    props: {
      listWeek: json.listWeek,
      listDay: json.listDay,
    },
  };
}
