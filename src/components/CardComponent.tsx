import TrianglePointer from "./TrianglePointer";

export default function CardComponent({image, alt, title, position = "down"} : CardComponentProps) {
  return (
    <div className={`flex flex-col relative ${position === "right" ? "bg-[#3C7F90] items-end":"bg-[#173F4B] items-center"} w-[130px] min-h-[136px] rounded-[5px] p-2 shadow-[0px_4px_12px_rgba(0,0,0,0.25)]`}>
      <img className="h-[76px] w-[114px] rounded" src={image} alt={alt} />
      <p className={"font-normal text-center text-sm py-3"}>{title}</p>
      <TrianglePointer position={position}/>
    </div>
  );
}