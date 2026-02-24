const { test, expect } = require('@playwright/test');
const { LoginActions } = require('../actions/LoginActions');
const { DashboardPage } = require('../pages/DashboardPage');
const { PIMActions } = require('../actions/PIMActions');
const testData = require('../testdata/employeeData.json');

test('Add Employee Test', async ({ page }) => {

  const login = new LoginActions(page);
  const dashboard = new DashboardPage(page);
  const pim = new PIMActions(page);

  // 1️⃣ Login
  await login.login(testData.username, testData.password);

  // Screenshot after login page load
  //await page.screenshot({ path: 'loginPage.png' });

  // 2️⃣ Click PIM and validate navigation
  await dashboard.clickPIM();
  await expect(page).toHaveURL(/pim/);

  // 3️⃣ Add Employee
  const employeeId = await pim.addEmployee(
    testData.firstName,
    testData.lastName
  );

  console.log("Stored Employee ID:", employeeId);

  // 4️⃣ Search & Validate Employee in table
  await pim.validateEmployee(employeeId);

  await expect(page.locator('.oxd-table-body')).toContainText(employeeId);

});