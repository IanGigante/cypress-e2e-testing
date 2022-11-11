import {Cy} from '../lib/cy'
const cyx = new Cy();

export class Shop{
    /*
    * This function returns the element where to get the Item Price
    */
    getItemPrice(item){
      return cyx.cyGet(`li:contains("${item}")`)
              .find('span')
    }

    /*
    * This function returns the element where to get the Item Price on Cart
    */
    getItemPriceOnCart(item){
       return cyx.cyGet(`td:contains("${item}")`)
                        .siblings('.ng-binding')
                        .first()
    }

    /*
    * This function is used to purchase specific item given a qty
    * @param item -> string i.e "Valentine Bear"
    * @param qty -> number i.e 3
    */
    purchaseItems(item,qty){
        for(let i =1; i <= qty; i++ ){
          cyx.cyGet(`li:contains("${item}")`)
             .find('.btn-success')
             .click()
        }
    }
    validateTotalPrice(){
        let total = 0;
        cyx.cyGet('tbody > tr')
              .each(($el,index, $els)=>{
                   cy.wrap($el)
                     .find('td')
                     .eq(3)
                     .should((elem)=>{
                            total += parseFloat(elem.text().replace('$',''))
                            })
                })

            cyx.cyGet('.total').should(($el)=>{
               expect(total).to.equal(parseFloat($el.text().replace('Total:','')))
            })
            }


}