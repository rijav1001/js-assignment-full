function toDo() {
    var temp = document.createElement("p");
    temp.setAttribute("key", ind);
    ind += 1;
    temp.addEventListener("click", function() {
        this.remove();
    })
    var entry = document.getElementsByTagName("input")[0].value;
    var node = document.createTextNode(entry);
    var data = document.getElementsByClassName("todos")[0];
    temp.appendChild(node);
    data.appendChild(temp);
}

var ind = 0;
var added = document.getElementsByTagName("button")[0];
added.addEventListener('click', toDo);