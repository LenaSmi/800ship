Feature: Login
	Scenario: Successful login
        	Given a user "Aslak" with password "xyz"
  		And I am on the login page
  		And I fill in "User name" with "Aslak"
  		And I fill in "Password" with "xyz"
 		When I press "Log in"
  		Then I should see "Welcome, Aslak"