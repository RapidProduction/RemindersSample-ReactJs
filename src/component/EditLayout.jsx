import React from 'react';

class EditLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        if(this.props.item != undefined) {
            this.state = {
                title: this.props.item.title, 
                summary: this.props.item.summary,
                date: this.props.item.date,
                titleChangedOnce: false,
                summaryChangedOnce: false
            }
        }

        this.registerHandles();
    }

    registerHandles() {
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.handleSummaryClick = this.handleSummaryClick.bind(this);
    }

    handleAdd() {
        var titleValue = this.getValidatedText(this.state.title, "New Topic");
        var summaryValue = this.getValidatedText(this.state.summary, "Please add some things");
        var date = Date.now();

        if(titleValue != "" && summaryValue != "") {
            this.props.onAddItem(titleValue, summaryValue, this.getHumanReadableDate());
        }
    }

    handleRemove() {
        this.props.onRemoveItem(this.props.item.id);
    }

    handleClose() {
        this.props.onClose();
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleSummaryChange(event) {
        this.setState({summary: event.target.value});
    }

    handleTitleClick() {
        if(!this.state.titleChangedOnce) {
            this.setState({title: ""});
        }

        if(this.state.title != "") {
            this.setState({titleChangedOnce: true});
        }
    }

    handleSummaryClick() {
        if(!this.state.summaryChangedOnce) {
            this.setState({summary: ""});
        }

        if(!this.state.summary != "") {
            this.setState({summaryChangedOnce: true});
        }
    }

    getValidatedText(text, defaultText, isChangeOnce) {
        if((text == undefined || text == null || text == "") && !isChangeOnce) {
            return defaultText;
        }
        
        return text;
    }

    getHumanReadableDate() {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        var d = new Date();
        var day = days[d.getDay()];
        var hr = d.getHours();
        var min = d.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        var ampm = hr < 12 ? "AM" : "PM";
        var date = d.getDate();
        var month = months[d.getMonth()];
        var year = d.getFullYear();
        var x = document.getElementById("time");
        return day + " " + hr + ":" + min + " " + ampm + " " + date + " " + month + " " + year;
    }

    render() {
        var buttonAction = this.props.mode == "new" ? 
            <button onClick={this.handleAdd}>Done</button> :
            <button onClick={this.handleRemove}>Remove</button>;

        var titleValue = this.getValidatedText(this.state.title, "New Topic", this.state.titleChangedOnce);
        var summaryValue = this.getValidatedText(this.state.summary, "Please add some things", this.state.summaryChangedOnce);

        return (
            <div>
                <button onClick={this.handleClose}>x</button>
                <br />
                <input type="text" name="Title" value={titleValue} onChange={this.handleTitleChange} onClick={this.handleTitleClick}/>
                <br />
                <input type="text" name="Summary" value={summaryValue} onChange={this.handleSummaryChange} onClick={this.handleSummaryClick}/>
                <br />
                {buttonAction}
            </div>
        );
    }
}

export default EditLayout;