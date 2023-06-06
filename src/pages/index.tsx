import React, { useEffect, useState } from "react";
import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";
import { SpinnerDotted } from "spinners-react";

import { api } from "@utils/api";
import ColorCard from "@components/ColorCard";

interface PaletteItems {
  colorName: string;
  colorHex: string;
  colorOrder: number;
  colorContrast: boolean;
  colorsOfContrast: number[];
}

interface Palette {
  primary: PaletteItems[];
  secondary: PaletteItems[];
  tertiary: PaletteItems[];
}

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  const [color, setColor] = useState<string>({});
  const [palette, setPalette] = useState<Palette>({
    primary: [],
    secondary: [],
    tertiary: [],
  });

  /*const generatePalletteMutation = api.palette.createPaletteByColor.useMutation({
    onSuccess: (data) => {
      setPalette(JSON.parse(data?.generatedPalette));
    },
    onError: (error) => {
      console.log(error);
    }
  });*/

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handelSubmit = () => {
    //generatePalletteMutation.mutate({color});
    /*setPalette([
      {
        "colorName": "Rojo Primario",
        "colorHexa": "#FF0000",
        "colorOrder": 1,
        "colorContrast": true,
        "colorsOfContrast": [2, 3]
      },
      {
        "colorName": "Negro Secundario",
        "colorHexa": "#000000",
        "colorOrder": 2,
        "colorContrast": true,
        "colorsOfContrast": [1, 3]
      },
      {
        "colorName": "Blanco de Fondo",
        "colorHexa": "#FFFFFF",
        "colorOrder": 3,
        "colorContrast": true,
        "colorsOfContrast": [1, 2]
      },
      {
        "colorName": "Amarillo de Acento",
        "colorHexa": "#FFC000",
        "colorOrder": 4,
        "colorContrast": false,
        "colorsOfContrast": []
      },
      {
        "colorName": "Azul Cielo de Acento",
        "colorHexa": "#007FFF",
        "colorOrder": 5,
        "colorContrast": false,
        "colorsOfContrast": []
      },
      {
        "colorName": "Gris Claro de Fondo",
        "colorHexa": "#F5F5F5",
        "colorOrder": 6,
        "colorContrast": false,
        "colorsOfContrast": []
      },
      {
        "colorName": "Gris Medio de Acento",
        "colorHexa": "#6B6B6B",
        "colorOrder": 7,
        "colorContrast": false,
        "colorsOfContrast": []
      },
      {
        "colorName": "Gris Claro Neutro",
        "colorHexa": "#EFEFEF",
        "colorOrder": 8,
        "colorContrast": false,
        "colorsOfContrast": []
      }
    ]);*/
    setPalette({
      primary: [
      {
      "colorName": "Red",
      "colorHex": "#FF0000",
      "colorOrder": 1,
      "colorContrast": true,
      "colorsOfContrast": [2, 3]
      },
      {
      "colorName": "Black",
      "colorHex": "#000000",
      "colorOrder": 2,
      "colorContrast": true,
      "colorsOfContrast": [1, 3]
      },
      {
      "colorName": "White",
      "colorHex": "#FFFFFF",
      "colorOrder": 3,
      "colorContrast": true,
      "colorsOfContrast": [1, 2]
      }
      ],
      
      secondary: [
      {
      "colorName": "Red Light 1",
      "colorHex": "#FF5959",
      "colorOrder": 4,
      "colorContrast": false,
      "colorsOfContrast": []
      },
      {
      "colorName": "Red Light 2",
      "colorHex": "#FF7C7C",
      "colorOrder": 5,
      "colorContrast": false,
      "colorsOfContrast": []
      },
      {
      "colorName": "Red Light 3",
      "colorHex": "#FFA6A6",
      "colorOrder": 6,
      "colorContrast": false,
      "colorsOfContrast": []
      },
      {
      "colorName": "Red Light 4",
      "colorHex": "#FFD3D3",
      "colorOrder": 7,
      "colorContrast": false,
      "colorsOfContrast": []
      },
      {
      "colorName": "Red Light 5",
      "colorHex": "#FFECEC",
      "colorOrder": 8,
      "colorContrast": false,
      "colorsOfContrast": []
      }
      ],
      
      tertiary: [
      {
      "colorName": "Red-Black-White",
      "colorHex": "#BF4040",
      "colorOrder": 9,
      "colorContrast": false,
      "colorsOfContrast": []
      },
      {
      "colorName": "Red-White-Black",
      "colorHex": "#E1E1E1",
      "colorOrder": 10,
      "colorContrast": false,
      "colorsOfContrast": []
      },
      {
      "colorName": "Black-Red-White",
      "colorHex": "#3F3F3F",
      "colorOrder": 11,
      "colorContrast": false,
      "colorsOfContrast": []
      },
      {
      "colorName": "Black-White-Red",
      "colorHex": "#7F7F7F",
      "colorOrder": 12,
      "colorContrast": false,
      "colorsOfContrast": []
      },
      {
      "colorName": "White-Red-Black",
      "colorHex": "#D1D1D1",
      "colorOrder": 13,
      "colorContrast": false,
      "colorsOfContrast": []
      },
      {
      "colorName": "White-Black-Red",
      "colorHex": "#F0F0F0",
      "colorOrder": 14,
      "colorContrast": false,
      "colorsOfContrast": []
      }
      ]
      });
  };

  const { primary, secondary, tertiary } = palette;

  const generatePallette: JSX.Element = (palette: PaletteItems[]) => {
    const isLoaded = false;

    if (isLoaded)
      return (
        <SpinnerDotted size={50} thickness={180} speed={75} color="#36ad47" />
      );

    return (
      <div className="my-2 flex w-full flex-row justify-center">
        {palette.length !== 0 &&
          palette.map((item) => (
            <ColorCard
              key={item.colorOrder}
              colorName={item.colorName}
              colorHex={item.colorHex}
            />
          ))}
      </div>
    );
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

        <div className="flex w-full flex-col items-center justify-center gap-4">
          {sessionData && (
            <section className="w-full flex flex-row">
              <div className="my-5 flex justify-center items-center w-1/3">
                <input
                  type="text"
                  name="color"
                  placeholder="Enter your base color"
                  className="mr-5 rounded-full h-10 bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      handelSubmit();
                    }
                  }}
                />
              </div>
              <div className="flex w-full flex-col justify-center  w-2/3">
                <h2 className="text-center text-2xl text-white">Primary</h2>
                {generatePallette(primary)}
                <h2 className="text-center text-2xl text-white">Secondary</h2>
                {generatePallette(secondary)}
                <h2 className="text-center text-2xl text-white">Tertiary</h2>
                {generatePallette(tertiary)}
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
