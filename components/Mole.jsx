import { useState, useEffect } from 'react';
import Image from "next/image";
import getRandomImage from "../functions/getRandomImage.js";

export default function Mole({ time, score, setScore }) {
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