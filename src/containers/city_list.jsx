import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCities } from '../actions';
import { activeCity } from '../actions';

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    let containerClasses = "list-group-item";
    if (this.props.city === this.props.activeCity) {
      containerClasses += " selected";
    }

    return (
      <div className={containerClasses}>
        {this.props.cities.map((city) => <p key={city.slug} onClick={() => this.props.activeCity(city)}>{city.name}</p> )}
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
    { setCities, activeCity },
    dispatch
  );
}

// export default CityList;
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
