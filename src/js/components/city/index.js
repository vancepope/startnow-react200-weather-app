import { connect } from 'react-redux';
import City from './city';

function mapStoreToProps(store) {
  return {
    city: store.search.city,
    name: store.search.name,
    lat: store.search.lat,
    long: store.search.long,
    temp: store.search.temp,
    pressure: store.search.pressure,
    humidity: store.search.humidity,
    lowestTemp: store.search.lowestTemp,
    highestTemp: store.search.highestTemp,
    windSpeed: store.search.windSpeed,
    weatherIcon: store.search.weatherIcon,
    citySearch: store.search.citySearch,

  };
}

export default connect(mapStoreToProps)(City);
