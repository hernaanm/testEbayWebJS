Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the search page
    When I search the item <item>
    Then I show the number of results

    Examples:
      | item   |
      | Pilas  |