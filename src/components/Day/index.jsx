import React from 'react';


import Category from '../Category'

import {data} from '../../data/data';

export default class Day extends React.Component {
  render() {
    const day = data.days[0];

    const categories = day.categories.map(category => {
      return(<Category key={category.id} category={category}/>)
    });

    return (

      <div className="uk-container uk-container-center">
        <h1 className="uk-text-center">{day.title}</h1>
        {categories}
      </div>

    )
  }
}
