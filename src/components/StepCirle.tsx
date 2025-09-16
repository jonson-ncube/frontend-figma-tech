export default function StepCircle({ active }: { active?: boolean }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full ${
        active ? "bg-[#00B897] w-[18px] h-[18px]" : "bg-[#00B897] w-[8px] h-[8px]"
      }`}
    >
      {active && <div className="w-[8px] h-[8px] rounded-full bg-[#173F4B]" />}
    </div>
  );
}
