import family from "./assets/family.svg";
import CardComponentProps from "./components/CardComponent";
import ProgressSteps from "./components/ProgressSteps";

function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-10">
      <CardComponentProps image={family} alt="Family" position="down" title="Baby's birth" />
      <ProgressSteps/>
      </div>
    </main>
  );
}

export default App;
