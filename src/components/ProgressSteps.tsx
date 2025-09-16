import dottedLine from "../assets/dottedLine.svg";
import arrow from "../assets/arrow.svg";
import StepCircle from "./StepCircle";

type ProgressStepsProps = {
  steps?: number;
  current?: number;
};

export default function ProgressSteps({
  steps = 6,
  current = 0,
}: ProgressStepsProps) {
  const stepItems = [];
  
  // Create an array to hold the JSX elements for each step
  for (let i = 0; i < steps; i++) {
    const isActive = i <= current;
    const isFirst = i === 0;

    // This is the fifth column (index 4) that should have a border but no circle
    if (i === 4) {
      stepItems.push(<div key={i} className="h-0 w-full border" />);
      continue;
    }
    
    // Renders the main step circles
    stepItems.push(
      <div key={i} className={`h-0 ${isFirst ? 'w-[50%]' : 'w-full'} ${!isFirst && 'border'}`}>
        <div className={`flex relative justify-center items-center ${isFirst ? 'justify-self-end' : ''}`}>
          <StepCircle active={isActive} />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-8 items-center">
      <div className="border h-0 flex justify-self-end w-[50%]">
        <div className="flex relative justify-center items-center">
          <StepCircle active={true} />
        </div>
      </div>
      {/* Render all but the first step, which is hardcoded */}
      {stepItems.slice(1)} 

      {/* The last two elements for the grid */}
      <img className="h-[3px] w-full" src={dottedLine} alt="dotted-line" />

      <div className="flex items-center justify-end w-full">
        <img className="h-[3.5px] w-full" src={dottedLine} alt="dotted-line" />
        {/* <div className="h-0 border border-dashed w-full"/> */}
        <img className="h-[20px] w-[12px]" src={arrow} alt="arrow" />
      </div>
    </div>
  );
}