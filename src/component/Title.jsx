import React from 'react';

require('../sass/layout/homeLayout.scss');

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="title">
                Reminders
            </div>
        );
    }
}

export default Title;