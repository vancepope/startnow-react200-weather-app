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
      <div id='cityInfo' className='card-body'>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <img id='img' src={ !weatherIcon ? 'img/sunny.png' : weatherIcon } alt={ city } />
            <h3 id='name' className='font-weight-bold'>{ name }</h3>
            <label id='latLong' htmlFor='latLong'>Lat/Long: </label>
            <div>
              <p id='latLongNum' className='text-success' name='latLong'>{lat && `${lat}, ${long}`}</p>
            </div>
            <hr id='line' className='my-4' />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 text-center font-weight-bold'>
            <label id='temp' htmlFor='temp'>Temperature (F)</label>
            <div>
              <p id='tempNum' className='text-success' name='temp'>{temp && `${temp}F` }</p>
            </div>
          </div>
          <div className='col-md-4 text-center font-weight-bold'>
            <label id='pressure' htmlFor='pressure'>Pressure</label>
            <div>
              <p id='pressureNum' className='text-success' name='pressure'>{ pressure }</p>
            </div>
          </div>
          <div className='col-md-4 text-center font-weight-bold'>
            <label id='humidity' htmlFor='humidity'>Humidity</label>
            <div>
              <p id='humidityNum' className='text-success' name='humidity'>{humidity && `${humidity}%` }</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4 text-center font-weight-bold'>
            <label id='lowestTemp' htmlFor='lowestTemp'>Lowest Temp (F)</label>
            <div>
              <p id='lowestTempNum' className='text-success' name='lowestTemp'>{lowestTemp && `${lowestTemp}F` }</p>
            </div>
          </div>
          <div className='col-md-4 text-center font-weight-bold'>
            <label id='highestTemp' htmlFor='highestTemp'>HighestTemp</label>
            <div>
              <p id='highestTempNum' className='text-success' name='highestTemp'>{highestTemp && `${highestTemp}F` }</p>
            </div>
          </div>
          <div className='col-md-4 text-center font-weight-bold'>
            <label id='windSpeed' htmlFor='windSpeed'>Wind Speed</label>
            <div>
              <p id='windSpeedNum' className='text-success' name='windSpeed'>{windSpeed && `${windSpeed}mph` }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

