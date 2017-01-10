import React from 'react';

class ActionBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(value) {
        if(this.props.onAction != undefined) {
            this.props.onAction(value);
        }
    }

    render() {
        var actionButtons = [];
        for(var i=0; i<this.props.actions.length; i++) {
            let mode = this.props.actions[i].mode;
            actionButtons.push(
                <button onClick={() => this.handleClick(mode)}>
                    {this.props.actions[i].name}
                </button>);
        }

        return (
            <div>
                {this.props.title}
                {actionButtons}
            </div>
        );
    }
}

export default ActionBar;