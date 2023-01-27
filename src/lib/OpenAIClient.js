const { Configuration, OpenAIApi } = require("openai");
const { OPENAI_API_KEY } = require("./secrets.js");

console.log(OPENAI_API_KEY);

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
export const openai = new OpenAIApi(configuration);
