module.exports = {
  addEmployeeButton: '//a[text()="Add Employee"]',
  firstNameInput: 'input[name="firstName"]',
  lastNameInput: 'input[name="lastName"]',
  employeeIdInput: '(//input[@class="oxd-input oxd-input--active"])[2]',
  saveButton: 'button[type="submit"]',

  employeeListMenu: '//a[text()="Employee List"]',
  searchEmployeeIdInput:
  '//label[text()="Employee Id"]/../following-sibling::div//input',
  searchButton: '//button[@type="submit"]',
  employeeTable: '.oxd-table-body'
};