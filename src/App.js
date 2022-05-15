import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customer = {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/any',
  'name' : '정희윤',
  'birthday' : '970403',
  'gender' : '여자',
  'job' : '취준생'
}

class App extends Component {
  render() {
    return (
      <Customer
        id={customer.id}
        image={customer.image}
        name={customer.name}
        birthday={customer.birthday}
        gender={customer.gender}
        job={customer.job}
      />
    );
  }
}

export default App;
