import Pizza from "./Pizza";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Menu() {
  const pizza = pizzaData;

  const numPizzas = pizza.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => {
            return (
              <Pizza
                name={pizza.name}
                key={pizza.name}
                alt={pizza.name}
                ingredients={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            );
          })}
        </ul>
      ) : (
        <h2>We are working on our Menu, Please check back later</h2>
      )}

      {/* <Pizza
        name="Pizza Spinachi"
        alt="Pizza Spinachi"
        ingredients="Tomatoe, Mozarella, Spinachi, and Richotta Cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Focaccia"
        alt="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={6}
      /> */}
    </main>
  );
}

export default Menu;
