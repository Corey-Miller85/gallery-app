import React, { Component } from 'react'
import '../CSS/SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      something: null
    }
  }

  handleSearch(evt)  {
    evt.preventDefault();
    // TODO: Make this work right
    console.log("Clicked on Search")
  }

  render() {
    return (
      <div>
        <form className="SearchBar">
          <input className="SearchBar-input" type="text" placeholder="Search images..."/>
          <button className="SearchBar-button" type="submit" onClick={this.handleSearch}></button>
        </form>
      </div>
    )
  }
}

export default SearchBar