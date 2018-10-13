import { types } from './citySearchActions';

const defaultState = {
  city: '',
  name: 'City',
  lat: '',
  long: '',
  temp: '',
  pressure: '',
  humidity: '',
  lowestTemp: '',
  highestTemp: '',
  windSpeed: '',
  weatherIcon: '',
  citySearch: []
};

export default function currentSearch(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.GET_WEATHER: {
      return {
        ...state,
        city: payload.data.name,
        name: payload.data.name,
        lat: payload.data.coord.lat,
        long: payload.data.coord.lon,
        temp: payload.data.main.temp,
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        lowestTemp: payload.data.main.temp_min,
        highestTemp: payload.data.main.temp_max,
        windSpeed: payload.data.wind.speed,
        weatherIcon: `https://openweathermap.org/img/w/${payload.data.weather[0].icon}.png`,
        citySearch: [...state.citySearch,
          {
            name: payload.data.name,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
          }]
      };
    }
    case types.UPDATE_INPUT: {
      return {
        ...state,
        city: payload
      };
    }
    case types.ADD_NEW_ITEM: {
      const newArr = [...state.citySearch];
      const searchObject = { name: payload, date: new Date().toLocaleDateString(), time: new Date().toLocaleTimeString() };
      newArr.push(searchObject);
      return { ...state,
        citySearch: newArr
      };
    }
    case 'GET_WEATHER_REJECTED': {
      return {
        ...state,
        citySearch: [...state.citySearch,
          {
            name: 'City Not Found Try Again!',
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
          }
        ]
      };
    }
    default: {
      return state;
    }
  }
}
