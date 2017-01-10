import React from 'react';
import CheckBox from './CheckBox.jsx';
import Topic from './Topic.jsx';

class Item extends React.Component {
    constructor(props) {
        super(props);

       this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        if (this.props.onClick != undefined) {
            this.props.onClick(this.props.item);
        }

        //Amimate Clicking
    }

    render() {
        return (
            <div onClick={this.handleOnClick}>
                <table>
                    <tr>
                        <td>
                            <CheckBox />
                        </td>    
                        <td>
                            <Topic title={this.props.item.title} date={this.props.item.date} />
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Item;