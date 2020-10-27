let taskArray = [];
let inputObject = new Object();

function submit(taskName, taskDescription, taskDate) {
    // As you can see i'm putting all the console.logs in the same object here
    // and since both the object and the properties name are the same i only have
    // to specify them once. 
    
    //console.log({ taskName, taskDescription, taskDate })

    inputObject.ItemName = taskName;
    inputObject.ItemDescription = taskDescription;
    inputObject.ItemDate = taskDate;

    //console.log(inputObject);
    taskArray.push(inputObject);

    console.log(taskArray);
}
