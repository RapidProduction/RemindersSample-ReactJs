import React from 'react';
import CheckBox from './CheckBox.jsx';
import Topic from './Topic.jsx';

require('../sass/component/item.scss');

class Item extends React.Component {
    constructor(props) {
        super(props);

       this.handleOnClick = this.handleOnClick.bind(this);
       this.handleOnCheck = this.handleOnCheck.bind(this);
    }

    handleOnClick() {
        if (this.props.onClick != undefined) {
            this.props.onClick(this.props.item);
        }

        //Amimate Clicking
    }

    handleOnCheck() {
        if (this.props.onCheck != undefined) {
            var updatedItem = this.props.item;
            updatedItem.isDone = !updatedItem.isDone;
            this.props.onCheck(updatedItem);
        }
    }

    render() {
        return (
            <div className="item-component" onClick={this.handleOnClick}>
                <table className="item-component container">
                    <tr>
                        <td>
                            <CheckBox isChecked={this.props.item.isDone} onCheck={this.handleOnCheck}/>
                        </td>    
                        <td>
                            <div className="item-component topic">
                                <Topic title={this.props.item.title} date={this.props.item.date} />
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Item;