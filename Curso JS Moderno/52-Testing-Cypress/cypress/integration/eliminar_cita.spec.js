/// <reference types="cypress" />

describe('Llena los campos para una nueva cita y la elimina', () =>{
    it('Campos nueva cita', () => {

        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"')
        .type('Nuevo Hook');

        cy.get('[data-cy="propietario-input"')
        .type('Carlos');

        cy.get('[data-cy="telefono-input"')
        .type('666666666');

        cy.get('[data-cy="fecha-input"')
        .type('2021-11-10');

        cy.get('[data-cy="hora-input"')
        .type('10:30');

        cy.get('[data-cy="sintomas-textarea"')
        .type('Solo duerme');

        cy.get('[data-cy="submit-cita"')
        .click();

        cy.get('[data-cy=citas-heading]').invoke('text')
        .should('equal', 'Administra tus Citas');

        cy.get('[data-cy="alerta"]').invoke('text')
        .should('equal', 'Se agregó correctamente');

        cy.get('[data-cy="alerta"]')
        .should('have.class', 'alert-success');
    });

    it('Eliminar la cita', () => {
        cy.get('[data-cy="btn-eliminar"]')
        .click();

        cy.get('[data-cy=citas-heading]').invoke('text')
        .should('equal', 'No hay Citas, comienza creando una');

    });


});