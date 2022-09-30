import { returnTagsForImageUrls } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.133.0/testing/asserts.ts";
import { config } from "https://deno.land/x/dotenv@v3.1.0/mod.ts";

declare global {
  var GOOGLE_VISION_API_KEY: string;
}

const envVars = config();

const testInput =
  "https://a.mktgcdn.com/p/K3ON5TY6ZvIn85uFy_ZzBz6RTYSRlpsDaMyX6N_Se5I/1000x713.jpg," +
  "https://a.mktgcdn.com/p/m7JR-E02go7gfDc2NTEdWxuleEVO4oH-5lI35Lpz7Mo/1000x713.jpg," +
  "https://a.mktgcdn.com/p/T184mc-7rHCrgLAQ8qrHVHBXk-6T78svgFAHT1pOjcs/750x534.jpg";

globalThis.GOOGLE_VISION_API_KEY = envVars.GOOGLE_VISION_API_KEY;

Deno.test("Detect Labels for Image Url", async () => {
  const tags = await returnTagsForImageUrls(testInput);
  assertEquals(tags.length, 1);
});

Deno.test("Bad request", async () => {
  const tags = await returnTagsForImageUrls("bluh");
  assertEquals(tags, []);
});
