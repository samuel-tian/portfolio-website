import Head from "next/head";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="max-w-2xl">
      <Head>
        <title>Sam Tian</title>
      </Head>
      <About />
      <Projects />
    </div>
  );
}
