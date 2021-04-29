import React from 'react';
import Card from 'react-bootstrap/Card';
import SelectedBeast from './SelectedBeast';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      show: false
    };
  }
  showFn = () => {
    this.setState({ like: this.state.like + 1 });
    this.setState({ show: true });
  }
  closeFn = () => {
    this.setState({ show: false });
  }
  render() {
    return (
      <div >
        <Card style={{ width: '18elm' }}>
          <Card.Img onClick={this.showFn} variant="top" src={this.props.imageUrl} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              {this.props.horns}
            </Card.Text>
            <p>❤️ ({this.state.like})</p>
          </Card.Body>
        </Card>
        <SelectedBeast show={this.state.show}
          close={this.closeFn}
          imgUrl={this.props.imageUrl}
          title={this.props.title}
          Description={this.props.description} />
      </div>
    );
  }
}
export default HornedBeast;
