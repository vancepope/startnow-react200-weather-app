import React, { Component } from 'react';
import SearchHistoryList from '../searchHistoryList/index';

export default class SearchHistory extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='card border-info'>
        <div className='card-header bg-info text-light'>Search History</div>
        <SearchHistoryList />
      </div>
    );
  }
}
