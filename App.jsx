import React from 'react';
import Title from './src/component/Title.jsx';
import AddButton from './src/component/AddButton.jsx';
import Item from './src/component/Item.jsx';
import ItemList from './src/component/ItemList.jsx';
import EditLayout from './src/component/EditLayout.jsx';
import ActionBar from './src/component/ActionBar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            mode: "show",
            editMode: "new",
            clickedItem: undefined
        };

        this.registerHandles();
    }

    registerHandles() {
        this.manageEditOverlay = this.manageEditOverlay.bind(this);
        this.closeEditOverlay = this.closeEditOverlay.bind(this);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.handleItemListOnClick = this.handleItemListOnClick.bind(this);
        this.getDisplayItem = this.getDisplayItem.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.filterItemByComplete = this.filterItemByComplete.bind(this);
    }

    //Overlaying
    manageEditOverlay(showEnable, mode, item) {
        this.setState(prevState => ({
            mode: showEnable == true ? "edit" : "show",
            editMode: mode,
            clickedItem: item
        }));
    }

    closeEditOverlay() {
        this.setState(prevState => ({
            mode: "show",
            editMode: ""
        }));

        this.setState(this.state);
    }

    //Item Manipulating
    addItem(title, summary, date) {
        items.push({
            "itemId": items.length,
            "title": title,
            "summary": summary,
            "date": date,
            "isDone": false
        });

        this.setState(this.state);
    }

    removeItem(itemId) {
        var offset = this.findItemIndexById(itemId);

        if(offset != undefined) {
            items.splice(offset, 1);
            this.setState(this.state);
        }
    }

    updateItem(updatedItem) {
        var offset = this.findItemIndexById(updatedItem.itemId);
        items[offset] = updatedItem;
        this.setState(this.state);
    }

    //Filters
    handleFilter(mode) {
        this.setState({
            filter: mode
        })
    }

    handleItemListOnClick(clickedItem) {
        this.manageEditOverlay("edit", "edit", clickedItem);
    }

    //Private Logics
    findItemIndexById(itemId) {
        for(var i = 0; i < items.length; i++) {
            if(items[i].itemId == itemId) {
                return i;
            }
        }

        return undefined;
    }

    filterItemByComplete(complete) {
        var filteredItem = [];
        for(var i=0; i<items.length; i++) {
            if(items[i].isDone == complete) {
                filteredItem.push(items[i]);
            }
        }

        return filteredItem;
    }

    getDisplayItem() {
        var displayItems = [];
        if(this.state.filter == "all") {
            displayItems = items;
        }
        else if(this.state.filter == "active") {
            displayItems = this.filterItemByComplete(false);
        }
        else if(this.state.filter == "complete") {
            displayItems = this.filterItemByComplete(true);
        }
        else {
            displayItems = items;
        }

        return displayItems;
    }

    render() {
        var editLayoutEnable = this.mode == "edit" ? true : false;
        var displayItems = this.getDisplayItem();
        var filterOptions = [
            {
                name: "All",
                mode: "all",
                handler: this.handleFilter
            },
            {
                name: "Active",
                mode: "active",
                handler: this.handleFilter
            },
            {
                name: "Completed",
                mode: "complete",
                handler: this.handleFilter
            }
        ];

        return (
            <div>
                <div className="home-layout">
                    <div>
                        <tr>
                            <td>
                                <Title />
                            </td>
                            <td>
                                <AddButton onClick={this.manageEditOverlay}/>
                            </td>
                        </tr>
                        <tr>
                            <ActionBar title="Filter" actions={filterOptions} onAction={this.handleFilter}/>
                        </tr>
                    </div>
                    <div>
                        <ItemList items={displayItems} onClick={this.handleItemListOnClick} onCheck={this.updateItem}/>
                    </div>
                </div>
                <EditLayout 
                    showEnable={editLayoutEnable}
                    mode={this.state.editMode}
                    item={this.state.clickedItem}
                    onClose={this.closeEditOverlay}
                    onAddItem={this.addItem}
                    onUpdateItem={this.updateItem}
                    onRemoveItem={this.removeItem}
                />
            </div>
        );
    }
}

var items = [{
            "itemId": 0,
            "title": "Suspendisse potenti.",
            "summary": "Etiam faucibus cursus urna.",
            "date": "2016-02-15",
            "isDone": false
            }, {
            "itemId": 1,
            "title": "Vivamus metus arcu, adipiscing molestie.",
            "summary": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            "date": "2016-02-06",
            "isDone": false
            }, {
            "itemId": 2,
            "title": "Suspendisse ornare consequat lectus.",
            "summary": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            "date": "2016-07-04",
            "isDone": false
        }]

export default App;