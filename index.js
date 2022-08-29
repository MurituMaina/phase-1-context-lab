// // // // // /* Your Code Here */
let employeeObj;
let createEmployeeRecord = function (emp){
 employeeObj=
 {
firstName:emp[0], 
familyName:emp[1], 
title:emp[2], 
payPerHour:emp[3],
timeInEvents:[],
timeOutEvents:[]
}

return employeeObj;
}

function createEmployeeRecords(userArray){
return userArray.map((emp) => createEmployeeRecord(emp))
}

function createTimeInEvent(day){
// the updated Record
let [date,hour] =day.split(' ');
this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour,10),
    date, 
    })
return this;
    }

function createTimeOutEvent (dateStamp){
let [date, hour] = dateStamp.split(' ')
this.timeOutEvents.push({
type: "TimeOut",
hour: parseInt(hour, 10),
date,
})
return this;
}

function hoursWorkedOnDate (dateWorked){
let dayIn = this.timeInEvents.find((e)=> {
return e.date === dateWorked
})
let dayOut = this.timeOutEvents.find((e) => 
{return e.date === dateWorked})
let hours =  (dayOut.hour - dayIn.hour)/100;
return  hours;
}

function wagesEarnedOnDate(dateWorked){
let employeeWage;
let hours = hoursWorkedOnDate.call(this, dateWorked);
employeeWage = hours * this.payPerHour;
console.log(employeeWage)
return employeeWage;

}

function findEmployeeByFirstName (employeeRecordArr,firstName){
return employeeRecordArr.find((employee)=> {
if(employee.firstName === firstName){
return employee;
};
})
}

const calculatePayroll =function (userArray){
    return userArray.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}

// /*
//  We're giving you this function. Take a look at it, you might see some usage
//  that's new and different. That's because we're avoiding a well-known, but
//  sneaky bug that we'll cover in the next few lessons!

//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
console.log(payable)
   return payable
}