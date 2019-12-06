import React, { Component } from 'react'
import '../CSS/SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch(evt)  {
    evt.preventDefault();
    // TODO: Make this work right
  }

  handleChange(evt) {
    const target = evt.target.value;
    this.setState({
      searchValue: target
    })
  }

  render() {
    return (
      <div>
        <form className="SearchBar">
          <input className="SearchBar-input" type="text" placeholder="Search images..." value={this.state.searchValue} onChange={this.handleChange}/>
          <button className="SearchBar-button" type="submit" onClick={this.handleSearch}></button>
        </form>
      </div>
    )
  }
}

export default SearchBar