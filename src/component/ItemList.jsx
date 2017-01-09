import React from 'react';
import CheckBox from 'CheckBox.jsx';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CheckBox />
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

export default ItemList;