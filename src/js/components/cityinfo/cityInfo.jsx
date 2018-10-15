import React, { Component } from 'react';
import City from '../city/index';

export default class CityInfo extends Component {
  render() {
    return (
      <div className='card border-info'>
        <div className='card-header bg-info text-light'>City Information</div>
        <City />
      </div>
    );
  }
}
