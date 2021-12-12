import Head from 'next/head';
import { useEffect, useState } from 'react';
import TimeAndScore from '../components/TimeAndScore.jsx';
import MoleHoleGrid from '../components/MoleHoleGrid.jsx';
import TimeSelectAndStart from '../components/TimeSelectAndStart.jsx';

export default function Home() {
  const [time, setTime] = useState(0);
  const [timeSelect, setTimeSelect] = useState(30);
  const [score, setScore] = useState(0);

  const startGame = () => {
    setScore(0);
    setTime(timeSelect);
  };

  useEffect(() => {
    const timer = setTimeout(() => { if (time > 0) setTime(time - 1) }, (1000));
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-12 p-4">
      <Head>
        <title>Whack-A-Mole</title>
        <meta name="description" content="Whack-A-Mole with Next.js and Tailwind CSS" />
      </Head>

      <header>
        <h1 className="text-4xl font-bold">Whack-A-Mole</h1>
      </header>

      <main className="flex flex-col items-center gap-8">
        <TimeAndScore time={time} score={score} />
        <MoleHoleGrid time={time} score={score} setScore={setScore} />
        <TimeSelectAndStart timeSelect={timeSelect} setTimeSelect={setTimeSelect} startGame={startGame} />
      </main>

      <footer>
        <p className="text-sm font-thin">Made by Andy McGunagle with Next.js and Tailwind CSS</p>
      </footer>
    </div>
  );
};
