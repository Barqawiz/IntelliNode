
<p align="center">
<img src="images/multi-model-small-v2.png" width="88%">
</p>

<p align="center">
<img src="images/intelligent_node_header.png" width="500em">
</p>


<p align="center">

<a href="https://www.npmjs.com/package/intellinode" alt="npm version">
    <img src="https://img.shields.io/npm/v/intellinode?style=flat-square" />
</a>

<a href="https://opensource.org/licenses/Apache-2.0" alt="licenses tag">
    <img src="https://img.shields.io/github/license/Barqawiz/IntelliJava?style=flat-square" />
</a>



<img src="https://img.shields.io/badge/builder-intelliCode-green?style=flat-square" />

</p>

# Intelligent Node

IntelliNode is a javascript module that integrates cutting-edge AI into your project. With its intuitive functions, you can easily feed data to models like ChatGPT, WaveNet, and Stable diffusion and receive generated text, speech, or images. It also offers high-level functions such as semantic search and chatbot capabilities.
<br> What sets IntelliNode apart is its lightning-fast access to the latest deep learning models with just a few lines of code.

# Access the module
## Install
One command and get access to latest models:
```
npm i intellinode
```

## Examples
### Gen
The `Gen` function quickly generates tailored content in one line.<br><br>
import:
```js
const { Gen } = require('intellinode');
```
call:
```js
// one line to generate html page code
text = 'a registration page with flat modern theme.'
await Gen.save_html_page(text, folder, file_name, openaiKey);
```
```js
// or generate blog post
const blogPost = await Gen.get_blog_post(prompt, apiKey, provider='cohere');
```

### Chatbot (chatGPT)
import:
```js
const { Chatbot, ChatGPTInput } = require('intellinode');
```
call:
```js
// set the system mode and the user message.
const input = new ChatGPTInput('You are a helpful assistant.');
input.addUserMessage('What is the distance between the Earth and the Moon?');

// get the responses from the chatbot
const responses = await chatbot.chat(input);
```
### Semantic search
import:
```js
const { SemanticSearch } = require('intellinode');
```
call:
```js
const search = new SemanticSearch(apiKey);
// pivotItem is the item to search.
const results = await search.getTopMatches(pivotItem, searchArray, numberOfMatches);
const filteredArray = search.filterTopMatches(results, searchArray)
```

### Language models
import:
```js
const { RemoteLanguageModel, LanguageModelInput } = require('intellinode');
```
call openai model:
```js
const langModel = new RemoteLanguageModel('openai-key', 'openai');
model_name = 'text-davinci-003'

const results = await langModel.generateText(new LanguageModelInput({
  prompt: 'Write a product description for smart plug that works with voice assistant.',
  model: model_name,
  temperature: 0.7
}));

console.log('Generated text:', results[0]);
```
change to call cohere models:

```js
const langModel = new RemoteLanguageModel('cohere-key', 'cohere');
model_name = 'command-xlarge-20221108'
// ... same code
```

### Image models

import:
```js
const { RemoteImageModel, SupportedImageModels, ImageModelInput } = require('intellinode');
```

call DALL·E:
```js
provider=SupportedImageModels.OPENAI;

const imgModel = new RemoteImageModel(apiKey, provider);
const images = await imgModel.generateImages(new ImageModelInput({
    prompt: 'teddy writing a blog in times square',
    numberOfImages: 1
}));
```

change to call Stable Diffusion:
```js
provider=SupportedImageModels.STABILITY;
// ... same code
```


### Openai advanced access
To access Openai services from your Azure account, you have to call the following function at the beginning of your application:
```js
const { ProxyHelper } = require('intellinode');
ProxyHelper.getInstance().setAzureOpenai(resourceName);
```
To access Openai from a proxy for restricted regions:
```js
ProxyHelper.getInstance().setOpenaiProxyValues(openaiProxyJson);
```

For more examples, check [the samples](https://github.com/Barqawiz/IntelliNode/tree/main/samples/command_sample).

# The code repository setup
## First setup
1. Initiate the project:
```
cd IntelliNode
npm install
```

2. Create a .env file with the access keys:<br>
```
OPENAI_API_KEY=<key_value>
COHERE_API_KEY=<key_value>
GOOGLE_API_KEY=<key_value>
STABILITY_API_KEY=<key_value>
HUGGING_API_KEY=<key_value>
```

## Test cases

1. run the remote language models test cases:
`node test/integration/RemoteLanguageModel.test.js`


2. run the remote image models test cases:
`node test/integration/RemoteImageModel.test.js`


3. run the remote speech models test cases:
`node test/integration/RemoteSpeechModel.test.js`

4. run the embedding test cases:
`node test/integration/RemoteEmbedModel.test.js`

5. run the chatBot test cases:
`node test/integration/Chatbot.test.js`

# :closed_book: Documentation
- [Tutorial](https://medium.com/@albarqawi/lightning-fast-access-to-the-latest-ai-models-using-node-js-d31ccd1b09b2): Generate compelling eCommerce content and images.
- [Samples](https://github.com/Barqawiz/IntelliNode/tree/main/samples/command_sample): Explore a code sample with detailed setup documentation to get started with Intellinode.
- [Tutorial](https://hackernoon.com/how-to-build-a-jasper-like-content-generation-platform-using-nodejs): Build your content generation platform using Intellinode.
- [Showcase](https://show.intellinode.ai/): Experience the potential of Intellinode in action, and use your keys to generate content and html pages.

# Pillars
The module foundation:

- **The wrapper layer** provides low-level access to the latest AI models
- **The controller layer** offers a unified input to any AI model by handling the differences. So you can switch between models like Openai and Cohere without changing the code.
- **The function layer** provides abstract functionality that extends based on the app's use cases. For example, an easy-to-use chatbot or marketing content generation utilities.

# Roadmap
Call for contributors:
[registration form ](https://forms.gle/2JsEHAMaj2eMQHYc9).

- [x] Add support to OpenAI Completion.
- [x] Add support to OpenAI DALL·E 2.
- [ ] Add support to other OpenAI functions.
- [x] Add support to cohere generate API.
- [ ] Add support to Google language models.
- [x] Add support to Google speech models.
- [ ] Add support to Amazon language models.
- [ ] Add support to Midjourney image generation.
- [x] Add support to Stable diffusion.
- [x] Add support to hugging face inference.
- [x] Add more high-level functions like semantic search, etc.


# License
Apache License

Copyright 2023 Github.com/Barqawiz/IntelliNode

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
