
function submit(taskName, taskDescription, taskDate) {

    if (typeof inputObject === 'undefined'){

        let inputObject = new takeInput(taskName, taskDescription, taskDate);   
        console.log(inputObject);        
    }

    else{

        inputObject.push(new takeInput(taskName, taskDescription, taskDate));
        console.log(inputObject);

    }



}


function takeInput(taskName, taskDescription, taskDate){
    this.inputName = taskName;
    this.inputDescription = taskDescription;
    this.inputDate = taskDate;
}