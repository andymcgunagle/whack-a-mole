import { useEffect, useState } from "react";
import Image from "next/image";
import getRandomImage from "../functions/getRandomImage.js";

export default function MoleHoleGrid({ time, score, setScore }) {
  const moleHoles = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return (
    <form className="grid grid-cols-3 grid-rows-2 place-items-center gap-6 md:gap-4">
      {moleHoles.map((moleHole) => {
        return <MoleHole key={moleHole.id} time={time} score={score} setScore={setScore} />
      })}
    </form>
  );
};

function MoleHole({ time, score, setScore }) {
  return (
    <div className="flex justify-center items-center bg-gray-700 border-8 border-red-900 rounded-full h-12 w-12 md:p-16 p-10 text-4xl shadow-2xl">
      <Mole time={time} score={score} setScore={setScore} />
    </div>
  );
};

function Mole({ time, score, setScore }) {
  const [hidden, setHidden] = useState(true);
  const [moleImage, setMoleImage] = useState(getRandomImage);

  useEffect(() => {
    if (time > 0 && hidden) {
      const timer = setTimeout(() => { setHidden(false) }, (1000 * Math.floor(Math.random() * (5 - 1)) + 1));
      return () => clearTimeout(timer);
    };

    if (time > 0 && !hidden) {
      const timer = setTimeout(() => { setHidden(true) }, (1000 * (Math.random() * (5 - 2)) + 2));
      return () => clearTimeout(timer);
    };

    if (time === 0) setHidden(true);
  }, [time]);

  const onMoleClick = () => {
    setHidden(true);
    setScore(score + 1);
    setMoleImage(getRandomImage);
  };

  return (
    <button

      className={`${hidden ? 'hidden' : null} relative h-12 w-12 p-8 md:p-10 select-none animate-fade-in-and-wiggle`}
      type="button"
      onClick={onMoleClick}
    >
      <Image
        src={moleImage}
        alt="Photo of Andy McGunagle"
        layout="fill"
        objectFit="cover"
      />
    </button>
  );
};