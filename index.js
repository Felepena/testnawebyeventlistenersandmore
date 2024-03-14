document.getElementById('taskForm').addEventListener('submit', function(event) {

    let title = document.getElementById('taskTitle').value;
    let priority = document.getElementById('taskPriority').value;
    let date = document.getElementById('taskDate').value;
    let taskItem = document.createElement('li');
    taskItem.classList.add('task-list-item');
    taskItem.textContent = `${title} - Priorita: ${priority}, Datum: ${date}`;


    document.getElementById('taskList').appendChild(taskItem);


    document.getElementById('taskForm').reset();
});
