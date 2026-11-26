class NavigationScreen {
  get menuNavigationTab() {
    return $('android=new UiSelector().text("Menu")');
  }

  get loginItem() {
    return $('android=new UiSelector().text("Login")');
  }

  get loginTitle() {
    return $('~Login-screen');
  }

  get formsItem() {
    return $('android=new UiSelector().text("Forms")');
  }

  get formsTitle() {
    return $('~Forms-screen');
  }

  get swipeItem() {
    return $('android=new UiSelector().text("Swipe")');
  }

  get swipeTitle() {
    return $('~Swipe-screen');
  }

  get dragItem() {
    return $('android=new UiSelector().text("Drag")');
  }

  get dragTitle() {
    return $('android=new UiSelector().text("Drag")');
  }

  async openLogin() {
    await this.openMenuItem(this.loginItem, this.loginTitle);
  }

  async openForms() {
    await this.openMenuItem(this.formsItem, this.formsTitle);
  }

  async openSwipe() {
    await this.openMenuItem(this.swipeItem, this.swipeTitle);
  }

  async openDrag() {
    await this.openMenuItem(this.dragItem, this.dragTitle);
  }

  async openMenuItem(item, destinationTitle) {
    await this.menuNavigationTab.click();
    await item.waitForDisplayed();
    await item.click();
    await destinationTitle.waitForDisplayed();
  }
}

export default new NavigationScreen();
