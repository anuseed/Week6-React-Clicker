// use map to get this
export default function FlowerUpgradesContainer(props) {
  function handleUpgrade() {
    props.onClick(props.upgrade);
  }

  return (
    <>
      <h2>{props.upgrade.powerUpName}</h2>
      <p>Flowers Per Click : {props.upgrade.increase}</p>
      <p>Cost: {props.upgrade.cost} flowers</p>
      <button onClick={handleUpgrade}>Buy</button>
    </>
  );
}
