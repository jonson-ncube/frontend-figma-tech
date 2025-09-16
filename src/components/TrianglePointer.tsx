type TrianglePointerProps = {
    position: "up" | "down";
}

export default function TrianglePointer({ position }: TrianglePointerProps) {
  return (
    <>
      <div
        className={` w-0 h-0 border-l-[7.395px] border-r-[7.395px] absolute border-l-transparent border-r-transparent
          ${ position === "down"
            ? "border-t-[5.48px] -bottom-[6px] border border-b-transparent border-t-[#173F4B]"
            : "border-b-[5.48px] -top-[6px] border border-t-transparent border-b-[#173F4B]"
          }`}
        />
        <div className={`w-4 absolute border-t-2 rotate-90 rounded border-[#3C7F90] ${ position === 'down' ? "-bottom-6" :"-top-6"}`}/>
    </>
  );
}
