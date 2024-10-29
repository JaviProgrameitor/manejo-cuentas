
import BarSide from "./components/BarSide/BarSide";
import Contenido from "./pages/Contenido";

function App() {
  return (
    <div
      className="h-dvh bg-[#121212] grid grid-cols-1 grid-rows-[1fr_56px]"
    >
      <Contenido />
      <BarSide />
    </div>
  );
}

export default App;
