import React, { Component } from 'react';
import CitySearch from './components/citysearch/index';
import CityInfo from './components/cityinfo/index';
import SearchHistory from './components/searchHistory/index';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 jumbotron'>
            <h1>Origin Weather Application</h1>
            <p>Always know if you'll need an umbrella!</p>
            <hr className='my-4' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <CitySearch />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6'>
            <CityInfo />
          </div>
          <div className='col-md-6'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
