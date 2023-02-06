import Button from './Button';

describe('Button', () => {
  it('should mount', () => {
    cy.mount(<Button />);
    cy.compareSnapshot('component-testing')
  });

  it('when button is clicked, should call onClick', () => {
    cy.mount(<Button onClick={cy.spy().as('onClick')} />);
    cy.get('button').click();
    cy.get('@onClick').should('have.been.called');
  });
});
