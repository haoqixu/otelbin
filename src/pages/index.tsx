//React & Next
import Head from "next/head";
//Internal components
import MonacoEditor from "~/components/MonacoEditor";


export default function Home() {

  return (
    <>
      <Head>
        <title>OpenTelemetry Collector Web</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <MonacoEditor />
      </main>
    </>
  );
}
