$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/Coupons.feature");
formatter.feature({
  "name": "Coupons feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@All"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username \"admin\" and password \"Admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Coupon page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_Coupon_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create coupon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    }
  ]
});
formatter.step({
  "name": "Create new coupon \"TestCoupon\" and \"TestCode\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.create_new_coupon_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the coupon \"TestCoupon\" is added",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_the_coupon_is_added(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User closes application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username \"admin\" and password \"Admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Coupon page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_Coupon_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit coupon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    }
  ]
});
formatter.step({
  "name": "Edit existing coupon \"TestCoupon\" to \"TestCouponNew\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.edit_existing_coupon_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the coupon \"TestCouponNew\" is added",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_the_coupon_is_added(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User closes application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_logout()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter username \"admin\" and password \"Admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User navigates to Coupon page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_navigates_to_Coupon_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete coupon",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@All"
    }
  ]
});
formatter.step({
  "name": "Delete existing coupon \"TestCouponNew\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.delete_existing_coupon(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the coupon \"TestCouponNew\" is deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_the_coupon_is_deleted(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User closes application",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_logout()"
});
formatter.result({
  "status": "passed"
});
});