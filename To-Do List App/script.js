function addTasks() {
    if (document.querySelector("#title").value.length == 0) {
        alert("Please enter title of your task");
    }
    else {
        document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector("#title").value}
                </span>
                <button class="delete">
                    <img src="delete.png">
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle("completed");
            }
        }
        
        document.querySelector("#title").value = "";
    }
}