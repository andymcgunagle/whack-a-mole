import Head from 'next/head';
import { useEffect, useState } from 'react';
import Button from '../components/reusableComponents/Button.jsx';
import MoleHoleGrid from '../components/MoleHoleGrid.jsx';

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
        <div className="grid grid-cols-2 gap-10">
          <p className="text-2xl font-bold">
            Time:
            <span className={`${time < 5 && time !== 0 ? 'text-red-500' : null}`}>
              {time}
            </span>
          </p>
          <p className="text-2xl font-bold">Score: {score}</p>
        </div>

        <MoleHoleGrid time={time} score={score} setScore={setScore} />

        <div className="flex flex-col justify-evenly items-center md:gap-3 gap-5 w-full">
          <div className="flex items-center md:gap-1 gap-2 text-base">
            <label htmlFor="time-select">
              Play for
            </label>
            <select
              name="time-select"
              value={timeSelect}
              onChange={(e) => setTimeSelect(e.target.value)}
              className="py-1 bg-transparent"
            >
              <option value={30}>30 seconds</option>
              <option value={45}>45 seconds</option>
              <option value={60}>60 seconds</option>
              <option value={90}>90 seconds</option>
              <option value={120}>120 seconds</option>
            </select>
          </div>

          <Button onClick={startGame}>
            Start
          </Button>
        </div>
      </main>

      <footer>
        <p className="text-sm font-thin">Made by Andy McGunagle with Next.js and Tailwind CSS</p>
      </footer>
    </div>
  );
};
