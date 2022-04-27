@All
Feature: Coupons feature

  Background: 
    Given User launches the application
    And Enter username "admin" and password "Admin@123"
    When User navigates to Coupon page

  Scenario: Create coupon
    And Create new coupon "TestCoupon" and "TestCode"
    Then Verify the coupon "TestCoupon" is added
    And User closes application

  Scenario: Edit coupon
    And Edit existing coupon "TestCoupon" to "TestCouponNew"
    Then Verify the coupon "TestCouponNew" is added
    And User closes application

  Scenario: Delete coupon
    And Delete existing coupon "TestCouponNew"
    Then Verify the coupon "TestCouponNew" is deleted
    And User closes application
