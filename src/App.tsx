import family from "./assets/family.svg";
import CardComponentProps from "./components/CardComponent";

function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <CardComponentProps image={family} alt="Family" position="down" title="Baby's birth" />
    </main>
  );
}

export default App;
