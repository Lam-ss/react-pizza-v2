import React from 'react';

function Categories({ value, onChangeCategory }) {

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

    return (
      <div className="categories">
        <ul>
          {categories.map((categoryName, i) => (
              <li onClick={() => onChangeCategory(i)} className={value === i ? 'active' : ''} key={`${i}_${value}`}>
                {categoryName}
              </li> 
            )
          )}
        </ul>
      </div>
    );
  }

export default Categories;