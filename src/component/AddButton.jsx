import React from 'react';

class AddButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(true, "new");
    }

    render() {
        return (
            <button className="addButton" onClick={this.handleClick}>
                +
            </button>
        );
    }
}

export default AddButton;