import StepCircle from "./StepCirle";
import dottedLine from "../assets/dottedLine.svg";
import arrow from "../assets/arrow.svg";

type ProgressStepsProps = {
  steps?: number;
  current?: number;
};

export default function ProgressSteps({ steps = 5, current = 0 }: ProgressStepsProps) {
  return (
    <div className="flex items-center">
      <div className="grid grid-cols-6 items-center gap-2">
        {Array.from({ length: steps }).map((_, i) => (
          <div key={i} className="flex items-center gap-1">
            <StepCircle active={i <= current} />
            {i < steps - 1 && (
              <div className="border-t-2 h-0 w-[130px] rounded-lg" />
            )}
          </div>
        ))}
        <div className="flex items-center">
          <img
            className="h-[3px] w-[140px]"
            src={dottedLine}
            alt="dotted-line"
          />
          <img className="h-[20px] w-[12px]" src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}
