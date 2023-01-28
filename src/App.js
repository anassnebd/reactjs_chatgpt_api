import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';

function App() {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai =  new OpenAIApi(configuration);

  const [prompt,setPrompt] = useState("")
  const [result,setResult] = useState("")
  const [loading,setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true);
    axios.defaults.headers.common['User-Agent'] = 'Mozilla/5.0';
    try{
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.5,
        max_tokens: 100,
      });
      setResult(response.data.choices[0].text);
    } catch(error){
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <main className='main'>
      <div className='w-2/4 mx-auto'>
        <textarea
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Write here..."
        className='textarea'>
        </textarea>

        <button onClick={handleClick}
        disabled={loading || prompt.length === 0}
        className="btn">
          { loading ? "Generating..." : "Generate" }
        </button>

        <pre className='result'>{result}</pre>
      </div>
    </main>
  );
}

export default App;
