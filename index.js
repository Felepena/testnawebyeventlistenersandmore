function addTask() {
    let title = document.getElementById('taskTitle').value;
    let priority = document.getElementById("howhardcanitbe").value;


    let list = document.getElementById('taskList');
    let date = document.getElementById('date');
    let li = document.createElement('li');
    li.className = 'task-item ' + " " + " ";
    li.innerText = title + " - " + priority.charAt(0).toUpperCase() + priority.slice(1);

    list.appendChild(li);
    

    document.getElementById('taskTitle').value = '';
}