import TrianglePointer from "./TrianglePointer";

type CardComponentProps = {
    image: string;
    alt: string;
    title: string;
    position: "up" | "down";
}

export default function CardComponent({image, alt, title, position = "down"} : CardComponentProps) {
  return (
    <div className={"flex flex-col relative items-center bg-[#173F4B] w-[130px] h-[136px] rounded-[5px] p-2 shadow-[0px_4px_12px_rgba(0,0,0,0.25)]"}>
      <img className="h-[76px] w-[114px] rounded" src={image} alt={alt} />
      <p className={"font-normal text-sm py-3"}>{title}</p>
      <TrianglePointer position={position}/>
    </div>
  );
}