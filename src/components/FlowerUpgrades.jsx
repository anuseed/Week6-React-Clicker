// use map to get this
export default function FlowerUpgrades(props) {
  function handleClick() {}
  return (
    <>
      <h2>{props.name}</h2>
      <p>Flowers Per Click : {props.FlowersPerClick}</p>
      <p>Cost: {props.cost} flowers</p>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}
