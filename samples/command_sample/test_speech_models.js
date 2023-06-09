const { RemoteSpeechModel, Text2SpeechInput, AudioHelper } = require('intellinode');
// below imports to call the keys from .env file
const dotenv = require('dotenv');
dotenv.config();

const audioHelper = new AudioHelper();

async function generateSpeech(apiKey, text, language) {
  const speechModel = new RemoteSpeechModel(apiKey);
  const input = new Text2SpeechInput({ text: text, language: language });
  const audioContent = await speechModel.generateSpeech(input);

  const decodedAudio = audioHelper.decode(audioContent);

  const saved = audioHelper.saveAudio(decodedAudio, './temp', 'temp.mp3');
  console.log(`Audio file saved: ${saved}`);
  console.log('check the temp folder')

}

(async () => {
  // Generate speech
  const apiKey = process.env.GOOGLE_API_KEY;
  const text = 'Welcome to Intelligent Node';
  const language = 'en-gb';

  await generateSpeech(apiKey, text, language);
})();
