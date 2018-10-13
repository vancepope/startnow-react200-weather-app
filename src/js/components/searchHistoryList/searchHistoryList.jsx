import React, { Component } from 'react';

export default class SearchHistoryList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { citySearch } = this.props;

    return (
      <div>
        <ul className='list-group full-width'>
            <label htmlFor='cityItem'>
              { citySearch &&
                    citySearch.map(listItem => (
                      <li className='list-group-item alert alert-default'>
                        <span>{ listItem.name }</span>
                        <p className='text-right'>{ listItem.date } <br /> { listItem.time }</p>
                      </li>
                    )) }
            </label>
        </ul>
      </div>
    );
  }
}
