package pages;

import org.openqa.selenium.By;

public class EditCouponPage extends BasePage {
	/*
	 * Enters coupon name
	 */
	public void enterCouponName(String name) {
		driver.findElement(By.id("input-name")).clear();
		 driver.findElement(By.id("input-name")).sendKeys(name);
	}

	/*
	 * Click on save
	 */
	public void clickOnSave() {
		 driver.findElement(By.xpath("//button[(@data-original-title='Save')]")).click();
	}

}
