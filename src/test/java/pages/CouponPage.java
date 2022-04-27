package pages;

import org.openqa.selenium.By;

public class CouponPage extends BasePage {

	/**
	 * Click on add coupon
	 * 
	 * @return
	 */
	public AddCoupons clickOnAddCoupon() {

		driver.findElement(By.xpath("//a[contains(@href,'coupon/add&token')]")).click();
		return new AddCoupons();
	}

	/**
	 * Edit existing coupon
	 * 
	 * @return
	 */
	public EditCouponPage EditCouponName(String couponName, String newCouponName) {
		driver.findElement(
				By.xpath("//td[text()='" + couponName + "']/following-sibling::td/a[@data-original-title='Edit']"))
				.click();
		EditCouponPage editCouponPage = new EditCouponPage();
		editCouponPage.enterCouponName(newCouponName);
		editCouponPage.clickOnSave();
		return new EditCouponPage();
	}

	/**
	 * Delete existing coupon
	 * 
	 * @return
	 */
	public void deleteCoupon(String couponName) {
		driver.findElement(By.xpath("//td[text()='" + couponName + "']/preceding-sibling::td/input[@type='checkbox']"))
				.click();
		driver.findElement(By.xpath("//button[@data-original-title='Delete']")).click();
		driver.switchTo().alert().accept();
	}

	/**
	 * Verify Coupon is present 
	 * 
	 * @return
	 */
	public boolean isCouponNamePresent(String couponName) {
		return (driver.findElements(By.xpath("//td[text()='" + couponName + "']")).size()>0);

	}
}
