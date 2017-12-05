// TODO: add and export your own actions
import cities from '../cities';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

export function activeCity(city) {
  return {
    type: 'SET_ACTIVE_CITY',
    payload: city
  }
}
