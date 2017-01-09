import React from 'react';
import Title from './src/component/Title.jsx';
import AddButton from './src/component/AddButton.jsx';
import Item from './src/component/Item.jsx';
import ItemList from './src/component/ItemList.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            mode: "show"
        };

        this.onAddButtonClick = this.onAddButtonClick.bind(this);
    }

    openEditOverlay() {
        console.log("Opening Edit Overlay...");
        this.setState(prevState => ({
            mode: "edit"
        }));
    }

    onAddButtonClick() {
        this.openEditOverlay();
    }

    render() {
        return (
            <div>
                <div>
                    <tr>
                        <td>
                            <Title />
                        </td>
                        <td>
                            <AddButton onClick={this.onAddButtonClick}/>
                        </td>
                    </tr>
                </div>
                <div>
                    <ItemList items={items} />
                </div>
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
            }, {
            "itemId": 0,
            "title": "Ut at dolor quis odio consequat varius.",
            "summary": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
            "date": "2016-05-25",
            "isDone": false
            }, {
            "itemId": 0,
            "title": "Praesent blandit. Nam nulla.",
            "summary": "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
            "date": "2016-06-20",
            "isDone": true
        }]

export default App;