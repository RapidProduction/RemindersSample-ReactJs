import React from 'react';
import CheckBox from './CheckBox.jsx';
import Topic from './Topic.jsx';

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
            <div onClick={this.handleOnClick}>
                <table>
                    <tr>
                        <td>
                            <CheckBox isChecked={this.props.item.isDone} onCheck={this.handleOnCheck}/>
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