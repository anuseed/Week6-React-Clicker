export default function FlowerCountContainer(props) {
  return (
    <>
      <div>You have {props.flowerCount} flowers.</div>
      <button onClick={props.addFlower}>Flower</button>
    </>
  );
}
