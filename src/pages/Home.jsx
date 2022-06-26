import React from 'react'

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0)
    const [sortType, setSortType] = React.useState(0)

    console.log(sortType)
  
    React.useEffect(() => {
      setIsLoading(true);
      fetch("https://629291fccd0c91932b73bb62.mockapi.io/items?category=" + categoryId)
        .then((res) => {
          return res.json();
        })
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
      window.scrollTo(0, 0);
    }, [categoryId, sortType]);

  return (
    <>
        <div className="container">
        <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
        {isLoading
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : items.map((obj, i) => <PizzaBlock {...obj} key={i} />)}
        </div>
        </div>
    </>
  );
};

export default Home;