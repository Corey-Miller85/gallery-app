import React, {Component} from 'react'
import '../CSS/NavBar.css'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="NavBar">
        <h1>Flikr Search App</h1>
        <ul>
          <li><a>List item 1</a></li>
          <li><a>List item 2</a></li>
        </ul>
      </div>
    )
  }

}

export default NavBar;