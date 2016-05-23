import React from 'react'

export default class PaymentFields extends React.Component {
  render () {
    return (
      <div>
        <form className="uk-form">
          <div className="uk-grid" data-uk-grid-margin>
            <div className="uk-width-medium-1-2">
              <input type="text" placeholder="Titulaire de la carte" className="uk-form-large uk-width-1-1" />
            </div>
            <div className="uk-width-medium-1-2">
              <input type="text" placeholder="Numéro de carte" className="uk-form-large uk-width-1-1" />
            </div>
            <div className="uk-width-medium-1-2">
              <input type="text" placeholder="Date d'exp" className="uk-form-large uk-width-1-1" />
            </div>
            <div className="uk-width-medium-1-2">
              <input type="text" placeholder="Cryptogramme" className="uk-form-large uk-width-1-1" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
