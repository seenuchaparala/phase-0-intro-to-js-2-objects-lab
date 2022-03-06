// Write your solution in this file!
const employee = {
    name : 'Seenu',
    street : '18 Albert St'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
}

// let newEmployee = {};

// newEmployee = deleteFromEmployeeByKey(employee, 'name');

// console.log(newEmployee);

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}