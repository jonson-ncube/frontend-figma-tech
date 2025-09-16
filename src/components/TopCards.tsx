import CardComponentProps from "./CardComponent";
import { allCards } from "../data/allCards";

export default function TopCards() {
  const topCardsRender = allCards.top.map((card) => (
    <CardComponentProps
      key={card.alt}
      image={card.image}
      alt={card.alt}
      position={card.position}
      title={card.title}
    />
  ));

  return (
    <div className="grid gap-2 grid-cols-8">
      <div />
      <div>{topCardsRender[0]}</div>
      <div>{topCardsRender[1]}</div>
      <div />
      <div />
      <div />
      <div>{topCardsRender[2]}</div>
      <div />
      <div />
    </div>
  );
}