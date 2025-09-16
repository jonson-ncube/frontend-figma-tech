import ProgressSteps from "./components/ProgressSteps";
import TopCards from "./components/TopCards";
import BottomCards from "./components/BottomCards";
import ProgressGoals from "./components/ProgressGoals";

function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-[32px]">
        <TopCards />
        <ProgressSteps />
        <ProgressGoals />
        <BottomCards />
      </div>
    </main>
  );
}
export default App;
