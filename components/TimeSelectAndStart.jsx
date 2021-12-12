import Button from './reusableComponents/Button.jsx';

export default function TimeSelectAndStart({ timeSelect, setTimeSelect, startGame }) {
  return (
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
  );
};