import Head from "next/head";
import Menu from "./components/Menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind Project</title>
      </Head>
      <main>
        <div>
          <Menu />
          <h1 className="text-blue-500">Hello world!</h1>
        </div>
      </main>
    </>
  );
}
