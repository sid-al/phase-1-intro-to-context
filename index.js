// Your code here

/* 
  pseudocode
  create a  with an argument of 4 string array
    it return an object with keys as the argument 
    the properities of the keys are the are corresponding array string
*/

 let createEmployeeRecord = arrayarrayArrow => {
  return {
    firstName: arrayarrayArrow[0],
    familyName: arrayarrayArrow[1],
    title: arrayarrayArrow[2],
    payPerHour:arrayarrayArrow[3],
    timeInEvents:[],
    timeOutEvents:[]
  }
 }
//console.log(createEmployeeRecords([['sid','Ali','researcher',40],["bartholomew", "simpson", "scamp", 3]]));


/* 
pseudo 2
create a  that take in array inside an array as an argument
 returns array of objects
 convert nested array into an employee record use createEmployeeRecord  
 accumulate it into new array.
*/

 
let createEmployeeRecords = employeeData => {
  return employeeData.map( arrayArrow => createEmployeeRecord(arrayArrow))
}


let createTimeInEvent = (employee, dateStamp)=>{
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

let createTimeOutEvent = (employee, dateStamp)=>{
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

  let hoursWorkedOnDate = (employee, soughtedDate) => {
    let inEvent = employee.timeInEvents.find( e =>  e.date === soughtedDate)

    let outEvent = employee.timeOutEvents.find( e => e.date === soughtedDate)

    return (outEvent.hour - inEvent.hour) / 100
}

  let wagesEarnedOnDate = (employee, dateSought)=>{
    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}

  let allWagesFor = employee => {
    let eligibleDates = employee.timeInEvents.map( e => e.date)

    let payable = eligibleDates.reduce( (memo, d) => memo + wagesEarnedOnDate(employee, d), 0)

    return payable
}

  let findEmployeeByFirstName = (srcArray, firstName) => {
  return srcArray.find(rec => rec.firstName === firstName)
}

  let calculatePayroll = arrayOfEmployeeRecords => arrayOfEmployeeRecords.reduce((memo, rec) => memo + allWagesFor(rec), 0);
