Feature: Payments Bank Profile Page - Desktop

  @smoke
  Scenario Outline: launching the brand portals
    Given fetch token <brands> from API
    Examples:
      | brands |
      | brand1   |
