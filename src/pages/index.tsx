/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useEffect, useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "@utils/api";
import ColorCard from "@components/ColorCard";
import { it } from "node:test";

interface ChatItem {
  colorName: string;
  colorHexa: string;
  colorOrder: number;
}

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  const [color, setColor] = useState<string>("");
  const [palette, setPalette] = useState<ChatItem[]>([]);

  const generatePalletteMutation = api.palette.createPaletteByColor.useMutation({
    onSuccess: (data) => {
      setPalette(JSON.parse(data?.generatedPalette));
    },
    onError: (error) => {
      console.log(error);
    }
  });
  
  useEffect(() => {
    if (palette) {
      console.log(palette);
    }
  }, [palette]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handelSubmit = () => {
    generatePalletteMutation.mutate({color});
  };

  return (
    <>
      <Head>
        <title>Color Identity</title>
        <meta name="description" content="Generate color palettes through AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="text-[3.5rem] text-white">Color Identity</h1>

        <div className="flex flex-col items-center justify-center gap-4 w-full">
        {sessionData && (
           <section className="w-full">
           <div className="flex justify-center my-5">
             <input
               type="text"
               name="color"
               placeholder="Enter your base color"
               className="mr-5 rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
               onChange={handleChange}
               onKeyDown={(e) => {
                 if (e.key === "Enter" && !e.shiftKey) {
                   handelSubmit();
                 }
               }}
             />
           </div>
           <div className="flex flex-row w-full justify-center">
           {
            palette.length > 0 ? palette.map((item) => (
              <ColorCard key={item.colorOrder} colorName={item.colorName} colorHex={item.colorHexa} />
            )) : null
           }
           </div>
         </section>
        )}
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>

       
      </main>
    </>
  );
};

export default Home;
