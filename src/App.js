import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import Sidebar from './components/Sidebar';
import Main from './components/Main'

function App() {
  const configuration = new Configuration({
    apiKey: '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',
  });

  const openai = new OpenAIApi(configuration);

  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await openai.createCompletion({
        model: 'text-davinci-002',
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 100,
      });
      setResult(response.data.choices[0].text);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className='flex'>
      <Sidebar/>
      <Main/>
    </div>
    // <main>
    //   <div>
    //     <textarea
    //       value={prompt}
    //       onChange={(e) => setPrompt(e.target.value)}
    //       placeholder="Enter a prompt here"
    //       className='font-black text-blacks'
    //     />
    //     <button onClick={handleClick} disabled={loading || prompt.length === 0}>
    //       {loading ? 'Generating...' : 'Generate'}
    //     </button>
    //     <pre>Result : {result}</pre>
    //   </div>
    // </main>
  );
}

export default App;
