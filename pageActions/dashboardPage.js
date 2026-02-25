const locators = require('../pageObjects/dashboardPage');

class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async clickPIM() {
    await this.page.click(locators.pimMenu);

    // Wait for PIM page content to appear
    await this.page.waitForSelector('//h6[text()="PIM"]');
  }
}

module.exports = { DashboardPage };