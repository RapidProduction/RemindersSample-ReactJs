
var key = 'reminders';

class Loader {

    startAutosaving(getItemHandler) {
        this.timerID = setInterval((function (self) {
            return function() {
                console.log("Saving Item...");
                self.saveItem(getItemHandler());
            }
        })(this), 1000);

        console.log("Start Autosaving mode.");
    }

    stopAutosaving() {
        clearTimeout(this.timerID);
        console.log("Autosaving is stopped.");
    }

    loadItem() {
        var items = JSON.parse(localStorage.getItem(key));
        if (items == undefined) {
            return [];
        }

        return items;
    }

    saveItem(items) {
        localStorage.setItem(key, JSON.stringify(items));
        console.log("Save Item complete.");
    }
}

export default Loader;