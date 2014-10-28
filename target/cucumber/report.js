$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("core/resources/login.feature");
formatter.feature({
  "id": "login",
  "description": "",
  "name": "Login",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "login;successful-login",
  "description": "",
  "name": "Successful login",
  "keyword": "Scenario",
  "line": 2,
  "type": "scenario"
});
formatter.step({
  "name": "a user \"Aslak\" with password \"xyz\"",
  "keyword": "Given ",
  "line": 3
});
formatter.step({
  "name": "I am on the login page",
  "keyword": "And ",
  "line": 4
});
formatter.step({
  "name": "I fill in \"User name\" with \"Aslak\"",
  "keyword": "And ",
  "line": 5
});
formatter.step({
  "name": "I fill in \"Password\" with \"xyz\"",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "I press \"Log in\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "I should see \"Welcome, Aslak\"",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "Aslak",
      "offset": 8
    },
    {
      "val": "xyz",
      "offset": 30
    }
  ],
  "location": "Stepdefs.a_user_with_password(String,String)"
});
formatter.result({
  "duration": 147339348,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat core.Stepdefs.a_user_with_password(Stepdefs.java:19)\r\n\tat ✽.Given a user \"Aslak\" with password \"xyz\"(core/resources/login.feature:3)\r\n"
});
formatter.match({
  "location": "Stepdefs.i_am_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "User name",
      "offset": 11
    },
    {
      "val": "Aslak",
      "offset": 28
    }
  ],
  "location": "Stepdefs.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 11
    },
    {
      "val": "xyz",
      "offset": 27
    }
  ],
  "location": "Stepdefs.i_fill_in_with(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 9
    }
  ],
  "location": "Stepdefs.i_press(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Aslak",
      "offset": 14
    }
  ],
  "location": "Stepdefs.i_should_see(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("core/resources/password_management.feature");
formatter.feature({
  "id": "password-management",
  "description": "",
  "name": "Password management",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "password-management;forgot-password",
  "description": "",
  "name": "Forgot password",
  "keyword": "Scenario",
  "line": 2,
  "type": "scenario"
});
formatter.step({
  "name": "a user with email \"cukes@cukes.info\" exists",
  "keyword": "Given ",
  "line": 3
});
formatter.step({
  "name": "I ask for a password reset",
  "keyword": "When ",
  "line": 4
});
formatter.step({
  "name": "an email with a password reset link should be sent",
  "keyword": "Then ",
  "line": 5
});
formatter.match({
  "arguments": [
    {
      "val": "cukes@cukes.info",
      "offset": 19
    }
  ],
  "location": "Stepdefs.a_user_with_email_exists(String)"
});
formatter.result({
  "duration": 225253,
  "status": "pending",
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat core.Stepdefs.a_user_with_email_exists(Stepdefs.java:13)\r\n\tat ✽.Given a user with email \"cukes@cukes.info\" exists(core/resources/password_management.feature:3)\r\n"
});
formatter.match({
  "location": "Stepdefs.i_ask_for_a_password_reset()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefs.an_email_with_a_password_reset_link_should_be_sent()"
});
formatter.result({
  "status": "skipped"
});
});