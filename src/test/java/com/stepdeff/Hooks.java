package com.stepdeff;

import org.base.LibGlobal;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends LibGlobal {

	@Before
	public void beforeScenario() {
		getDriver();
		loadUrl("http://adactinhotelapp.com/index.php");
		maximize();
	}
	@After
	public void afterScenario(Scenario scenario) {
		TakesScreenshot screenshot=(TakesScreenshot) driver;
		byte[] screenshotAs = screenshot.getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshotAs, "img/pass");
		
	}
}
