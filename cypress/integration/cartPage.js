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