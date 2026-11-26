import { expect as chaiExpect } from 'chai';
import navigationScreen from '../screens/navigation.screen.js';

describe('Navegação', () => {
  it('CT-010: Navegar para as funcionalidades pelo Menu', async () => {
    // Login
    await navigationScreen.openLogin();
    chaiExpect(await navigationScreen.loginTitle.isDisplayed()).to.equal(true);

    // Forms
    await navigationScreen.openForms();
    chaiExpect(await navigationScreen.formsTitle.isDisplayed()).to.equal(true);

    // Swipe
    await navigationScreen.openSwipe();
    chaiExpect(await navigationScreen.swipeTitle.isDisplayed()).to.equal(true);

    // Drag
    await navigationScreen.openDrag();
    chaiExpect(await navigationScreen.dragTitle.isDisplayed()).to.equal(true);
  });
});
