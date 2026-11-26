import { expect as chaiExpect } from 'chai';
import formsScreen from '../screens/forms.screen.js';
import formsData from '../support/forms.data.json' with { type: 'json' };

describe('Formulário', () => {
  it('CT-009: Interagir com os componentes do formulário', async () => {
    await formsScreen.open();

    // Text Input
    await formsScreen.enterText(formsData.inputText);
    chaiExpect(await formsScreen.textResult.getText()).to.equal(formsData.inputText);

    // Switch
    await formsScreen.switchText.waitForDisplayed();
    chaiExpect(await formsScreen.switchControl.getAttribute('checked')).to.equal('false');
    chaiExpect(await formsScreen.switchText.getText()).to.equal('Click to turn the switch ON');
    await formsScreen.toggleSwitch();
    chaiExpect(await formsScreen.switchControl.getAttribute('checked')).to.equal('true');
    chaiExpect(await formsScreen.switchText.getText()).to.equal('Click to turn the switch OFF');

    // Dropdown
    await formsScreen.selectObservedDropdownOption();
    chaiExpect(await formsScreen.dropdownValue.getText()).to.equal(formsData.dropdownOption);

    // Active Button
    await formsScreen.openActiveButtonAlert();
    await formsScreen.activeAlertTitle.waitForDisplayed();
    await formsScreen.activeAlertMessage.waitForDisplayed();
    await formsScreen.askMeLaterButton.waitForDisplayed();
    await formsScreen.cancelButton.waitForDisplayed();
    await formsScreen.alertOkButton.waitForDisplayed();
    chaiExpect(await formsScreen.activeAlertTitle.getText()).to.equal('This button is');
    chaiExpect(await formsScreen.activeAlertMessage.getText()).to.equal('This button is active');
    chaiExpect(await formsScreen.askMeLaterButton.getText()).to.equal('ASK ME LATER');
    chaiExpect(await formsScreen.cancelButton.getText()).to.equal('CANCEL');
    chaiExpect(await formsScreen.alertOkButton.getText()).to.equal('OK');
    await formsScreen.alertOkButton.click();
    await formsScreen.activeAlertTitle.waitForDisplayed({ reverse: true });

    // Inactive Button
    await formsScreen.tapInactiveButton();
    chaiExpect(await formsScreen.inactiveButton.isDisplayed()).to.equal(true);
    chaiExpect(await formsScreen.activeAlertTitle.isDisplayed()).to.equal(false);
  });
});
