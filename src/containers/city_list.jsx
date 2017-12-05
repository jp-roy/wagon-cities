import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCities } from '../actions';
import { activeCity } from '../actions';

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  handleClick = () => {
    this.props.activeCity(this.props.city);
  }

  render() {
    let containerClasses = "list-group-item";
    if (this.props.city === this.props.activeCity) {
      containerClasses += " selected";
    }

    return (
      <div className={containerClasses}>
        {this.props.cities.map((city, key) => <p key={key} onClick={this.handleClick}>{city.name}</p> )}
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
