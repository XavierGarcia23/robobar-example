Feature: Google Main Page
  I Want to open a search engine

  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title