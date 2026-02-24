const { test, expect } = require('@playwright/test');
const { LoginActions } = require('../actions/LoginActions');
const { DashboardPage } = require('../pages/DashboardPage');
const { PIMActions } = require('../actions/PIMActions');
const testData = require('../testdata/employeeData.json');

test('Add Employee Test', async ({ page }) => {

  const login = new LoginActions(page);
  const dashboard = new DashboardPage(page);
  const pim = new PIMActions(page);


  await login.login(testData.username, testData.password);

  // Screenshot after login page load
  await page.screenshot({ path: 'loginPage.png' });

 
  await dashboard.clickPIM();
  await expect(page).toHaveURL(/pim/);


  const employeeId = await pim.addEmployee(
    testData.firstName,
    testData.lastName
  );

  console.log("Stored Employee ID:", employeeId);

  
  await pim.validateEmployee(employeeId);

  await expect(page.locator('.oxd-table-body')).toContainText(employeeId);

});
