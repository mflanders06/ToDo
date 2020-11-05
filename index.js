
let taskArray = [];
let inputObject = new takeInput('Dummy', 'Filler', 2020-11-02);

function takeInput(taskName, taskDescription, taskDate){
    this.inputName = taskName;
    this.inputDescription = taskDescription;
    this.inputDate = taskDate;
}

function submit(taskName, taskDescription, taskDate) {

        inputObject = new takeInput(taskName, taskDescription, taskDate);
        taskArray.push(inputObject);
        console.log(inputObject);
        console.log(taskArray);

        forLoopTable()
//makeTable(taskArray);
}

function forLoopTable(){
    const b = document.getElementById('tableBodyFor')
    
    /*** The table needs to redraw each time a new element is added so we clear out the
     * tbody element each time something is submitted and forTableLoop is called
     */
    b.innerHTML = '' 

    for(let i = 0; i < taskArray.length; i++){
        let tr = document.createElement('tr')
        
        /*** The reason I am using i + 1 in the first <td> element is because arrays
         * are index 0 base and i want the ID to start at 1.
         */

        tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${taskArray[i].inputName}</td>
            <td>${taskArray[i].inputDescription}</td>
            <td>${taskArray[i].inputDate}</td>
        `

        b.appendChild(tr)
    }

};

/*** Nate's Notes:
 * You have mostly the right idea here and you are not very far off
 */
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