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
    <div className={styles.container}>
      <h1 className={styles.title}>Coin Flip</h1>
      <button onClick={flipCoin} className={styles.button}>Flip Coin</button>
      <div className={`${styles.coinContainer} ${animating ? styles.animate : ''}`}>
        {result && (
          <Image
            src={`/${result.toLowerCase()}.png`}
            alt={result}
            className={styles.coin}
            width={100}
            height={100}
          />
        )}
      </div>
      <div className={styles.history}>
        <h2>History</h2>
        <ul>
          {history.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}