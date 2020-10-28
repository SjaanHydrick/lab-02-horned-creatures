import React, { Component } from 'react'
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js';
import './App.css';

export default class App extends Component {

  state = {
    keyword: '',
    horns: 0,
    title: ''
  }

  
  handleKeywordChange = e => {
    this.setState({
      keyword: e.target.value
    });
  }
  
  handleHornChange = e => {
    this.setState({
      horns: e.target.value
    });
  }

  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  }

  render() {
    const filteredCreatures = images.filter((creature) => {
      if (!this.state.keyword) return true;
      if (creature.keyword === this.state.keyword) return true;
      return false
  })
    .filter((creature) => {
      if (!this.state.horns) return true;
      if (creature.horns === +this.state.horns) return true;
      return false
  })
    .filter((creature) => {
      if (!this.state.title) return true;
      if (creature.title === this.state.title) return true;
      return false
    })


    return (
      <div className="body">
        <Header />
        <div className="drop-downs">
          <select className="keyword" onChange={this.handleKeywordChange}>
            <option value=''>Filter by Keyword</option>
            <option value='narwhal'>Narwhal</option>
            <option value='rhino'>Rhino</option>
            <option value='unicorn'>Unicorn</option>
            <option value='unilego'>UniLego</option>
            <option value='triceratops'>Triceratops</option>
            <option value='markhor'>Markhor</option>
            <option value='mouflon'>Mouflon</option>
            <option value='addax'>Addax</option>
            <option value='chameleon'>Chameleon</option>
            <option value='lizard'> Lizard</option>
            <option value='dragon'>Dragon</option>
          </select>

          <select className="horns" onChange={this.handleHornChange}>
            <option value=''>Filter by Horns</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
            <option value='100'>One Hundred</option>
          </select>

          <select className="title" onChange={this.handleTitleChange}>
            <option value=''>Filter by Title</option>
            <option value='UniWhal'>UniWhal</option>
            <option value='Rhino Family'>Rhino Family</option>
            <option value='Unicorn Head'>Unicorn Head</option>
            <option value='UniLego'>UniLego</option>
            <option value='Basically a unicorn'>Basically A Unicorn</option>
            <option value='#truth'>#truth</option>
            <option value='Baby Rhino'>Baby Rhino</option>
            <option value='Cera'>Cera</option>
            <option value='Narwhal costume'>Narwhal Costume</option>
            <option value='Rhino costume'> Rhino Costume</option>
            <option value='Believe'>Believe</option>
            <option value='Markhor'>Markhor</option>
            <option value='Baby markhor'>Baby Markhor</option>
            <option value='Mouflon'>Mouflon</option>
            <option value='Addax'>Addax</option>
            <option value='Baby mouflon'>Baby mouflon</option>
            <option value="Happy Jackson's Chameleon">Happy Jackson's Chameleon</option>
            <option value='This one is very serious'>Serious Jackson's Chameleon</option>
            <option value='Horned Lizard'>Horned Lizard</option>
            <option value='Smaug'>Smaug</option>
          </select>
        </div>
        <div className="creature-display">
          {
            filteredCreatures.map((images, i) =>
          <ImageList
            key={i}
            images={images} />
            )}
        </div>
      </div>
    )
  }
}
