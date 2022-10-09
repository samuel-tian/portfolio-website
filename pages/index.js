import Head from "next/head";
import About from "../components/About";
import Classes from "../components/Classes";
import Projects from "../components/Projects";
import Research from "../components/Research";

export default function Home() {
	return (
		<div className="max-w-2xl">
			<Head>
				<title>Sam Tian</title>
			</Head>
			<About />
			<Research />
			<Projects />
			{/* <Classes /> */}
		</div>
	);
}
