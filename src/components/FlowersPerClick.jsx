import { useState, useEffect } from "react";

export default function FlowersPerClick() {
  const [flowerCount, setFlowerCount] = useState(0);

  useEffect(() => {
    const flowersPerSecondInterval = setInterval(() => {
      setFlowerCount((currentCount) => currentCount + 1);
      //   shoujld be current count + flowerspersecond value
    }, 1000);

    return () => {
      clearInterval(flowersPerSecondInterval);
    };
  }, []);

  return (
    <>
      <div>You have {flowerCount} flowers.</div>
    </>
  );
}
