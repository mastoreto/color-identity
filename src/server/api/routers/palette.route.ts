/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";
import { Configuration, OpenAIApi } from "openai";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@server/api/trpc";

const config = new Configuration({
  apiKey: process.env.GPT3_API_KEY,
});

const OpenAI = new OpenAIApi(config);

const generatePrompt = (color: string) => {
  return `"Think like a world-class graphic designer, specializing in color for interfaces and user experience.\n\nCreate a hexadecimal color palette of 5 colors with #${color} as the primary color, and return the following structure:\n\n[\n{\"colorName\":\n\"colorHexa\":\n\"colorOrder\":\n}\n]"`;
};

export const paletteRoute = createTRPCRouter({
  createPaletteByColor: publicProcedure
    .input(z.object({ color: z.string() }))
    .mutation(async ({ input }) => {
      const { color } = input;
      try {
          const response = await OpenAI.createCompletion({
            model: "text-davinci-003",
            prompt: generatePrompt(color),
            temperature: 0,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          return {
            generatedPalette: response.data.choices[0]?.text,
          };
      } catch (error) {
        console.error({
          code: "INTERNAL_SERVER_ERROR",
          message: error,
        });
      }
    }),
});
