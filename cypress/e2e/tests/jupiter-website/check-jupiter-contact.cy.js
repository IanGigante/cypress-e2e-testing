import {Cy} from '../../lib/cy'
import {Contact} from '../../pages/contact'
import {Home} from '../../pages/home'

const cyx = new Cy();
const cntct = new Contact();
const home = new Home();

describe('Jupiter Website: Contact Page', () => {
    const forename = 'Ian';
    const email = 'i_gigante_test@yahoo.com';
    const message = 'Populate message box'


  beforeEach(() => {
    home.visitHomePage();
  })

  it('should display error messages for unpopulated mandatory fields', () => {
        home.clickContactMenu();
        cntct.clickSubmitButton();
        cntct.validateForenameError(true);
        cntct.validateEmailError(true);
        cntct.validateMessageError(true);
        cntct.typeForename(forename);
        cntct.typeEmail(email);
        cntct.typeMessage(message);
        cntct.validateForenameError(false);
        cntct.validateEmailError(false);
        cntct.validateMessageError(false);
  })

  for(let i =0; i <= 4; i++ ){
  it(`should be able to submit contact details - Iteration#${i+1}`, () => {
        home.clickContactMenu();
        cntct.clickSubmitButton();
        cntct.typeForename(forename);
        cntct.typeEmail(email);
        cntct.typeMessage(message);
        cntct.clickSubmitButton();
        cntct.validateVisibleProgressBar();
        cntct.waitUntilNotExistProgressBar();
        cntct.validateVisibleAlertSuccess();
    })
  }
})
