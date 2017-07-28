@comp-addnum
Feature: Add Two Numbers
  As a user
  I want to use a calculator
  So that I don't need to calculate myself
 
  @progression @unit @junit
  Scenario Outline: Add two numbers
    Given I have a calculator
    When I add "<a>" and "<b>"
    Then the result should be "<sum>"

  Examples: add 
		| a	| b	| sum |
    | 2	| 3 | 5   |
    | 2	| 0	| 3   |