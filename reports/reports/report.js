$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "  I want to login to my portal",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "user1",
        "pass1"
      ]
    },
    {
      "cells": [
        "user2",
        "pass2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.user_launches_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username \"user1\" and password \"pass1\"",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.user_launches_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username \"user2\" and password \"pass2\"",
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
});