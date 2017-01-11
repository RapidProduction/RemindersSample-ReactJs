import React from 'react';

require("../sass/component/topic.scss");

class Topic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="topic">
                <div className="item">
                    {this.props.title}
                </div>
                <div className="date">
                    {this.props.date}
                </div>
            </div>
        );
    }
}

export default Topic;