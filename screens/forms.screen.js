class FormsScreen {
  get formsNavigationTab() {
    return $('~Forms');
  }

  get formsScreen() {
    return $('~Forms-screen');
  }

  get textInput() {
    return $('~text-input');
  }

  get textResult() {
    return $('~input-text-result');
  }

  get switchControl() {
    return $('~switch');
  }

  get switchText() {
    return $('~switch-text');
  }

  get dropdown() {
    return $('~Dropdown');
  }

  get dropdownValue() {
    return $('android=new UiSelector().resourceId("text_input")');
  }

  get activeButton() {
    return $('~button-Active');
  }

  get inactiveButton() {
    return $('~button-Inactive');
  }

  get activeAlertTitle() {
    return $('id=com.wdiodemoapp:id/alert_title');
  }

  get activeAlertMessage() {
    return $('id=android:id/message');
  }

  get askMeLaterButton() {
    return $('android=new UiSelector().text("ASK ME LATER")');
  }

  get cancelButton() {
    return $('android=new UiSelector().text("CANCEL")');
  }

  get alertOkButton() {
    return $('id=android:id/button1');
  }

  get dropdownOption() {
    return $('android=new UiSelector().text("webdriver.io is awesome")');
  }

  async open() {
    await this.formsNavigationTab.click();
    await this.formsScreen.waitForDisplayed();
  }

  async enterText(value) {
    await this.textInput.waitForDisplayed();
    await this.textInput.setValue(value);
  }

  async toggleSwitch() {
    await this.switchControl.click();
  }

  async selectObservedDropdownOption() {
    await this.dropdown.click();
    await this.dropdownOption.waitForDisplayed();
    await this.dropdownOption.click();
  }

  async openActiveButtonAlert() {
    await this.activeButton.click();
  }

  async tapInactiveButton() {
    await this.inactiveButton.click();
  }
}

export default new FormsScreen();
