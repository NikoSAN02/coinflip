"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';


export default function Home() {
  const [result, setResult] = useState('Heads');
  const [prevResult, setPrevResult] = useState('Heads');
  const [history, setHistory] = useState([]);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedHistory = JSON.parse(localStorage.getItem('history')) || [];
      setHistory(storedHistory);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('history', JSON.stringify(history));
    }
  }, [history]);

  const flipCoin = () => {
    setPrevResult(result);
    setAnimating(true);
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setResult(outcome);
      setHistory((prevHistory) => [...prevHistory, outcome]);
      setAnimating(false);
    }, 1000); // Duration of the animation
  };
  return (
    <>
    <div className="flex flex-col items-center gap-12 justify-center h-screen w-screen ">
      <h1 className=" text-5xl font-bold mt-[300px] sm:mt-[80px]">Coin Flip</h1>
      <div className='flex flex-col h-full w-full sm:h-full sm:w-full justify-center gap-9 sm:flex-row items-center sm:items-center'>
        {/* inside 1st div */}
      <div className='flex flex-col shadow-white hover:shadow-2xl hover:shadow-white transition ease-in-out shadow-sm items-center justify-center rounded-xl bg-gradient-to-r from-[#D3D3D3] to-[#2D3436] gap-10 h-[600px] sm:h-[600px] sm:w-2/4 w-5/6 m-4'>
      <div className="relative mt-8 h-[200px] w-[200px] ">
        <div className={`absolute inset-0 ${animating ? 'flip' : ''}`}>
          <Image
            src={`/${prevResult.toLowerCase()}.png`}
            alt={prevResult}
            layout="fill"
            objectFit="contain"
          />
        </div>
        {animating && (
          <div className="absolute inset-0 flip-back">
            <Image
              src={`/${result.toLowerCase()}.png`}
              alt={result}
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
      </div>
      
      <button onClick={flipCoin} className="rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
      Flip 
    </button>
      </div>
      {/* inside 2ndst div */}
      <div className="  h-[300px] sm:h-[600px] w-3/5 sm:w-1/4 m-4 shadow-2xl rounded-xl bg-gradient-to-r from-[#9c9898] to-[#2D3436]">
        <h2 className=" font-semibold text-3xl text-center mt-4">History</h2>
        <div className="overflow-y-auto m-4 h-[70%] sm:h-[80%] sm:m-4">
        <ul className="list-disc m-10 ">
          {history.map((res, index) => (
            <li key={index} className="text-xl">{res}</li>
          ))}
        </ul>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}