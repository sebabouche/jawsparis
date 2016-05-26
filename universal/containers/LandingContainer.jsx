import React, {Component} from 'react'
import { Experiment, Variant } from 'react-ab'

import Header from '../components/Landing/Header'
import Problem from '../components/Landing/Problem'
import Solution from '../components/Landing/Solution'
import SignUp from '../components/Landing/SignUp'

import {data} from '../static/landings'

import mixpanel from '../services/mixpanel'

export default class LandingContainer extends Component {
  clear() {
    this.refs.exLanding.clearCookie()
    window.location.reload()
  }

  choose() {
    this.refs.exLanding.chooseVariant()
  }

  choice(experiment, variant) {
    mixpanel.register_once({
      "landing": variant
    })
    mixpanel.track(`Landing Page Loaded`)
  }

  adminButtons() {
    if (!__PROD__) {
      return (
        <div className="uk-container uk-container-center">
          <div className="uk-text-center">
            <button onClick={this.clear.bind(this)} href="" className="uk-button uk-button-mini uk-button-primary">Effacer cookie et recharger</button>
            <button onClick={this.choose.bind(this)} href=""  className="uk-button uk-button-mini uk-button-success">Autre variante</button>
          </div>
        </div>
      )
    }
  }

  landingVariants() {
    const landingData = data.landings
    const landingVariants = landingData.map(variant => {
      return(
        <Variant key={variant.id} name={variant.name} >
          <Header title={variant.title} image={variant.imageUrl} />
          <Problem problem={variant.problem} />
          <Solution solution={variant.solution} />
          <SignUp />
        </Variant>
      )
    })

    return landingVariants
  }


  render () {

    return (
      <div className="uk-height-1-1">
        <Experiment ref="exLanding" onChoice={this.choice} name="landing">
          { this.landingVariants() }
        </Experiment>
        { this.adminButtons() }
      </div>
    )
  }
}
