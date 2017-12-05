import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCities } from '../actions';
import { setActiveCity } from '../actions';

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    let containerClasses = "cities list-group-item";
    if (this.props.city === this.props.activeCity) {
      containerClasses += " selected";
    }

    return (
      <div className={containerClasses}>
        {this.props.cities.map((city) => <p key={city.slug} onClick={() => this.props.setActiveCity(city)}>{city.name}</p> )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    activeCity: state.city
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities, setActiveCity },
    dispatch
  );
}

// export default CityList;
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
