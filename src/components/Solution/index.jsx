import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

export default class Solution extends React.Component{
  render() {
    const solution_data = this.props.solution;
    const title = solution_data.title;
    const solutions = solution_data.arguments.map(solution => {
      return(
        <div key={solution.id} className="uk-block uk-text-center">
          <img src={solution.imageUrl} className="uk-width-2-3" />
          <h2>{solution.content}</h2>
        </div>
      )
    });

  return(
    <section className="uk-block" id="section2">
      <div className="uk-container uk-container-center uk-block">
        <h1 className="uk-text-center">
          {title}
        </h1>
        <div className="uk-grid uk-grid-width-medium-1-3">
          {solutions}
        </div>
      </div>
    </section>
  )};
};
