import { expect as chaiExpect } from 'chai';
import loginScreen from '../screens/login.screen.js';
import loginData from '../support/login.data.json' with { type: 'json' };

describe('Login', () => {
  it('CT-001: Realizar login com sucesso', async () => {
    await loginScreen.open();
    await loginScreen.login(loginData.email, loginData.password);

    await loginScreen.successTitle.waitForDisplayed();
    await loginScreen.successMessage.waitForDisplayed();
    await loginScreen.alertOkButton.waitForDisplayed();

    chaiExpect(await loginScreen.successTitle.getText()).to.equal('Success');
    chaiExpect(await loginScreen.successMessage.getText()).to.equal('You are logged in!');
  });

  it('CT-002: Falha ao realizar login com e-mail inválido', async () => {
    await loginScreen.open();
    await loginScreen.login(loginData.invalidEmail, loginData.password);

    await loginScreen.invalidEmailMessage.waitForDisplayed();
    
    chaiExpect(await loginScreen.invalidEmailMessage.getText())
      .to.equal('Please enter a valid email address');
  });

  it('CT-003: Falha ao realizar login com senha inferior ao mínimo permitido', async () => {
    await loginScreen.open();
    await loginScreen.login(loginData.email, loginData.shortPassword);

    await loginScreen.shortPasswordMessage.waitForDisplayed();
    
    chaiExpect(await loginScreen.shortPasswordMessage.getText())
      .to.equal('Please enter at least 8 characters');
  });

  it('CT-004: Falha ao realizar login com campos obrigatórios vazios', async () => {
    await loginScreen.open();
    await loginScreen.login('', '');

    await loginScreen.invalidEmailMessage.waitForDisplayed();
    await loginScreen.shortPasswordMessage.waitForDisplayed();
    
    chaiExpect(await loginScreen.invalidEmailMessage.getText())
      .to.equal('Please enter a valid email address');
    chaiExpect(await loginScreen.shortPasswordMessage.getText())
      .to.equal('Please enter at least 8 characters');
  });
});
