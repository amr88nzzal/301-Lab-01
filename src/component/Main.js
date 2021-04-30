import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data.json';
import Form from './Form';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hornedAnimalsArr: Data,
    };
  }
  filteredDataFn = (ReceivedData) => {
    this.setState({ hornedAnimalsArr: ReceivedData });
    // console.log(x, '////', this.state.hornedAnimalsArr);
  }
  render() {
    return (
      <div id="x">
        <Form dataFromForm={this.filteredDataFn} />
        <br />
        <div>
          {this.state.hornedAnimalsArr.map(animal => {
            return <HornedBeast title={animal.title}
              description={animal.description}
              imageUrl={animal.image_url} />;
          })}
        </div>
      </div>
    );
  }
}

export default Main;
