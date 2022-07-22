import { getBusinesses } from "./database.js";

const businesses = getBusinesses()

const nyBusinesses = (businesses) => {
    if(businesses.companyIndustry === 'Manufacturing'){
        return true
    } else { 
        return false
    }
}



export const manufacturingBusinesses = () => {
    const mfb = businesses.filter(nyBusinesses)
    let mfHTML = '<h2>Manufacturing Businesses</h2>'
    mfb.forEach(
        (business) => {
    mfHTML += `<h3>${business.companyName}</h3>
    <p>${business.addressFullStreet}</p>
    <p>${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}
    <hr>`

    })
    return mfHTML
}
