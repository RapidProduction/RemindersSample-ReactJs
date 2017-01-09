import React from 'react';
import Item from './Item.jsx';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var listItems = [];
        if (this.props.items != undefined) {
            for(var i=0; i<this.props.items.length; i++) {
                let item = this.props.items[i];
                listItems.push(<Item title={item.title} date={item.date} />)
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