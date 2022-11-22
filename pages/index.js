import Head from "next/head";
import About from "../components/About";
import Classes from "../components/Classes";
import Projects from "../components/Projects";
import Publications from "../components/Publications";
import Research from "../components/Research";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sam Tian</title>
      </Head>
      <About />
      <Research />
      <Publications />
      <Projects />
      {/* <Classes /> */}
    </div>
  );
}
