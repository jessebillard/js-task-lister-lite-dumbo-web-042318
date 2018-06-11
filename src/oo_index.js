

  const inputField = document.querySelector('#new-task-description');
  const submitBtn = document.querySelector('#add-task-button')
  // const list = document.querySelector('#tasks');
  // const gabagool = new Task('sugar and spice and everything nice')
  const taskList = new TaskList();
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e)
    taskList.addTask(inputField.value)
  })

  deleteBtn.addEventListener('click', (e) => {
    debugger
  })
  //event listener on inputField
    //--take this description info
  //submit event should:
    //--create new task instance
    //--add new task to taskList
    //--manipulate DOM by adding <li>task instance</li> to page


