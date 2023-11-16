function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.alt} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>
          <p>{props.price}</p>
        </span>
      </div>
    </div>
  );
}

export default Pizza;
