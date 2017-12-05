import React, { Component } from 'react';
import { connect } from 'react-redux';

class City extends Component {
  render() {
    let name = (this.props.activeCity ? this.props.activeCity.name : "Yo ! Select a city")

    return(
      <div className="active-city">
        <h3>{name}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

// export default City;
export default connect(mapStateToProps)(City);
