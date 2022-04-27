package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class DashboardPage extends BasePage{

	/*
	 * Clicks on navigate to Coupons page
	 */
	public CouponPage navigateToMarketingCoupons() {
		
		WebElement ele = driver.findElement(By.xpath("//*[@id=\"menu-marketing\"]/a"));

		//Creating object of an Actions class
		Actions action = new Actions(driver);

		//Performing the mouse hover action on the target element.
		action.moveToElement(ele).perform();
		
		driver.findElement(By.xpath("//li[@id='menu-marketing']/ul/li/a[contains(text(),'Coupons')]")).click();
		
		return new CouponPage();

	}

}
