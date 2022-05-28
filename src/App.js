import logo from "./logo.svg";
import React from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import pizzas from "./assets/img/pizzas.json";
// https://629291fccd0c91932b73bb62.mockapi.io/items

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://629291fccd0c91932b73bb62.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj, i) => (
              <PizzaBlock {...obj} key={`${i}_pizzas`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
