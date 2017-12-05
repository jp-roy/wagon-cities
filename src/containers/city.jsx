import React, { Component } from 'react';
import { connect } from 'react-redux';

class City extends Component {
  render() {
    let name = "Yo ! Select a city"
    let address, slug
    if (this.props.activeCity) {
      name = this.props.activeCity.name
      address = this.props.activeCity.address
      slug = this.props.activeCity.slug
    }

    return(
      <div className="active-city">
        <h3>{name}</h3>
        <p>{address}</p>
        <img className="gif" src={`https://kitt.lewagon.com/placeholder/cities/${slug}`} />
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
