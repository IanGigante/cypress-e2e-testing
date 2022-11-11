import {Cy} from '../lib/cy'
const cyx = new Cy();
const SUBMIT_BUTTON = '.btn-contact'
const FORENAME_ERR = '#forename-err'
const EMAIL_ERR = '#email-err'
const MESSAGE_ERR = '#message-err'
const FORENAME = '#forename'
const EMAIL = '#email'
const MESSAGE = '#message'
const PROGRESS_BAR = '.modal-header'
const ALERT_SUCCESS = '.alert-success'

export class Contact{

    /*
    * This function clicks the contact button on the contact page
    */
    clickSubmitButton(){
        cyx.cyGet(SUBMIT_BUTTON).click();
    }

    /*
    * This function enters a value in the Forename text field on the contact page
    * param forename: string -> i.e. "Ian"
    */
    typeForename(forename){
        cyx.cyGet(FORENAME).type(forename).should('have.value',forename)
    }

    /*
    * This function clicks the contact button on the contact page
    * @param email: string -> i.e. "ian_test@gmail.com"
    */
    typeEmail(email){
        cyx.cyGet(EMAIL).type(email).should('have.value',email)
    }

   /*
    * This function clicks the contact button on the contact page
    * @param email: string -> i.e. "ian_test@gmail.com"
    */
    typeMessage(message){
        cyx.cyGet(MESSAGE).type(message).should('have.value',message)
    }

   /*
    * This function validates that correct error message is displayed for missing Forename
    * @param isDisplayed -> true
    * true: Error Message is displayed
    * false: Error message is not displayed
    */
    validateForenameError(isDisplayed){
        cyx.cyGet(FORENAME_ERR).should(isDisplayed?'have.text':'not.exist', 'Forename is required')
    }

   /*
    * This function validates that correct error message is displayed for missing Forename
    * @param isDisplayed -> true
    * true: Error Message is displayed
    * false: Error message is not displayed
    */
    validateEmailError(isDisplayed){
        cyx.cyGet(EMAIL_ERR).should(isDisplayed?'have.text':'not.exist', 'Email is required')
    }

   /*
    * This function validates that correct error message is displayed for missing Message
     * @param isDisplayed -> true
     * true: Error Message is displayed
     * false: Error message is not displayed
     */
    validateMessageError(isDisplayed){
        cyx.cyGet(MESSAGE_ERR).should(isDisplayed?'have.text':'not.exist', 'Message is required')
    }

    /*
    * This function wait until Progress Bar is not existing
    */
    validateVisibleProgressBar(){
        cyx.cyGet(PROGRESS_BAR).should('be.visible')
    }

    /*
    * This function validates that the contact transaction is successful by checking if the success Message is displayed
    */
    validateVisibleAlertSuccess(){
        cyx.cyGet(ALERT_SUCCESS).should('be.visible')
    }

    /*
    * This function wait until Progress Bar is not existing
    */
    waitUntilNotExistProgressBar(){
        cyx.cyWaitUntilNotExist(PROGRESS_BAR)
    }
}