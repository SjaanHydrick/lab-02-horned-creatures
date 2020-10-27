import React, { Component } from 'react'
import Header from './Header.js';
import ImageList from './ImageList.js';
import images from './data.js';
import './App.css';

export default class App extends Component {

  state = {
    horns: 0,
    keyword: ''
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

    return (
      <div>
      <div>
        <select onChange={this.handleKeywordChange}>
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
      </div>

      <div>
        <select onChange={this.handleHornChange}>
          <option value=''>Filter by Horns</option>
          <option value='1'>One</option>
          <option value='2'>Two</option>
          <option value='3'>Three</option>
          <option value='100'>One Hundred</option>
        </select>
      </div>

      <div className="App">
        <Header />
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
