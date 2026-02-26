const locators = require('../pageObjects/dashboardPage');

class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async clickPIM() {
    await this.page.click(locators.pimMenu);

    
    await this.page.waitForSelector(locators.pimHeader);
  }
}

module.exports = { DashboardPage };
