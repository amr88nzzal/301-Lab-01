import React from 'react';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0
        }
    }
    addLike = () => {
        this.setState({ like: this.state.like + 1 })
            ;
    }
    render() {
        return (
            <div >
                <Card style={{ width: '' }}>
                    <Card.Img  variant="top" src={this.props.imageUrl} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <Card.Text>
                        {this.props.horns}
                        </Card.Text>   
                        <p>❤️ ({this.state.like})</p>
                        <Button onClick={this.addLike}  variant="primary">Like 👍</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    };
}

export default HornedBeast;