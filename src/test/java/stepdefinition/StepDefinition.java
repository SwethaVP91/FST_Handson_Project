package stepdefinition;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.hooksClass;
import junit.framework.Assert;
import pages.AddCoupons;
import pages.CouponPage;
import pages.DashboardPage;
import pages.LoginPage;

public class StepDefinition {
	WebDriver driver = hooksClass.driver;
	LoginPage loginPAge = new LoginPage();
	DashboardPage dashboardPage = null;
	AddCoupons addCoupons = null;
	CouponPage couponPage = null;

	@Given("User launches the application")
	public void user_launches_the_application() {
		loginPAge.launchApplication();
	}

	@Given("Enter username {string} and password {string}")
	public void enter_username_and_password(String userName, String password) {
		loginPAge.enterUsername(userName);
		loginPAge.enterPassword(password);
		dashboardPage = loginPAge.clickOnLogin();
	}

	@When("User navigates to Coupon page")
	public void user_navigates_to_Coupon_page() {
		couponPage = dashboardPage.navigateToMarketingCoupons();
	}

	@Given("Create new coupon {string} and {string}")
	public void create_new_coupon_and(String couponName, String couponCode) {
		addCoupons = couponPage.clickOnAddCoupon();
		addCoupons.enterCouponName(couponName);
		addCoupons.enterCouponCode(couponCode);
		addCoupons.clickOnSave();
	}

	@When("Edit existing coupon {string} to {string}")
	public void edit_existing_coupon_to(String couponName, String newCouponName) {
		couponPage.EditCouponName(couponName, newCouponName);
	}

	@When("Delete existing coupon {string}")
	public void delete_existing_coupon(String couponName) {
		couponPage.deleteCoupon(couponName);
	}

	@When("User closes application")
	public void user_logout() {
	driver.close();
	}
	
	@Then("Verify the coupon {string} is added")
	public void verify_the_coupon_is_added(String couponName) {
		Assert.assertTrue("Coupon "+couponName+" is not listed in coupon page!",couponPage.isCouponNamePresent(couponName));
	}

	@Then("Verify the coupon {string} is deleted")
	public void verify_the_coupon_is_deleted(String couponName) {
		Assert.assertFalse("Coupon "+couponName+" is listed in coupon page!",couponPage.isCouponNamePresent(couponName));

	}
}
