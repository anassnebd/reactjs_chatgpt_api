import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';import './components.scss'
import SendIcon from '../assets/icons/send.png'
import ReactLoading from 'react-loading';


function Main() {
    const configuration = new Configuration({
        apiKey: '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',
      });
    
      const openai = new OpenAIApi(configuration);
    
      const [prompt, setPrompt] = useState('');
      const [result, setResult] = useState('');
      const [quest, setQuest] = useState('');
      const [loading, setLoading] = useState(false);
    
      const handleClick = async () => {
        setLoading(true);
        setQuest(prompt);
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
    <div className='relative main h-screen w-10/12 block'>
        <div className='h-5 w-3/4 center bg-red-500'>
            <p id='prompt_quest'>{quest}</p>
        </div>
        <div className='absolute w-3/6 bottom-12 right-0 left-0 center flex'>
            <input 
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a prompt here"
            type="text" name="" id="" className='w-11/12 h-10 bg-input-primary rounded-l-sm outline-none pl-5 text-sm'/>
            <button 
            onClick={handleClick} disabled={loading || prompt.length === 0}
            className='bg-zinc-700 text-black w-1/12 rounded-r-sm outline-transparent'>
                {loading ? <ReactLoading type={'spin'} color={'#ffffff'} height={'25%'} width={'25%'} className='center'/> : <img src={SendIcon} className='w-4 center' alt="" />}
                {/* <img src={SendIcon} className='w-4 center' alt="" /> */}
            </button>

        </div>  
    </div>
  )
}

export default Main