import Head from 'next/head';
import { useEffect, useState } from 'react';
import Button from '../components/Button.jsx';
import MoleHoleGrid from '../components/MoleHoleGrid.jsx';

export default function Home() {
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);

  const startTimer = () => {
    setScore(0);
    setTime(30);
  };

  useEffect(() => {
    const timer = setTimeout(() => { if (time > 0) setTime(time - 1) }, (1000));
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-12">
      <Head>
        <title>Whack-A-Mole</title>
        <meta name="description" content="Whack-A-Mole with Next.js and Tailwind CSS" />
      </Head>

      <header>
        <h1 className="text-4xl font-bold">Whack-A-Mole</h1>
      </header>

      <main className="flex flex-col items-center gap-6">
        <div className="grid grid-cols-2 gap-10">
          <p className="text-2xl font-bold">Time: {time}</p>
          <p className="text-2xl font-bold">Score: {score}</p>
        </div>

        <MoleHoleGrid time={time} score={score} setScore={setScore} />

        <Button onClick={startTimer}>
          Start
        </Button>
      </main>

      <footer>
        <p className="font-thin">Made by Andy McGunagle with Next.js and Tailwind CSS</p>
      </footer>
    </div>
  );
};
