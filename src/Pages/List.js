import React, { Component } from 'react'
import Search from '../Components/SearchComp';
import searchData from '../Data/searchData';

export default class List extends Component {
  render() {
    return (
      <div className="text-center">
        <Search details={searchData} />
      </div>
    )
  }
}
