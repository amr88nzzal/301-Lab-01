import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data.json'


class Main extends React.Component {
  constructor(props){
    super(props);
this.state = {
  hornedAnimalsArr:Data,
 
}
}
  render(){
    return (
      <div id="x">
        {this.state.hornedAnimalsArr.map(animal => { return <HornedBeast title={animal.title} description={animal.description} imageUrl={animal.image_url} /> })}
      </div>
    )
  }
}

export default Main;