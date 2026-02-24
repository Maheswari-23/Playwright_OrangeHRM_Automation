const { PIMPage } = require('../pages/PIMPage');

class PIMActions {
  constructor(page) {
    this.pimPage = new PIMPage(page);
  }

  async addEmployee(firstName, lastName) {
    await this.pimPage.clickAddEmployee();

    await this.pimPage.firstName.fill(firstName);
    await this.pimPage.lastName.fill(lastName);

    const empId = await this.pimPage.getEmployeeId();

    await Promise.all([
      this.pimPage.page.waitForLoadState('networkidle'),
      this.pimPage.saveButton.click()
    ]);

    return empId;
  }

  async validateEmployee(empId) {
    await this.pimPage.searchEmployeeById(empId);
  }
}

module.exports = { PIMActions };