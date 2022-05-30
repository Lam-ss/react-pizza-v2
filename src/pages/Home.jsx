import React from 'react'

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0)
    const [sortTipe, setSortTipe] = React.useState({
      name: 'популярности',
      sortProperty: 'rating',
    })
  
    React.useEffect(() => {
      setIsLoading(true);
      console.log('sdf',sortTipe)
      const order = sortTipe.sortProperty.includes('-') ? 'asc' : 'desc';
      const sortBy = sortTipe.sortProperty.replace('-', '');
      
      fetch(
        `https://629291fccd0c91932b73bb62.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ''
          }&sortBy=${sortBy}&order=${order}`
        )
        .then((res) => {
          return res.json();
        })
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
      window.scrollTo(0, 0);
    }, [categoryId, sortTipe]);

  return (
    <>
        <div className="container">
        <div className="content__top">
        <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
        <Sort value={sortTipe} onChangeSort={(i) => setSortTipe(i)} />
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