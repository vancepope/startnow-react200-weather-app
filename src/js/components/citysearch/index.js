import { connect } from 'react-redux';
import CitySearch from './citySearch';

function mapStoreToProps(store) {
  return {
    city: store.search.city,
    citySearch: store.search.citySearch
  };
}

export default connect(mapStoreToProps)(CitySearch);
