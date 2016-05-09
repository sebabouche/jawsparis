import styles from './styles.css';

import React from 'react';

export default class Problem extends React.Component{
  render() {
    const problem_data = this.props.problem;
    const title = problem_data.title;
    const problems = problem_data.arguments.map(problem => {
      return(
        <div key={problem.id} className="uk-block uk-text-center">
          <img src={problem.imageUrl} className="uk-width-1-2"/>
          <h2>{problem.content}</h2>
        </div>
      )
    });

  return(
    <section className="uk-block jw-background1" id="section1">
      <div className="uk-container uk-container-center uk-block">
        <h1 className="uk-text-center">
          {title}
        </h1>
        <div className="uk-grid uk-grid-width-medium-1-3">
          {problems}
        </div>
      </div>
    </section>
  )};
};
