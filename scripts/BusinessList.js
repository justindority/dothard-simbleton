import { getBusinesses } from "./database.js";

const businesses = getBusinesses()//invoke getBusinesses from database.js

//Declare function to generate Businesses HTML
    //establish html string with header
    //forEach loop on the businesses array
        //add the business informaiton to the html string

export const businessList = () => {
    let businessHTML = '<h2>Active Businesses</h2>'
    businesses.forEach(
        (business) => {
         businessHTML += `<h3>${business.companyName}</h3>
                          <p>${business.addressFullStreet}</p>
                          <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
                          <hr>`
        }
    )
    return businessHTML
}



document
    .querySelector("#inputId")
        .addEventListener(
            "keypress",
            (keyPressEvent) => {
                const companySearchResultArticle = document.querySelector("#replaceContent")

                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.


                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example:
                            if (business.companyName.includes(keyPressEvent.target.value)) {

                            }
                    */

                    const foundBusiness = businesses.find(
                        // Your callback function goes here
                        business => {
                            if(business.companyName.includes(keyPressEvent.target.value)){
                            return business
                            }
                        }
                    )

                    if(foundBusiness){
                    companySearchResultArticle.innerHTML = `<h2>${foundBusiness.companyName}</h2>
                    <p>${foundBusiness.addressFullStreet}</p>
                    <p>${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}
                    <hr>`
                    } else {
                        companySearchResultArticle.innerHTML = `<h3>No search results. Please try again or refresh the page.</h3>`
                    } 
                }
            })