import flower from "/images/flower.png";

export default function FlowerCountContainer(props) {
  return (
    <div className="flowerCountContainer">
      <p>
        You have <span>{props.flowerCount}</span> flowers.
      </p>
      <img
        className="flower"
        onClick={props.addFlower}
        src={flower}
        alt="purple flower"
      />
    </div>
  );
}
