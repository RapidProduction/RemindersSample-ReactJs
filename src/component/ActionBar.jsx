import React from 'react';

require('../sass/component/actionBar.scss');

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

    getTitleText() {
        if(this.props.title != undefined) {
            return <p className="actionbar-component title">{this.props.title}</p>;
        }
    }

    render() {
        var actionButtons = [];
        var titleText = this.getTitleText();

        for(var i=0; i<this.props.actions.length; i++) {
            let mode = this.props.actions[i].mode;
            let actionName = this.props.actions[i].name;
            actionButtons.push(
                <button onClick={() => this.handleClick(mode)}>
                    {actionName}
                </button>);
        }

        return (
            <div className="actionbar-component layout">
                <div className="actionbar-component container">
                    {titleText}
                    {actionButtons}
                </div>
            </div>
        );
    }
}

export default ActionBar;