import MoleHole from './MoleHole.jsx';

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
    <form className="grid grid-cols-3 grid-rows-2 place-items-center gap-4 md:gap-4">
      {moleHoles.map((moleHole) => {
        return <MoleHole key={moleHole.id} time={time} score={score} setScore={setScore} />
      })}
    </form>
  );
};