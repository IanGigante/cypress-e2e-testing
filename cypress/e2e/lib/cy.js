export class Cy{

    /*
    * This function is similar to cy.get that has a default timeout
    * @params locator -> string i.e. ".modal-header"
    */
    cyGet(locator){
        return cy.get(locator,{"timeout":12000})
    }

    /*
    * This function waits until the element is not existing
    * @params locator -> string i.e. ".modal-header"
    */
    cyWaitUntilNotExist(locator){
        cy.waitUntil(()=>{
           return this.cyGet(locator).should('have.length',0)},
           {
             errorMsg: 'Test Failed. Element is visible/existing',
             timeout: 60000,
             interval: 1000
            })
    }

    /*
        * This function is similar to cy.get that has a default timeout
        * @params locator -> string i.e. ".modal-header"
        */
        cyVisit(url){
            cy.visit(url)
        }
}