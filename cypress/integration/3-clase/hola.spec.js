// hola.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

//Open the website
function openRobobar() {
    return cy.visit('http://localhost:3000')
}

//Page 1 (Place Order)
function colaButton() {
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function beerButton() {
    return cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function wineButton() {
    return cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function totalText() {
    return cy.get(':nth-child(4) > .ng-binding')
}

function orderButton() {
    return cy.get('.col-12 > .btn')
}

//Page 2 (Order Review)
function confirmOrder() {
    return cy.get('.btn-success')
}

function enterAge() {
    return cy.get('#ageInput')
}

//Page 3 (Confirm Order)
function confirmationOfOrder() {
    return cy.get('p')
}

//Tests
describe('Hello Cypress', ()=>{
    //it('Says Hello', ()=>{
    //    expect(true).to.equal(true)
    //})

    beforeEach(()=>{
        openRobobar()
    })

    it('Order a Cola', ()=>{
        colaButton().click()
        totalText().should("contain.text", "€1.25")
    })

    it('Order two Colas', ()=>{
        colaButton()
            .click()
            .click()
        totalText().should("contain.text", "€2.50")
    })

    //it('Order Cola', ()=>{
    //    orderButton().should("be.enabled", "false")
    //    colaButton().click()
    //    orderButton().should("be.enabled", "true")
    //    totalText().should("contain.text", "€1.25")
    //    orderButton().click()
    //    confirmOrder().click()
    //    confirmationOfOrder().should("contain.text", "Coming right up! ~bzzzt~")
    //})
})