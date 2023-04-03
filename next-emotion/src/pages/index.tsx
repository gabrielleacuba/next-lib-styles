import Head from "next/head";
import Banner from "@/components/Banner";
import ListCard from "@/components/ListCard";
import { ListArray } from "@/types/movies";

export default function Home({
  listWeek,
  listDay,
}: {
  listWeek: ListArray[];
  listDay: ListArray[];
}) {
  return (
    <>
      <Head>
        <title>Emotion Project</title>
      </Head>
      <main>
        <Banner />
        <ListCard moviesList={listWeek} title="WEEK TRENDING" />
        <ListCard moviesList={listDay} title="DAY TRENDING" />
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
