import React from 'react';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  render() {
    return (
      <div id="mc_embed_signup">
        <form
          action="//nicolaidis.us11.list-manage.com/subscribe/post?u=8831ef722a7386b295fb8898c&amp;id=3d5fc57d9b"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate uk-form"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <input
              type="email" name="EMAIL"
              value={this.state.inputValue}
              onChange={this.handleChange}
              className="uk-form-width-medium "
              id="mce-EMAIL" placeholder="Mon Email" />
            <button
              type="submit" name="subscribe"
              id="mc-embedded-subscribe"
              className="uk-button uk-button-success">
              Je m'inscris
            </button>

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
          </div>
        </form>
      </div>
    )  
  }
}
