function Pizza(props) {
  // only use if/else and switch statements outside the component return logic.
  if (props.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.photoName} alt={props.alt} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>
          <p>{props.price}</p>
        </span>
      </div>
    </li>
  );
}

export default Pizza;
