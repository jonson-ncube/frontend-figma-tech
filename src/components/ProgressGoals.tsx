import { goals } from "../data/goals";
import { goalPositions } from "../utils/layoutUtils";

export default function ProgressGoals() {
  return (
    <div className="grid gap-2 grid-cols-8">
      {goals.map(({ label }, index) => (
        <div
          key={index}
          className={`text-sm ${
            index === goals.length - 1 ? "text-end" : "text-center "
          } text-white/60 whitespace-pre-line ${goalPositions[index]}`}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
