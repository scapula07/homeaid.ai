import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-MJ1PL6CVYXGpXNWcESjF10I4",
    apiKey: "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",
});
export const openai = new OpenAIApi(configuration);

