import React from 'react';

require('../sass/layout/editLayout.scss');

class EditLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.registerHandles();
    }

    componentWillReceiveProps(nextProps) {
        this.state = {};
        if (nextProps.item != undefined) {
            this.state = {
                title: nextProps.item.title,
                summary: nextProps.item.summary,
                date: nextProps.item.date,
                titleChangedOnce: true,
                summaryChangedOnce: true
            }
        }
    }

    registerHandles() {
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.handleTitleClick = this.handleTitleClick.bind(this);
        this.handleSummaryClick = this.handleSummaryClick.bind(this);
    }

    //Handlers
    handleAdd() {
        var defaultTitle = "New Topic";
        var defaultSummary = "Please add some content..";
        var titleValue = this.getValidatedText(this.state.title, defaultTitle);
        var summaryValue = this.getValidatedText(this.state.summary, defaultSummary);
        var date = Date.now();

        if(titleValue != "" && summaryValue != "") {
            this.props.onAddItem(titleValue, summaryValue, this.getHumanReadableDate());
        }

        this.handleClose();
    }

    handleRemove() {
        this.props.onRemoveItem(this.props.item.itemId);
        this.handleClose();
    }

    handleUpdate() {
        var item = this.props.item;
        item.title = this.state.title;
        item.summary = this.state.summary;
        item.date = this.state.date;

        this.props.onUpdateItem(item);
        this.handleClose();
    }

    handleClose() {
        if (this.props.onClose != undefined) {
            this.props.onClose();
        }
        else {
            console.log("Cannot close dialog due to onClose event is undefined.");
        }
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

    // Private
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

    // Create Components
    createButtonAction() {
        return this.props.mode == "new" ? 
            <button className="edit-layout actionButton" onClick={this.handleAdd}>Done</button> :
            <div>
                <button className="edit-layout actionButton" onClick={this.handleRemove}>Remove</button>
                <button className="edit-layout actionButton" onClick={this.handleUpdate}>Done</button>
            </div>;
    }

    createTitleText() {
        var defaultTitle = "New Topic";
        return this.getValidatedText(this.state.title, defaultTitle, this.state.titleChangedOnce);
    }

    createSummaryText() {
        var defaultSummary = "Please add some content..";
        return this.getValidatedText(this.state.summary, defaultSummary, this.state.titleChangedOnce);
    }

    getTaskId() {
        if (this.props.item != undefined) {
            return this.props.item.itemId;
        }

        return "0";
    }

    getTitleBanner() {
        return this.props.mode == "new" ? 
            <p className="edit-layout banner">Creating One</p> : 
            <p className="edit-layout banner">On Editing</p>;
    }

    getDateText() {
        return this.state.item != undefined ? 
            <p className="edit-layout date">{this.state.item.date}</p> : 
            <p className="edit-layout date">{this.getHumanReadableDate()}</p>;
    }

    //Rendering
    render() {
        var buttonAction = this.createButtonAction();
        var titleValue = this.createTitleText();
        var summaryValue = this.createSummaryText();
        var dateText = this.getDateText();
        var banner = this.getTitleBanner();
        var taskId = this.getTaskId();
        var showModeClassName = this.props.showEnable == true ? "edit-layout layout show" : "edit-layout layout hide";

        return (
            <div className={showModeClassName}>
                <div className="edit-layout container">
                    <button className="edit-layout closeButton"
                        name="CloseButton" 
                        onClick={this.handleClose}>
                        X
                    </button>

                    {banner}
                    <p className="edit-layout taskNumber">Task #{taskId}</p>
                    <input className="title" type="text" name="Title" value={titleValue} onChange={this.handleTitleChange} onClick={this.handleTitleClick}/>
                    <br />
                    <textarea className="summary" type="text" cols="40" rows="5" name="Summary" value={summaryValue} onChange={this.handleSummaryChange} onClick={this.handleSummaryClick}/>
                    <br />
                    {dateText}
                    {buttonAction}
                </div>
            </div>
        );
    }
}

export default EditLayout;