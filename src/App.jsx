import "./App.css";
import FlowerCountContainer from "./components/FlowerCountContainer";
import FlowersPerClickContainer from "./components/FlowersPerClickContainer";
import FlowerUpgradesContainer from "./components/FlowerUpgradesContainer";
import flowerData from "./lib/flowerData.json";
import { useState, useEffect } from "react";

export default function App() {
  const [flowersPerSecondCount, setFlowerPerSecondCount] = useState(1);
  const [flowerCount, setFlowerCount] = useState(0);

  function addFlower() {
    setFlowerCount(flowerCount + 1);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowerCount(
        (currentFlowers) => currentFlowers + flowersPerSecondCount
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [flowersPerSecondCount]);

  function handleClick(upgrade) {
    if (flowerCount == upgrade.cost || flowerCount > upgrade.cost) {
      setFlowerPerSecondCount(flowersPerSecondCount + upgrade.increase);
      setFlowerCount(flowerCount - upgrade.cost);
    } else {
      alert("You do not have enough flowers to buy this power!");
    }
  }

  return (
    <div className="page">
      <div className="topComponents">
        <h1 className="Title">Flower Power</h1>

        <FlowerCountContainer flowerCount={flowerCount} addFlower={addFlower} />
        <FlowersPerClickContainer
          flowersPerSecondCount={flowersPerSecondCount}
        />
      </div>
      <div className="bottomComponents">
        <h1 className="powerTitle">Powers</h1>
        {flowerData.map((upgrade) => (
          <div key={upgrade.id}>
            <FlowerUpgradesContainer upgrade={upgrade} onClick={handleClick} />
          </div>
        ))}
      </div>
    </div>
  );
}
