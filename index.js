
let taskArray = [];
let inputObject = new takeInput('Dummy', 'Filler', 2020-11-02);

function submit(taskName, taskDescription, taskDate) {

        inputObject = new takeInput(taskName, taskDescription, taskDate);
        taskArray.push(inputObject);
        console.log(inputObject);
        console.log(taskArray);
//makeTable(taskArray);
}


function takeInput(taskName, taskDescription, taskDate){
    this.inputName = taskName;
    this.inputDescription = taskDescription;
    this.inputDate = taskDate;
}

/*
function makeTable(array) {
    var table = document.createElement('table');
    for (var i = 0; i < array.length; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < array[i].length; j++) {
            var cell = document.createElement('td');
            cell.textContent = array[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
}
*/