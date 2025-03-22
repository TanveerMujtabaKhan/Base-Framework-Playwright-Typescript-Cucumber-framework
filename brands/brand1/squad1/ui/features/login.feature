Feature: Launch the brand1 - just example

  Background:

  @smoke
  Scenario Outline: add funds to the dynamic accounts
    Given user is on homepage
    Then add deposit to the account <accountType>
  #  Then This step will fail deliberately again
    Examples:
      | accountType |
      | new         |
      | existing    |
