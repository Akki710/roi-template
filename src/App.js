import "./styles/App.css";
import Header from "./components/Header";
import Cake from "./components/Cake";
import Timeframe from "./components/Timeframe";
import Tiers from "./components/Tiers";
import Rates from "./components/Rates";
import Details from "./components/Details";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Cake />
      <Timeframe />
      <Tiers />
      <Rates />
      <Details />
    </div>
  );
}

export default App;
