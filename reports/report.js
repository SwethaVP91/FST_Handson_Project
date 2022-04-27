$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/login.feature");
formatter.feature({
  "name": "Login feature",
  "description": "  I want to login to my portal",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.match({
  "location": "loginSteps.user_launches_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
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
  ],
  "keyword": "And "
});
formatter.match({
  "location": "loginSteps.enter_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
});