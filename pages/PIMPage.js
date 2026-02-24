class PIMPage {
  constructor(page) {
    this.page = page;

    // Add Employee Page
    this.addEmployeeButton = page.locator('//a[text()="Add Employee"]');
    this.firstName = page.locator('input[name="firstName"]');
    this.lastName = page.locator('input[name="lastName"]');
    this.employeeId = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
    this.saveButton = page.locator('button[type="submit"]');

    // Employee List Page
    this.employeeListMenu = page.locator('//a[text()="Employee List"]');
    this.searchEmployeeId = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
    this.searchButton = page.locator('//button[@type="submit"]');
    this.employeeTable = page.locator('.oxd-table-body');
  }

  async clickAddEmployee() {
    await this.addEmployeeButton.click();
  }

  async getEmployeeId() {
    return await this.employeeId.inputValue();
  }

  async searchEmployeeById(empId) {
    await this.employeeListMenu.click();
    await this.searchEmployeeId.fill(empId);
    await this.searchButton.click();
  }
}

module.exports = { PIMPage };