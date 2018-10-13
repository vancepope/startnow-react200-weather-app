import { connect } from 'react-redux';
import SearchHistoryList from './searchHistoryList';

function mapStoreToProps(store) {
  return {
    city: store.search.city,
    citySearch: store.search.citySearch
  };
}

export default connect(mapStoreToProps)(SearchHistoryList);
