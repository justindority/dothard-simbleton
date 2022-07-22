import { getBusinesses } from "./database.js";

const businesses = getBusinesses()

const nyBusinesses = (businesses) => {
    if(businesses.addressStateCode === 'NY'){
        return true
    } else { 
        return false
    }
}



export const newYorkBusinesses = () => {
    const nyb = businesses.filter(nyBusinesses)
    let nyHTML = '<h2>New York Businesses</h2>'
    nyb.forEach(
        (business) => {
    nyHTML += `<h3>${business.companyName}</h3>
    <p>${business.addressFullStreet}</p>
    <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
    <hr>`

    })
    return nyHTML
}

