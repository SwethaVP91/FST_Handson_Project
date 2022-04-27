package pages;

import org.openqa.selenium.By;

public class LoginPage  extends BasePage{
	
	/*
	 * Application launch
	 */
	public void launchApplication() {
		 driver.get("http://retailm1.upskills.in/admin/index.php");
	}
	
	/*
	 * Enters user name
	 */
	public void enterUsername(String userName) {
		 driver.findElement(By.id("input-username")).sendKeys(userName);
	}

	/*
	 * Enters password
	 */
	public void enterPassword(String password) {
		 driver.findElement(By.id("input-password")).sendKeys(password);
	}

	/*
	 * Clicks on login button
	 */
	public DashboardPage clickOnLogin() {
		driver.findElement(By.cssSelector("button.btn-primary")).click();
		return new DashboardPage();
	}


}
