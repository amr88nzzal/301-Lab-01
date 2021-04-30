import React from 'react';
import Form from 'react-bootstrap/Form';
// import Main from './Main';
import Data from './data.json';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hornedAnimalsArr: Data,
    };
  }
  sendData = () => {
    this.props.dataFromForm(this.state.hornedAnimalsArr);
  };

  setData = (event) => {
    if (Number(event.target.value) > 0) {
      const filteredData = Data.filter(element => { return (element.horns === Number(event.target.value)); });
      this.setState({ hornedAnimalsArr: filteredData });
    }
    else this.setState({ hornedAnimalsArr: Data });
    setTimeout(() => {
      this.sendData();
    }, 50);
  }

  render() {
    return (
      <div>
        <Form>
          <fieldset >
            <Form.Group>
              <Form.Label htmlFor="disabledSelect">Select Horns Number</Form.Label>
              <Form.Control onChange={this.setData} as="select" id="disabledSelect">
                <option value={0}>All</option>
                <option value={1}>1 Horn</option>
                <option value={2}>2 Horns</option>
                <option value={3}>3 Horns</option>
                <option value={100}>100 Horns</option>
              </Form.Control>
            </Form.Group>
          </fieldset>
        </Form>

      </div>

    );
  }
}
export default Forms;
