import React from 'react';
import Square from './Square';
class Board extends React.Component {
    render() {
        return (
            <div>
                <h3>Board</h3>
                <Square squareNumber={'one'} />
                <Square squareNumber={'two'} />
                <Square squareNumber={'three'} />
                <Square squareNumber={'four'} />
                <Square squareNumber={'five'} />
                <Square squareNumber={'six'} />
            </div>
        )
    }
}

export default Board;