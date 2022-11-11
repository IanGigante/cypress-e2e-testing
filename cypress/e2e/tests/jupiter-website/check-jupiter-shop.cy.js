import {Cy} from '../../lib/cy'
import {Home} from '../../pages/home'
import {Shop} from '../../pages/shop'

const cyx = new Cy();
const home = new Home();
const shop = new Shop();

describe('Jupiter Website', () => {
let price1;
let price2;
let price3;
let total = 0;

  beforeEach( () => {
    cy.visit('https://jupiter.cloud.planittesting.com/')
  })

   it('should be able to shop', () => {
        home.clickShopMenu();
        shop.getItemPrice("Stuffed Frog").should(($el)=>{
            price1 = $el.text()
        })
        shop.purchaseItems("Stuffed Frog",2)
        shop.getItemPrice("Fluffy Bunny").should(($el)=>{
            price2 = $el.text()
        })
        shop.purchaseItems("Fluffy Bunny",5)
        shop.getItemPrice("Valentine Bear").should(($el)=>{
            price3 = $el.text()
        })
        shop.purchaseItems("Valentine Bear",3)
        home.clickCartIcon()

        shop.getItemPriceOnCart("Stuffed Frog")
            .should(($el) => {
                expect(price1).to.equal($el.text())
            })
        shop.getItemPriceOnCart("Fluffy Bunny")
            .should(($el) => {
                expect(price2).to.equal($el.text())
            })
        shop.getItemPriceOnCart("Valentine Bear")
            .should(($el) => {
                expect(price3).to.equal($el.text())
            })
        shop.validateTotalPrice()
    })
})
