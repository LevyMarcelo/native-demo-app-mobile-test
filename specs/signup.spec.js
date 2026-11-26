import { expect as chaiExpect } from 'chai';
import loginScreen from '../screens/login.screen.js';
import loginData from '../support/login.data.json' with { type: 'json' };
import signupData from '../support/signup.data.json' with { type: 'json' };

describe('Cadastro', () => {
  it('CT-005: Realizar cadastro com sucesso', async () => {
    await loginScreen.openSignUp();
    await loginScreen.signUp(loginData.email, loginData.password, loginData.password);

    await loginScreen.successTitle.waitForDisplayed();
    await loginScreen.successMessage.waitForDisplayed();
    await loginScreen.alertOkButton.waitForDisplayed();
    
    chaiExpect(await loginScreen.successTitle.getText()).to.equal('Signed Up!');
    chaiExpect(await loginScreen.successMessage.getText())
      .to.equal('You successfully signed up!');
  });

  it('CT-006: Falha ao realizar cadastro com e-mail inválido', async () => {
    await loginScreen.openSignUp();
    await loginScreen.signUp(loginData.invalidEmail, loginData.password, loginData.password);

    await loginScreen.invalidEmailMessage.waitForDisplayed();
    
    chaiExpect(await loginScreen.invalidEmailMessage.getText())
      .to.equal('Please enter a valid email address');
  });

  it('CT-007: Falha ao realizar cadastro com senha inferior ao mínimo permitido', async () => {
    await loginScreen.openSignUp();
    await loginScreen.signUp(loginData.email, loginData.shortPassword, loginData.shortPassword);

    await loginScreen.shortPasswordMessage.waitForDisplayed();
    
    chaiExpect(await loginScreen.shortPasswordMessage.getText())
      .to.equal('Please enter at least 8 characters');
  });

  it('CT-008: Falha ao realizar cadastro com senhas diferentes', async () => {
    await loginScreen.openSignUp();
    await loginScreen.signUp(loginData.email, loginData.password, signupData.mismatchedPassword);

    await loginScreen.differentPasswordMessage.waitForDisplayed();
    
    chaiExpect(await loginScreen.differentPasswordMessage.getText())
      .to.equal('Please enter the same password');
  });
});
