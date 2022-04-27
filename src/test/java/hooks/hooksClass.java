package hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.Before;

public class hooksClass {
	public static WebDriver driver;
	@Before
	public void init() {
		System.setProperty("webdriver.chrome.driver","C:/Webdriver/chromedriver.exe");
		driver = new ChromeDriver();
		
	}

}
