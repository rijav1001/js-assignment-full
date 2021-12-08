function deleteTask() {
    const temp = document.getElementsByTagName("ul")[0];
    if(temp) {
        temp.innerHTML = '';
    }

}

async function toDo(){

    const getList = await fetch('https://jsonplaceholder.typicode.com/todos');
    var data = await getList.json();

    deleteTask()
    var all = document.getElementById("all").checked
    var complete = document.getElementById("completed").checked
    var rendered = document.querySelector(".render-list")

    if(all === true) {
        for(var i = 0; i < data.length; i++) {
            const taskAdded = document.createElement("li")
            var task = document.createTextNode(data[i]["title"])
            taskAdded.appendChild(task)
            rendered.appendChild(taskAdded)
            if(data[i]["completed"] === true) {
                taskAdded.style["background-color"] = "red";
            }
            else {
                taskAdded.style["background-color"] = "white";
            }


        }
    }
    else if(complete === true) {

        for(var i = 0; i < data.length; i++) {
            if(data[i]["completed"] === true) {
            const taskAdded = document.createElement("li")
            var task = document.createTextNode(data[i]["title"])
            taskAdded.appendChild(task)
            rendered.appendChild(taskAdded)
            if(data[i]["completed"] === true) {
                taskAdded.style["background-color"] = "red";
            }
            else {
                taskAdded.style["background-color"] = "white";
            }
        }
    }


    }
    else {
        for(var i = 0; i < data.length; i++) {
            if(data[i]["completed"]==false){
            const taskAdded = document.createElement("li")
            var task = document.createTextNode(data[i]["title"])
            taskAdded.appendChild(task)
            rendered.appendChild(taskAdded)
            if(data[i]["completed"] === true) {
                taskAdded.style["background-color"] = "red";
            }
            else {
                taskAdded.style["background-color"] = "white";
            }
        }


    }
}
}

toDo()