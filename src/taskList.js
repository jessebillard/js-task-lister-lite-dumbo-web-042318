const TaskList = function() {
    let id = 1;
    const list = document.querySelector('#tasks');
    class TaskList {
        //constructor to create list
            //sets id
        constructor() {
            this.id = id++;
        }    
        //addTask() - adds task instance to array...global storage type thing?
        
        addTask(description) {
            const task = new Task(description);
            task.taskListId = this.id;
            this.renderTasks();
            //should call another function...maybe 'renderTasks'
        }
        
        getTasks() {
            const tasks = Task.prototype.all.filter(task => 
                task.taskListId === this.id
            );
            return tasks;
        }
        
        createListItem(description) {
            const li = document.createElement('li');
            li.innerHTML = description;
            const deleteBtn = document.createElement('BUTTON');
            deleteBtn.className = "delete";
            deleteBtn.innerHTML = 'X';
            list.appendChild(li);
            li.appendChild(deleteBtn);
        }
        
        renderTasks() {
            list.innerHTML = '';
            this.getTasks().forEach(task => this.createListItem(task.description));
        }
        
    }
    return TaskList
}();
