Feature: Place an order for iPhone 13 pro from the e-commerce website.

  Scenario: place an order
    Given a valid credentials for the e-commerce app
    When a user logs in successfully
    Then they should  be able to successfully place an order for any item