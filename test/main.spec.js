import React from 'react';
import { render } from 'enzyme';
import server from '../server/server';
import CitySearch from '../src/js/components/citysearch/citySearch';
import CityInfo from '../src/js/components/cityinfo/cityInfo';
import City from '../src/js/components/city/city';

/* global define, it, describe, beforeEach, docu
ment */
const express = require('express');
const path = require('path');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;
let wrapper;

Enzyme.configure({adapter: new Adapter()});

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(3000);

const url = 'http://localhost:3000';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});

describe('<CitySearch />', function() {
  this.timeout(10000);
  beforeEach(() => {
    wrapper = render(<CitySearch />);
  });

  it('Should have a city search input', () => {
    const input = wrapper.find('input');
    expect(input[0].attribs.id).to.contain('citySearchInput');
  });
  it('Should have a san diego button', () => {
    const buttons = wrapper.find('button');
    expect(buttons[0].attribs.id).to.contain('sandiego');
  });
  it('Should have a new york button', () => {
    const buttons = wrapper.find('button');
    expect(buttons[1].attribs.id).to.contain('newyork');
  });
  it('Should have a washington dc button', () => {
    const buttons = wrapper.find('button');
    expect(buttons[2].attribs.id).to.contain('washingtondc');
  });
  it('Should have a london button', () => {
    const buttons = wrapper.find('button');
    expect(buttons[3].attribs.id).to.contain('london');
  });
  it('Should have a tokyo button', () => {
    const buttons = wrapper.find('button');
    expect(buttons[4].attribs.id).to.contain('tokyo');
  });
  it('Should have a city search button', () => {
    const buttons = wrapper.find('button');
    expect(buttons[5].attribs.id).to.contain('citySearchButton');
  });
});

describe('Integration', function() {
  this.timeout(15000);
  const url = 'http://localhost:8888';
  let app;

  before(() => {
    app = server.listen(8888);
  });
  
  beforeEach(() => {
    nightmare = new Nightmare({
      show: true,
    });
  });
  
  after(() => {
    app.close();
  });
  
  it('Should display city name from api', (done) => {
    nightmare
      .goto(url)
      .type('#citySearchInput', 'San Diego')
      .click('#citySearchButton')
      .wait(2000)
      .evaluate(() => document.getElementById('name').innerText)
      .end()
      .then((text) => {
        expect(text).to.contain('San Diego');
        done();
      })
      .catch(err => console.log(err));
  });
});

describe('<City />', function() {
  this.timeout(10000);
  beforeEach(() => {
    wrapper = render(<City />);
  });
  it('Should have an image', () => {
    const img = wrapper.find('img');
    expect(img[0].attribs.id).to.contain('img');
  });
  it('Should have an h3', () => {
    const headers = wrapper.find('h3');
    expect(headers[0].attribs.id).to.contain('name');
  });
  it('Should have a label for latlong', () => {
    const labels = wrapper.find('label');
    expect(labels[0].attribs.id).to.contain('latLong');
  });
  it('Should have a label for temp', () => {
    const labels = wrapper.find('label');
    expect(labels[1].attribs.id).to.contain('temp');
  });
  it('Should have a label for pressure', () => {
    const labels = wrapper.find('label');
    expect(labels[2].attribs.id).to.contain('pressure');
  });
  it('Should have a label for humidity', () => {
    const labels = wrapper.find('label');
    expect(labels[3].attribs.id).to.contain('humidity');
  });
  it('Should have a label for lowestTemp', () => {
    const labels = wrapper.find('label');
    expect(labels[4].attribs.id).to.contain('lowestTemp');
  });
  it('Should have a label for highestTemp', () => {
    const labels = wrapper.find('label');
    expect(labels[5].attribs.id).to.contain('highestTemp');
  });
  it('Should have a label for windSpeed', () => {
    const labels = wrapper.find('label');
    expect(labels[6].attribs.id).to.contain('windSpeed');
  });
  it('Should have a p for latLongNum', () => {
    const paragraphs = wrapper.find('p');
    expect(paragraphs[0].attribs.id).to.contain('latLongNum');
  });
  it('Should have a p for tempNum', () => {
    const paragraphs = wrapper.find('p');
    expect(paragraphs[1].attribs.id).to.contain('tempNum');
  });
  it('Should have a p for pressureNum', () => {
    const paragraphs = wrapper.find('p');
    expect(paragraphs[2].attribs.id).to.contain('pressureNum');
  });
  it('Should have a p for humidityNum', () => {
    const paragraphs = wrapper.find('p');
    expect(paragraphs[3].attribs.id).to.contain('humidityNum');
  });
  it('Should have a p for lowestTempNum', () => {
    const paragraphs = wrapper.find('p');
    expect(paragraphs[4].attribs.id).to.contain('lowestTempNum');
  });
  it('Should have a p for highestTempNum', () => {
    const paragraphs = wrapper.find('p');
    expect(paragraphs[5].attribs.id).to.contain('highestTempNum');
  });
  it('Should have a p for windSpeedNum', () => {
    const paragraphs = wrapper.find('p');
    expect(paragraphs[6].attribs.id).to.contain('windSpeed');
  });
});
