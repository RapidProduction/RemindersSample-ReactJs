import React from 'react';

class Topic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.props.date}
                </div>
            </div>
        );
    }
}

export default Topic;