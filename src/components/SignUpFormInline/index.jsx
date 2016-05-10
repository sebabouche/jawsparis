import React from 'react';

export default class SignUpFormInline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      firstnameValue: ""
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({emailValue: event.target.value});
  }

  handleFirstnameChange(event) {
    this.setState({firstnameValue: event.target.value});
  }

  render() {
    return (
      <div id="mc_embed_signup">
        <form
          action="//paris.us13.list-manage.com/subscribe/post?u=33f520f8f7f8fdb1663eedeaf&amp;id=92e07b5a4b"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate uk-form"
          target="_blank"
          novalidate
        >
          <div className="uk-grid uk-grid-small" data-uk-margin>
            <div className="uk-width-1-1 uk-width-small-1-2 uk-width-large-1-4">
              <input
                type="text" name="FNAME"
                value={this.state.firstnameValue}
                onChange={this.handleFirstnameChange}
                className="uk-width-1-1"
                id="mce-FNAME" placeholder="Mon Prénom" />
            </div>

            <div className="uk-width-1-1 uk-width-small-1-2 uk-width-large-1-4">
              <input
                type="email" name="EMAIL"
                value={this.state.emailValue}
                onChange={this.handleEmailChange}
                className="uk-width-1-1"
                id="mce-EMAIL" placeholder="Mon Email" />
            </div>

            <div className="uk-width-1-1 uk-width-small-1-2 uk-width-large-1-4">

            	<select name="MMERGE3" defaultValue="" className="uk-width-1-1" id="mce-MMERGE3">
                <option value="" disabled>Mon quartier</option>
              	<option value="Paris 1er">Paris 1er</option>
                <option value="Paris 2e">Paris 2e</option>
                <option value="Paris 3e">Paris 3e</option>
                <option value="Paris 4e">Paris 4e</option>
                <option value="Paris 5e">Paris 5e</option>
                <option value="Paris 6e">Paris 6e</option>
                <option value="Paris 7e">Paris 7e</option>
                <option value="Paris 8e">Paris 8e</option>
                <option value="Paris 9e">Paris 9e</option>
                <option value="Paris 10e">Paris 10e</option>
                <option value="Paris 11e">Paris 11e</option>
                <option value="Paris 12e">Paris 12e</option>
                <option value="Paris 13e">Paris 13e</option>
                <option value="Paris 14e">Paris 14e</option>
                <option value="Paris 15e">Paris 15e</option>
                <option value="Paris 16e">Paris 16e</option>
                <option value="Paris 17e">Paris 17e</option>
                <option value="Paris 18e">Paris 18e</option>
                <option value="Paris 19e">Paris 19e</option>
                <option value="Paris 20e">Paris 20e</option>
  	          </select>
            </div>

            <div className="uk-width-1-1 uk-width-small-1-2 uk-width-large-1-4">
              <button
                type="submit" name="subscribe"
                id="mc-embedded-subscribe"
                className="uk-button uk-button-success uk-width-1-1">
                M'informer du lancement
              </button>
            </div>

          </div>

          <div id="mce-responses" className="clear">
            <div className="response uk-hidden" id="mce-error-response"></div>
            <div className="response uk-hidden" id="mce-success-response"></div>
          </div>
          <div aria-hidden="true" className="uk-hidden">
            <input
              type="text"
              name="b_8831ef722a7386b295fb8898c_3d5fc57d9b"
              tabindex="-1" value="" />
          </div>

        </form>
      </div>
    )
  }
}
