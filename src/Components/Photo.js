import React, {Component} from 'react'
import '../CSS/Photo.css'

class Photo extends Component {
  render() {
    return(
      <li className="Photo">
        <img className="Photo-img" src={`https://farm${this.props.farm}.staticflickr.com/${this.props.server}/${this.props.id}_${this.props.secret}.jpg`} alt={this.props.title} /> 
      </li>
    )
  }
}

export default Photo;