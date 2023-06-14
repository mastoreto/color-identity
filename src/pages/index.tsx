import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import Header from "@components/Header";
import ColorComponent from "@components/ColorComponent";
import EmailComponent from "@components/EmailComponent";

import { api } from "@utils/api";


const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Color Identity</title>
        <meta name="description" content="We enhance your identity through color." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Cinzel&family=Montserrat&family=Poppins:wght@900&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <main className="flex min-h-screen flex-col items-center pt-[5rem]">
        <section className="container flex flex-col items-center justify-center">
          <h1 className="text-5xl tracking-tight text-black sm:text-[4rem]">
            We enhance your identity through color.
          </h1>

          <EmailComponent />

          <ColorComponent />
          
          <div className ="hidden">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
