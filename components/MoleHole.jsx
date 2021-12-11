import Mole from './Mole.jsx';

export default function MoleHole({ time, score, setScore }) {
  return (
    <div className="flex justify-center items-center bg-gray-700 border-8 border-red-900 rounded-full h-12 w-12 p-12 md:p-16 text-4xl shadow-2xl">
      <Mole time={time} score={score} setScore={setScore} />
    </div>
  );
};