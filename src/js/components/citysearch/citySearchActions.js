const axios = require('axios');

export const types = {
  GET_WEATHER: 'GET_WEATHER_FULFILLED',
  UPDATE_INPUT: 'UPDATE_INPUT',
  ADD_NEW_ITEM: 'ADD_NEW_ITEM'
};

export function updateCity(city) {
  return {
    type: 'UPDATE_CITY',
    payload: city
  };
}

export function updateInput(input) {
  return {
    type: 'UPDATE_INPUT',
    payload: input
  };
}

export function getWeather(city) {
  return {
    type: 'GET_WEATHER',
    payload: axios.get(`/api/${city}`)
  };
}

export function addNewItem(citySearch) {
  return {
    type: 'ADD_NEW_ITEM',
    payload: citySearch
  };
}
