export default function StepCircle({ active }: { active?: boolean }) {
  return (
    <div className="absolute flex items-center justify-center rounded-full">
      <div className="absolute w-4 h-4 bg-[#215A6B] rounded-full" />

      <div
        className={`flex z-50 items-center justify-center rounded-full ${
          active ? "bg-[#00B897] w-[18px] h-[18px] mr-2" : "bg-[#00B897] w-2 h-2"
        }`}
      >
        {active && <div className="w-2 h-2 rounded-full bg-[#215A6B]" />}
      </div>
    </div>
  );
}