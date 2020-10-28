import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className={this.props.keyword}>
                <img className="creature-image" src={this.props.url} alt={this.props.description} />
                <h3>{this.props.title}</h3>
                <p className="d-text">{this.props.description}</p>
                <p className="h-text">Number of Horns: {this.props.horns}</p>
            </div>
        )
    }
}
