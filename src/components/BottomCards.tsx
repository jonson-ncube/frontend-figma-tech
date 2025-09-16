import CardComponentProps from "./CardComponent";
import { allCards } from "../data/allCards";

export default function BottomCards() {
  const bottomCardsRender = allCards.bottom.map((card) => (
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
      <div>{bottomCardsRender[0]}</div>
      <div />
      <div>{bottomCardsRender[1]}</div>
      <div />
      <div>{bottomCardsRender[2]}</div>
      <div />
      <div>{bottomCardsRender[3]}</div>
    </div>
  );
}