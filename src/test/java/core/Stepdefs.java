package core;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefs {
        
    @Given("^a user with email \"(.*?)\" exists$")
    public void a_user_with_email_exists(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
    
    @Given("^a user \"(.*?)\" with password \"(.*?)\"$")
    public void a_user_with_password(String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^I ask for a password reset$")
    public void i_ask_for_a_password_reset() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^an email with a password reset link should be sent$")
    public void an_email_with_a_password_reset_link_should_be_sent() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
    
    @Given("^I am on the login page$")
    public void i_am_on_the_login_page() throws Throwable {
        
        throw new PendingException();
    }

    @Given("^I fill in \"(.*?)\" with \"(.*?)\"$")
    public void i_fill_in_with(String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^I press \"(.*?)\"$")
    public void i_press(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^I should see \"(.*?)\"$")
    public void i_should_see(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
