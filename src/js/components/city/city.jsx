import React, { Component } from 'react';

export default class City extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
            city,
            name,
            lat,
            long,
            temp,
            pressure,
            humidity,
            lowestTemp,
            highestTemp,
            weatherIcon,
            windSpeed } = this.props;
    return (
      <div className='card-body'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <img src={ weatherIcon } alt={ city } />
            <h3 className='font-weight-bold'>{ name }</h3>
            <label htmlFor='latLong'>Lat/Long: </label>
            <div>
              <p className='text-success' name='latLong'>{lat && `${lat}, ${long}`}</p>
            </div>
            <hr className='my-4' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 text-center font-weight-bold'>
            <label htmlFor='temp'>Temperature (F)</label>
            <div>
              <p className='text-success' name='temp'>{temp && `${temp}F` }</p>
            </div>
          </div>
          <div className='col-md-4 text-center font-weight-bold'>
            <label htmlFor='pressure'>Pressure</label>
            <div>
              <p className='text-success' name='pressure'>{ pressure }</p>
            </div>
          </div>
          <div className='col-md-4 text-center font-weight-bold'>
            <label htmlFor='humidity'>Humidity</label>
            <div>
              <p className='text-success' name='humidity'>{humidity && `${humidity}%` }</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 text-center font-weight-bold'>
            <label htmlFor='lowestTemp'>Lowest Temp (F)</label>
            <div>
              <p className='text-success' name='lowestTemp'>{lowestTemp && `${lowestTemp}F` }</p>
            </div>
          </div>
          <div className='col-md-4 text-center font-weight-bold'>
            <label htmlFor='highestTemp'>HighestTemp</label>
            <div>
              <p className='text-success' name='highestTemp'>{highestTemp && `${highestTemp}F` }</p>
            </div>
          </div>
          <div className='col-md-4 text-center font-weight-bold'>
            <label htmlFor='windSpeed'>Wind Speed</label>
            <div>
              <p className='text-success' name='windSpeed'>{windSpeed && `${windSpeed}mph` }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

