'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a dynamic background based on the current weather conditions.
 *
 * It exports:
 * - `generateWeatherBackground`: An async function that takes weather conditions as input and returns CSS code for a dynamic background.
 * - `GenerateWeatherBackgroundInput`: The TypeScript type definition for the input to the `generateWeatherBackground` function.
 * - `GenerateWeatherBackgroundOutput`: The TypeScript type definition for the output of the `generateWeatherBackground` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWeatherBackgroundInputSchema = z.object({
  weatherCondition: z
    .string() // e.g., "Sunny", "Cloudy", "Rainy", "Snowy"
    .describe('The current weather condition.'),
});

export type GenerateWeatherBackgroundInput = z.infer<
  typeof GenerateWeatherBackgroundInputSchema
>;

const GenerateWeatherBackgroundOutputSchema = z.object({
  backgroundCss: z
    .string()
    .describe(
      'CSS code to set the background. Includes properties like background-image, background-color, etc.'
    ),
});

export type GenerateWeatherBackgroundOutput = z.infer<
  typeof GenerateWeatherBackgroundOutputSchema
>;

export async function generateWeatherBackground(
  input: GenerateWeatherBackgroundInput
): Promise<GenerateWeatherBackgroundOutput> {
  return generateWeatherBackgroundFlow(input);
}

const generateWeatherBackgroundPrompt = ai.definePrompt({
  name: 'generateWeatherBackgroundPrompt',
  input: {schema: GenerateWeatherBackgroundInputSchema},
  output: {schema: GenerateWeatherBackgroundOutputSchema},
  prompt: `You are a CSS expert. Generate CSS code to create a dynamic background based on the following weather condition:

Weather Condition: {{{weatherCondition}}}

Consider the following when generating the CSS:

*   Use a light blue (#A0D2EB) as the primary color for sunny conditions.
*   Use a very light blue (#F0F8FF) as the background color.
*   Use a gentle lavender (#E6E6FA) as an accent color.
*   Incorporate smooth animations for transitions.
*   Consider using gradient overlays and subtle shadows for depth.
*   Ensure the background is clean and minimalist.
*   Adapt the background to reflect the specified weather condition (e.g., clouds for cloudy, rain for rainy).
*   Provide CSS code to work as a background-image, or as a background-color. Make sure it fills the entire screen.
*   Do not use any external URLs. Inline any resources. No comments, just raw CSS.

CSS Code:
`,
});

const generateWeatherBackgroundFlow = ai.defineFlow(
  {
    name: 'generateWeatherBackgroundFlow',
    inputSchema: GenerateWeatherBackgroundInputSchema,
    outputSchema: GenerateWeatherBackgroundOutputSchema,
  },
  async input => {
    const {output} = await generateWeatherBackgroundPrompt(input);
    return output!;
  }
);
