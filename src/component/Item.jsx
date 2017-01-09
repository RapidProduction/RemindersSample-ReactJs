import React from 'react';
import CheckBox from './CheckBox.jsx';
import Topic from './Topic.jsx';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            <CheckBox />
                        </td>    
                        <td>
                            <Topic title={this.props.title} date={this.props.date} />
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Item;