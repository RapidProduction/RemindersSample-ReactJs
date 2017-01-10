import React from 'react';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnCheck = this.handleOnCheck.bind(this);
    }

    handleOnCheck() {
        if (this.props.onCheck != undefined) {
            this.props.onCheck();
        }
    }

    render() {
        return (
            <input type="checkbox" onClick={this.handleOnCheck} checked={this.props.isChecked}/>
        );
    }
}

export default CheckBox;