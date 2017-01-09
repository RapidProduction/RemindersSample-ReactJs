import React from 'react';

class EditLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleAdd() {
        this.props.onAddItem("Title", "Summary", "Today");
    }

    handleRemove() {
        this.props.onRemoveItem(this.props.item.id);
    }

    handleClose() {
        this.props.onClose();
    }

    render() {
        var buttonAction = this.props.mode == "new" ? 
            <button onClick={this.handleAdd}>Add</button> :
            <button onClick={this.handleRemove}>Remove</button>;

        return (
            <div>
                <button onClick={this.handleClose}>x</button>
                <input type="text" name="Title" value="New Topic" />
                <input type="text" name="Summary" value="Summary..." />

                {buttonAction}
            </div>
        );
    }
}

export default EditLayout;