// use map to get this
export default function FlowerUpgradesContainer(props) {
  function handleUpgrade() {
    props.onClick(props.upgrade);
  }

  return (
    <div className="flowerUpgradesContainer">
      <h2>{props.upgrade.powerUpName}</h2>
      <p>Flowers Per Second: {props.upgrade.increase}</p>
      <p>Cost: {props.upgrade.cost} flowers</p>
      <button onClick={handleUpgrade}>Buy</button>
    </div>
  );
}
