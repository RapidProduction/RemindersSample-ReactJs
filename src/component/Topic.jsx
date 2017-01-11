import React from 'react';

require("../sass/component/topic.scss");

class Topic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="topic-component">
                <div className="topic-component item">
                    {this.props.title}
                </div>
                <div className="topic-component date">
                    {this.props.date}
                </div>
            </div>
        );
    }
}

export default Topic;