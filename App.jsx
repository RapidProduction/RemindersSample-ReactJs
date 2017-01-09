import React from 'react';
import Title from './src/component/Title.jsx';
import AddButton from './src/component/AddButton.jsx';
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
                    <Title />
                    <AddButton onClick={this.onAddButtonClick}/>
                </div>
                <div>
                    <ItemList title="Write the essay" date="Today 12:00 PM" >
                    </ItemList>

                    <ItemList title="Test at Dotography" date="Today 12:00 PM" >
                    </ItemList>

                    <ItemList title="Write the essay" date="Today 12:00 PM" >
                    </ItemList>
                </div>
            </div>
        );
    }
}

export default App;