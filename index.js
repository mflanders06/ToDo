//const taskArray = [];


function submit(taskName, taskDescription, taskDate) {
    // As you can see i'm putting all the console.logs in the same object here
    // and since both the object and the properties name are the same i only have
    // to specify them once. 
    
    //console.log({ taskName, taskDescription, taskDate })

   let inputObject = new takeInput(taskName, taskDescription, taskDate);

    console.log(inputObject);
    //taskArray.push(inputObject);


    //console.log(taskArray);
}


function takeInput(taskName, taskDescription, taskDate){
    this.inputName = taskName;
    this.inputDescription = taskDescription;
    this.inputDate = taskDate;
}