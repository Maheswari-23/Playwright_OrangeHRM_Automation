const locators = require('../pageObjects/pimPage');

class PIMPage {
  constructor(page) {
    this.page = page;
  }

  async addEmployee(firstName, lastName) {
    await this.page.click(locators.addEmployeeButton);
    await this.page.fill(locators.firstNameInput, firstName);
    await this.page.fill(locators.lastNameInput, lastName);

    const empId = await this.page.inputValue(locators.employeeIdInput);

    await Promise.all([
      this.page.waitForLoadState('networkidle'),
      this.page.click(locators.saveButton)
    ]);

    return empId;
  }

  async searchEmployee(empId) {
    await this.page.click(locators.employeeListMenu);

    // wait for search field
    await this.page.waitForSelector(locators.searchEmployeeIdInput);

    await this.page.fill(locators.searchEmployeeIdInput, empId);

    await Promise.all([
      this.page.waitForLoadState('networkidle'),
      this.page.click(locators.searchButton)
    ]);

    // wait for results to load
    await this.page.waitForSelector(locators.employeeTable);
  }

  getEmployeeRow(empId) {
    return this.page.locator(`text=${empId}`);
  }
}

module.exports = { PIMPage };