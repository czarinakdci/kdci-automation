describe("HTTP GET Request test",()=>{
    
    
    it("Get PN_PNS Activities",()=>{
        cy.request('GET', 'https://stage-perfect-north.te2.biz/v1/conditions/PN_PNS/activities')
        .its('status')
        .should('equal', 200);
    })
    it("Get PN_PNS Lifts",()=>{
        cy.request('GET', 'https://stage-perfect-north.te2.biz/v1/conditions/PN_PNS/lifts')
        .its('status')
        .should('equal', 200);
    })
    it("Get PN_PNS Activities",()=>{
        cy.request('GET', 'https://stage-perfect-north.te2.biz/v1/conditions/PN_PNS/trails')
        .its('status')
        .should('equal', 200);
    })
})
