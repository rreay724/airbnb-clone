import Head from "next/head";
import { Header, Banner } from "../components/index";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </div>
  );
}
