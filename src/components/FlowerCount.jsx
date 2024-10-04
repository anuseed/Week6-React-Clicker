import { useState, useEffect } from "react";

export default function FlowerCount() {
  const [flowerCount, setFlowerCount] = useState(0);

  function addFlower() {
    setFlowerCount(flowerCount + 1);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setFlowerCount((currentFlowers) => currentFlowers + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  //   we want cookies per second to update w

  return (
    <>
      <div>You have {flowerCount} flowers.</div>
      <button onClick={addFlower}>Flower</button>
    </>
  );
}
