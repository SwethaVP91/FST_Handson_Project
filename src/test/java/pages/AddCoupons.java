package pages;

import org.openqa.selenium.By;

public class AddCoupons extends BasePage {

	private static String nameElement = "input-name";
	private static String codeElement = "input-code";
	private static String saveButton= "//button[(@data-original-title='Save')]";

	/*
	 * Enters coupon name
	 */
	public void enterCouponName(String name) {
		 driver.findElement(By.id(nameElement)).sendKeys(name);
	}

	/*
	 * Enters coupon code
	 */
	public void enterCouponCode(String code) {
		 driver.findElement(By.id(codeElement)).sendKeys(code);
	}

	/*
	 * Click on save
	 */
	public void clickOnSave() {
		 driver.findElement(By.xpath(saveButton)).click();
	}

}
