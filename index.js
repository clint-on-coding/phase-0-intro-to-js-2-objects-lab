// Write your solution in this file!
// Step 1: Create the employee object
const employee = {
  name: "Jane Doe",
  streetAddress: "123 Main St",
};

// Step 2: Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

// Step 3: Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Step 4: Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Step 5: Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Export functions if needed for tests
module.exports = {
  employee,
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey,
};

