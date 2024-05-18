"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [result, setResult] = useState(null);
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
    setAnimating(true);
    setTimeout(() => {
      const outcome = Math.random() < 0.5 ? 'Heads' : 'Tails';
      setResult(outcome);
      setHistory((prevHistory) => [...prevHistory, outcome]);
      setAnimating(false);
    }, 1000); // Duration of the animation
  };

  return (
    <div className="flex flex-row items-center justify-center h-screen w-screen">
      <h1 className="text-4xl font-bold mb-8">Coin Flip</h1>
      <div className='flex flex-col gap-10'>
      <div className={`mt-8 ${animating ? 'animate-flip' : ''}`}>
        {result && (
          <Image
            src={`/${result.toLowerCase()}.png`}
            alt={result}
            width={100}
            height={100}
          />
        )}
      </div>
      <button
        onClick={flipCoin}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Flip Coin
      </button>
      </div>
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-2">History</h2>
        <ul className="">
          {history.map((res, index) => (
            <li key={index} className="text-lg">{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}