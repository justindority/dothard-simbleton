// const contentTarget = document.querySelector("#content")

// const renderHTML = () => {
//   contentTarget.innerHTML = `
//   <input type="text" placeholder="Enter business name..." id="companySearch" />

//   <article class="foundBusinesses"></article>

//   <article class="businesses">
//       <h2>All Businesses</h2>
//       ${}
//   </article>

//   <article class="businesses--manufacturing">
//       <h2>Manufacturing Businesses</h2>
//       ${}
//   </article>

//   <article class="businesses--newYork">
//       <h2>New York Businesses</h2>
//       ${}
//   </article>

//   <article class="agents">
//       <h2>Purchasing Agents</h2>
//       ${}
//   </article>
//   `
// }

// renderHTML()

import { purchasingAgents } from "./agentList.js"
import { businessList } from "./BusinessList.js"
import { manufacturingBusinesses } from "./manufacturingBusinesses.js"
import { newYorkBusinesses } from "./newYorkBusinesses.js"

const businessesHtmlElement = document.querySelector("#content") 
businessesHtmlElement.innerHTML = businessList()

const NYbusinessesHtmlElement = document.querySelector('#nyb')
NYbusinessesHtmlElement.innerHTML = newYorkBusinesses()

const mfBusinessesHtmlElement = document.querySelector('#mfb')
mfBusinessesHtmlElement.innerHTML = manufacturingBusinesses()

const agentsHtmlElement = document.querySelector('#agents')
agentsHtmlElement.innerHTML = purchasingAgents()