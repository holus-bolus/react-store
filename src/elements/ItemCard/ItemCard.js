export const ItemCard = (props) => {
  function clicked(event) {
    console.log(event.target);
  }

  return (
    <li className="product-item" onClick={clicked}>
      <h2>{props.name}</h2>
      <p>{props.color}</p>
      <p>{props.price}</p>
    </li>
  );
};
