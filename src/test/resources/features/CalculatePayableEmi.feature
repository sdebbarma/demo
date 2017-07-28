@idbi
Feature: Calculate payable EMI
	
	Background: 
    Given User navigates to website
	
	@sanity @regression @system @web-http @selenium
	Scenario Outline: Valid Loan Details
  	When User provides loan amount as "<amount>"
		And Loan rate and term as rate and term respectively
			| name:lnRate 	| 9 	|
			| name:lnTerm  	| 24	|
			
		And User clicks on Calculate button
  	Then System shows expected emi as "<emi>"
	
	Examples: valid 
		| amount		| emi				|
    | 12300000	| 561922.33	| 
    | 40000   	| 1827.39		|
    | 			   	| NaN				|
 	