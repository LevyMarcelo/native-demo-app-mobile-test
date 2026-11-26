class LoginScreen {
  get loginNavigationTab() {
    return $('~Login');
  }

  get loginTab() {
    return $('~button-login-container');
  }

  get signUpTab() {
    return $('~button-sign-up-container');
  }

  get loginScreen() {
    return $('~Login-screen');
  }

  get emailInput() {
    return $('~input-email');
  }

  get passwordInput() {
    return $('~input-password');
  }

  get loginButton() {
    return $('~button-LOGIN');
  }

  get confirmPasswordInput() {
    return $('~input-repeat-password');
  }

  get signUpButton() {
    return $('~button-SIGN UP');
  }

  get invalidEmailMessage() {
    return $('android=new UiSelector().text("Please enter a valid email address")');
  }

  get shortPasswordMessage() {
    return $('android=new UiSelector().text("Please enter at least 8 characters")');
  }

  get differentPasswordMessage() {
    return $('android=new UiSelector().text("Please enter the same password")');
  }

  get successTitle() {
    return $('id=com.wdiodemoapp:id/alert_title');
  }

  get successMessage() {
    return $('id=android:id/message');
  }

  get alertOkButton() {
    return $('id=android:id/button1');
  }

  async open() {
    await this.loginNavigationTab.click();
    await this.loginScreen.waitForDisplayed();
    await this.loginTab.click();
    await this.emailInput.waitForDisplayed();
  }

  async openSignUp() {
    await this.loginNavigationTab.click();
    await this.loginScreen.waitForDisplayed();
    await this.signUpTab.click();
    await this.confirmPasswordInput.waitForDisplayed();
  }

  async login(email, password) {
    await this.emailInput.waitForDisplayed();
    await this.emailInput.setValue(email);
    await this.passwordInput.waitForDisplayed();
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async signUp(email, password, confirmPassword) {
    await this.emailInput.waitForDisplayed();
    await this.emailInput.setValue(email);
    await this.passwordInput.waitForDisplayed();
    await this.passwordInput.setValue(password);
    await this.confirmPasswordInput.waitForDisplayed();
    await this.confirmPasswordInput.setValue(confirmPassword);
    await this.signUpButton.click();
  }
}

export default new LoginScreen();
