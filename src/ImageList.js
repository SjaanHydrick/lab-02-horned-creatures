import React, { Component } from 'react'
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {

    render() {
        const creatures = this.props.images;
        
        return (
                <div className="creatures">
                        <ImageItem
                        url={creatures.url}
                        title={creatures.title}
                        description={creatures.description}
                        horns={creatures.horns}
                        keyword={creatures.keyword} />
                </div>
        )
    }
}
