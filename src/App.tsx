import CardComponentProps from "./components/CardComponent";
import ProgressSteps from "./components/ProgressSteps";
import { bottomCards } from "./data/bottomCards";
import { goals } from "./data/goals";
import { topCards } from "./data/topCards";

function App() {
  const goalPositions = [
    "col-start-1",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
  ];
  const topCardsRender = topCards.map((card) => (
    <CardComponentProps
      key={card.alt}
      image={card.image}
      alt={card.alt}
      position={card.position}
      title={card.title}
    />
  ));
  const bottomCardsRender = bottomCards.map((card) => (
    <CardComponentProps
      key={card.alt}
      image={card.image}
      alt={card.alt}
      position={card.position}
      title={card.title}
    />
  ));

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-10">
        <div className="grid gap-2 grid-cols-8">
          <div></div>
          <div>{topCardsRender[0]}</div>
          <div>{topCardsRender[1]}</div>
          <div></div>
          <div></div>
          <div></div>
          <div>{topCardsRender[2]}</div>
          <div></div>
          <div></div>
        </div>
        {/* <ProgressSteps /> */}

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
        <div className="grid gap-2 grid-cols-8">
          <div></div>
          <div>{bottomCardsRender[0]}</div>
          <div></div>
          <div>{bottomCardsRender[1]}</div>
          <div></div>
          <div>{bottomCardsRender[2]}</div>
          <div></div>
          <div>{bottomCardsRender[3]}</div>
        </div>
      </div>
    </main>
  );
}

export default App;
