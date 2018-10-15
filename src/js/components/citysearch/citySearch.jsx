import React, { Component } from 'react';
import { getWeather, updateInput, addNewItem } from './citySearchActions';

export default class CitySearch extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateInput(value));
  }
  handleClick(event) {
    const { dispatch } = this.props;
    dispatch(getWeather(event.target.value));
  }
  handleSubmit(event) {
    event.preventDefault();
    const { dispatch, city } = this.props;
    dispatch(getWeather(city));
  }
  render() {
    const { city } = this.props;
    return (
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='btn-group' role='group' aria-label='Basic example'>
              <button id='sandiego' name='sandiego' value='San Diego' onClick={ this.handleClick } type='button' className='btn btn-primary'>San Diego</button>
              <button id='newyork' name='newyork' value='New York' onClick={ this.handleClick } type='button' className='btn btn-primary'>New York</button>
              <button id='washingtondc' name='washingtondc' value='Washington DC.' onClick={ this.handleClick } type='button' className='btn btn-primary'>Washington D.C.</button>
              <button id='london' name='london' value='London' onClick={ this.handleClick } type='button' className='btn btn-primary'>London</button>
              <button id='tokyo' name='tokyo' value='Tokyo' onClick={ this.handleClick } type='button' className='btn btn-primary'>Tokyo</button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <form className='form-inline' onSubmit={ this.handleSubmit }>
              <input id='citySearchInput' name='city' onChange={ this.handleChange } className='form-control col-11` form-control-sm mr-3 w-75' type='text' placeholder='Search...' aria-label='Search' />
              <button id='citySearchButton' className='btn btn-md btn-primary fa fa-search col-1 col-offset-11' aria-hidden='true' type='submit' />
            </form>
            <br />
          </div>
        </div>
      </div>
    );
  }
}