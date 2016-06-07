import React from 'react'

export default class Thankyou extends React.Component {
  render () {
    return (
      <div className='uk-height-1-1 uk-block uk-block-muted'>
        <div className="uk-height-1-1 uk-cover-background">
          <div className="uk-position-cover uk-flex uk-flex-column uk-flex-center uk-flex-middle">
            <div className="uk-width-1-2 uk-container-center uk-text-center">
              <img className="uk-width-1-2 uk-width-small-1-4 uk-width-medium-1-2 uk-width-large-1-5" src={require('../Header/images/logo-noir-cartouche.svg')} />
            </div>

            <div className="uk-container uk-container-center uk-text-center">
              <h1 className="uk-text-center">Merci!</h1>
              <p className="uk-text-center uk-article-lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <hr/>

            <p className="uk-article-lead uk-margin-bottom-remove">
              Au moindre souci…
            </p>
            <p className="uk-margin-remove">
              Contactez JAWS au
            </p>
            <p className="uk-badge uk-badge-notification uk-badge-success uk-margin-remove">XX XX XX XX XX</p>
            <p className="uk-margin-top-remove"> on fera tout pour vous aider.</p>
          </div>
        </div>
      </div>
    )
  }
}
