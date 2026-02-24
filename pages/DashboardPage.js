class DashboardPage {
  constructor(page) {
    this.page = page;
    this.pimMenu = page.locator('//span[text()="PIM"]');
  }

  async clickPIM() {
    await this.pimMenu.click();
  }
}

module.exports = { DashboardPage };