import{Given} from "cypress-cucumber-preprocessor/steps";
import{Then} from "cypress-cucumber-preprocessor/steps";
import{When} from "cypress-cucumber-preprocessor/steps";

//Functions
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

function addColas(n) {
    let btn = colaButton()
    for(let i=0; i<n; i++) {
        btn.click()
    }
}

function addBeers(n) {
    let btn = beerButton()
    for(let i=0; i<n; i++) {
        btn.click()
    }
}

function addWines(n) {
    let btn = wineButton()
    for(let i=0; i<n; i++) {
        btn.click()
    }
}

function orderButton() {
    return cy.get('.col-12 > .btn')
}

//Page 2 (Order Review)
function enterAge() {
    return cy.get('#ageInput')
}

function confirmOrder() {
    return cy.get('.btn-success')
}

function alertMessage() {
    return cy.get(':nth-child(2) > :nth-child(1) > .alert')
}

//Page 3 (Confirm Order)
function confirmationOfOrder() {
    return cy.get('p')
}

//Step definitions
Given('user opens robobar website', ()=>{
    cy.visit('http://localhost:3000/')
})

When('user adds a cola', (title)=>{
    colaButton().click()
})

When('user adds a beer', (title)=>{
    beerButton().click()
})

When('user adds a wine', (title)=>{
    wineButton().click()
})

Then('total should be €{float}', (price)=>{
    cy.get(':nth-child(4) > .ng-binding')
        .should('contain', "€" + price)
})

When('user adds {int} cola', (n)=>{
    addColas(n)
})

When('user adds {int} beer', (n)=>{
    addBeers(n)
})

When('user adds {int} wine', (n)=>{
    addWines(n)
})

When('user adds {int} cola {int} beer {int} wine', (cola, beer, wine)=>{
    addColas(cola)
    addBeers(beer)
    addWines(wine)
})

When('user press submit button', ()=>{
    orderButton().click()
})

When('user enter her age is {int}', (n)=>{
    enterAge().type(n)
})

When('user press order button', ()=>{
    confirmOrder().click()
})

Then('alert is active', ()=>{
    alertMessage().should('be.visible')
})

Then('order is confirmed', ()=>{
    confirmationOfOrder().should("contain.text", "Coming right up! ~bzzzt~")
})

Then('checkout result is {string}', (expect)=>{
    if(expect === 'fail')  {
        alertMessage().should('be.visible')
    }else{
        confirmationOfOrder().should("contain.text", "Coming right up! ~bzzzt~")
    }
})

