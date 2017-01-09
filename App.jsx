import React from 'react';
import Title from './src/component/Title.jsx';
import AddButton from './src/component/AddButton.jsx';
import Item from './src/component/Item.jsx';
import ItemList from './src/component/ItemList.jsx';
import EditLayout from './src/component/EditLayout.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            mode: "show",
            editMode: "new"
        };

        this.manageEditOverlay = this.manageEditOverlay.bind(this);
        this.closeEditOverlay = this.closeEditOverlay.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    //Delegates
    manageEditOverlay(showEnable, mode) {
        console.log("Opening Edit Overlay...");
        this.setState(prevState => ({
            mode: showEnable == true ? "edit" : "show",
            editMode: mode
        }));
    }

    closeEditOverlay() {
        console.log("Closing Edit Overlay...");
        this.setState(prevState => ({
            mode: "show",
            editMode: ""
        }));

        this.setState(this.state);
    }

    removeItem(itemId) {
        //Remove item from item list

        this.setState(this.state);
    }

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

    render() {
        var editLayoutEnable = this.mode == "edit" ? true : false;

        return (
            <div>
                <div>
                    <tr>
                        <td>
                            <Title />
                        </td>
                        <td>
                            <AddButton onClick={this.manageEditOverlay}/>
                        </td>
                    </tr>
                </div>
                <div>
                    <ItemList items={items} />
                </div>
                <EditLayout 
                    showEnable={editLayoutEnable} 
                    mode={this.state.editMode} 
                    onClose={this.closeEditOverlay}
                    onAddItem={this.addItem}
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
            "itemId": 0,
            "title": "Vivamus metus arcu, adipiscing molestie.",
            "summary": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
            "date": "2016-02-06",
            "isDone": false
            }, {
            "itemId": 0,
            "title": "Suspendisse ornare consequat lectus.",
            "summary": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
            "date": "2016-07-04",
            "isDone": false
        }]

export default App;