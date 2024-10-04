import "./App.css";

import FlowerCount from "./components/FlowerCount";
// import FlowersPerClick from "./components/FlowersPerClick";
import FlowerUpgrades from "./components/FlowerUpgrades";
import flowerData from "./lib/flowerData.json";

export default function App() {
  return (
    <>
      <h1>Flower Power</h1>
      <FlowerCount />
      {/* <FlowersPerClick /> */}

      {flowerData.map((upgrade) => (
        <div key={upgrade.id}>
          <FlowerUpgrades
            name={upgrade.powerUpName}
            FlowersPerClick={upgrade.increase}
            cost={upgrade.cost}
          />
        </div>
      ))}
    </>
  );
}
