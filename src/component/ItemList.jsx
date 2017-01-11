import React from 'react';
import Item from './Item.jsx';

require('../sass/component/itemlist.scss');

class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnCheck = this.handleOnCheck.bind(this);
    }

    handleOnClick(clickedItem) {
        if(this.props.onClick != undefined) {
            this.props.onClick(clickedItem);
        }
    }

    handleOnCheck(checkedItem) {
        if(this.props.onCheck != undefined) {
            this.props.onCheck(checkedItem);
        }
    }

    render() {
        var listItems = [];
        if (this.props.items != undefined && this.props.items.length > 0) {
            for(var i=0; i<this.props.items.length; i++) {
                listItems.push(<Item item={this.props.items[i]} onClick={this.handleOnClick} onCheck={this.handleOnCheck}/>)
            }
        }
        else {
            listItems = null; 
        }
        
        return (
            <ul className="itemlist-component">
                {listItems}
            </ul>
        );
    }
}

export default ItemList;