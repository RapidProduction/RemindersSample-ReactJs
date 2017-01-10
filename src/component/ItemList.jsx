import React from 'react';
import Item from './Item.jsx';

class ItemList extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick(clickedItem) {
        if(this.props.onClick != undefined) {
            this.props.onClick(clickedItem);
        }
    }

    render() {
        var listItems = [];
        if (this.props.items != undefined) {
            for(var i=0; i<this.props.items.length; i++) {
                listItems.push(<Item item={this.props.items[i]} onClick={this.handleOnClick}/>)
            }
        }
        else {
            listItems = null; 
        }
        
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}

export default ItemList;