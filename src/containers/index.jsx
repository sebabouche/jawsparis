import React from 'react';
import { connect } from 'react-redux'

import ConnectedDistancePlan from '../Sections/DistancePlan'
import Location1 from '../Sections/Location1'
import Location2 from '../Sections/Location2'
import Location3 from '../Sections/Location3'
import TradeIn from '../Sections/TradeIn'

class Body extends React.Component{

  distancePlan() {
    if(this.props.lastStep > 0)  {
        return(<ConnectedDistancePlan />)
    }
  }
  location1() {
    if(this.props.lastStep > 1 ) {
      return(<Location1 />)
    }
  }
  location2() {
    if(this.props.lastStep > 2 ) {
      return(<Location2 />)
    }
  }
  location3() {
    if(this.props.lastStep > 3) {
      return(<Location3 />)
    }
  }
  tradeIn() {
    if(this.props.lastStep > 4) {
      return(<TradeIn />)
    }
  }

  render() {
    return(
      <div>
        {this.distancePlan()}
        {this.location1()}
        {this.location2()}
        {this.location3()}
        {this.tradeIn()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    lastStep: state.get('lastStep')
  }
}

const ConnectedBody = connect(mapStateToProps)(Body)
export default ConnectedBody
