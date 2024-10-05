export default function FlowersPerClickContainer(props) {
  return (
    <div className="flowersPerClickContainer">
      <p>
        Your flower power is <span>{props.flowersPerSecondCount}</span> flowers
        per second.
      </p>
    </div>
  );
}
