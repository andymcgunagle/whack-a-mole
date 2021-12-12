export default function TimeAndScore({ time, score }) {
  return (
    <div className="grid grid-cols-2 gap-10">
      <p className="text-2xl font-bold">
        Time:
        <span className={`${time < 5 && time !== 0 ? 'text-red-500' : null}`}>
          {time}
        </span>
      </p>
      <p className="text-2xl font-bold">Score: {score}</p>
    </div>
  );
};