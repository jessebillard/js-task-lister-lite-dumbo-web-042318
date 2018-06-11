const Task = function() {
    let id = 0
    class Task {
        //need constructor
        //takes description, adds id
        constructor(description) {
            this.description = description
            this.id = ++id
            this.constructor.prototype.all.push(this)
        }
    }
    Task.prototype.all = []
    
    return Task;
}();
