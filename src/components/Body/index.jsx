import styles from './index.css';

import React from 'react';

import SampleChild from '../SampleChild';
import SampleGravatar from '../SampleGravatar';

export default class Body extends React.Component{
  render() {
    return(
      <div>
      <section className="uk-block uk-block-muted" id="section1">
        <div className="uk-height-viewport">
          <h2 className="uk-text-center">Section1</h2>
        </div>
      </section>
        <section className="uk-block uk-block-primary" id="section2">
          <div className="uk-height-viewport">
            <h2 className="uk-contrast uk-text-center">Section2</h2>
          </div>
        </section>
        <section className="uk-block uk-block-muted" id="section3">
          <div className="uk-height-viewport">
            <h2 className="uk-text-center">Section3</h2>
          </div>
        </section>
        <section className="uk-block uk-block-primary" id="section4">
          <div className="uk-height-viewport">
            <h2 className="uk-contrast uk-text-center">Section4</h2>
          </div>
        </section>

      </div>
    );
  }
};
