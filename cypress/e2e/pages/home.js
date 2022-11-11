import {Cy} from '../lib/cy'
const cyx = new Cy();

const HOMEPAGE = 'https://jupiter.cloud.planittesting.com/'
const CONTACT_MENU = '#nav-contact > a'
const SHOP_MENU = '#nav-shop > a'
const CART_ICON = '#nav-cart > a'

export class Home{

    /**
    * This function allows user to navigate to the Jupiter Home Page
    */
    visitHomePage(){
        cyx.cyVisit(HOMEPAGE)
    }

    /*
    * This function clicks the Contact Menu
    */
    clickContactMenu(){
        cyx.cyGet(CONTACT_MENU).click()
    }

    /*
    * This function clicks the Contact Menu
    */
    clickShopMenu(){
        cyx.cyGet(SHOP_MENU).click()
    }

    /*
    * This function clicks the Contact Menu
    */
    clickCartIcon(){
        cyx.cyGet(CART_ICON).click()
    }
}