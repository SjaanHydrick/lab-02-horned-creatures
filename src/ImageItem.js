import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div className={this.props.keyword}>
                <img className="creature-image" src={this.props.url} alt="creature" />
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <p>Number of Horns: {this.props.horns}</p>
            </div>
        )
    }
}
