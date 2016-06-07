import React from 'react'

export default class DeliveryFields extends React.Component {
  render () {
    return (
      <div>
        <form className="uk-form">
          <div className="uk-grid" data-uk-grid-margin>
            <div className="uk-width-medium-1-2">
              <input type="text" placeholder="Nom" className="uk-form-large uk-width-1-1" />
            </div>
            <div className="uk-width-medium-1-2">
              <input type="text" placeholder="Prénom" className="uk-form-large uk-width-1-1" />
            </div>
            <div className="uk-width-medium-1-2">
              <input type="text" placeholder="Adresse" className="uk-form-large uk-width-1-1" />
            </div>
            <div className="uk-width-medium-1-2">
              <input type="text" placeholder="Infos complémentaires" className="uk-form-large uk-width-1-1" />
            </div>
            <div className="uk-width-medium-1-3">
              <input type="text" placeholder="Code postal" className="uk-form-large uk-width-1-1" />
            </div>
            <div className="uk-width-medium-1-3">
              <input type="text" placeholder="Ville" className="uk-form-large uk-width-1-1" />
            </div>
            <div className="uk-width-medium-1-3">
              <input type="text" placeholder="Pays" className="uk-form-large uk-width-1-1" />
            </div>
            <div className="uk-width-medium-1-3">
              <input type="text" placeholder="Téléphone" className="uk-form-large uk-width-1-1" />
            </div>
            <div className="uk-width-medium-2-3">
              <div className="uk-form-controls">
                <label>
                  <input type="checkbox" /> Adresse de facturation identique à l'adresse de livraison
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
