import React, { Component } from 'react';
//import './Card.css'; // Create this file for styling

class SPcard extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.imageUrl} alt={this.props.title} />
        <div className="card-content">
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default SPcard;
