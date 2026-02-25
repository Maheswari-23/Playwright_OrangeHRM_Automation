const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageActions/loginPage');
const { DashboardPage } = require('../pageActions/dashboardPage');
const { PIMPage } = require('../pageActions/pimPage');
const testData = require('../testdata/employeeData.json');

test('Add Employee Test', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const pimPage = new PIMPage(page);

  await loginPage.openApp();
  await loginPage.login(testData.username, testData.password);

  await dashboardPage.clickPIM();
  await expect(page).toHaveURL(/pim/);

  const employeeId = await pimPage.addEmployee(
    testData.firstName,
    testData.lastName
  );

  console.log("Stored Employee ID:", employeeId);

  await pimPage.searchEmployee(employeeId);

  await expect(pimPage.getEmployeeRow(employeeId)).toBeVisible();
});
