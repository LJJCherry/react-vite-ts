import Stepper from './Stepper';

describe('<Stepper />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Stepper />);
    cy.get('span').should('have.text', 0);
  })

  it('when the increment button is pressed, the counter is incremented', () => {
    cy.mount(<Stepper />);
    cy.get('[data-cy=increment]').click();
    cy.get('[data-cy=counter]').should('have.text', 1);
  })

  it('when the increment button is decremented, the counter is decremented', () => {
    cy.mount(<Stepper />);
    cy.get('[data-cy=decrement]').click();
    cy.get('[data-cy=counter]').should('have.text', -1);
  })

  // Cypress Spies
  it('clicking + fires a change event with the incremented value', () => {
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<Stepper onChange={onChangeSpy} />)
    cy.get('[data-cy=increment]').click()
    cy.get('@onChangeSpy').should('have.been.calledWith', 1)
  })
})