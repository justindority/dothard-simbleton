import { getBusinesses } from "./database.js"

  const businesses = getBusinesses()
  let agentHTML = ``
  export const purchasingAgents = () => {

    const agentsMap = businesses.map(
        (business) => {
            agentHTML = `<h3>${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</h3>
            <h4>${business.companyName}</h4>
            <h4>${business.phoneWork}<h4>
            <hr>`
            return agentHTML
        }
    )
    const finalHTML = agentsMap.join("")
    const completeHTML = `<h2>Purchasing Agents</h2>${finalHTML}`
    return completeHTML
  }