package org.runner;

import org.base.JVMReport;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;


	@RunWith(Cucumber.class)
	@CucumberOptions(features="src/test/resources",glue= {"com.stepdeff"},monochrome=true,dryRun=false,strict=true,snippets=SnippetType.UNDERSCORE,plugin= {"html:src\\test\\resources\\Reports","junit:src\\test\\resources\\Reports\\cuco.xml",
			"json:src\\test\\resources\\Reports\\my.json"},tags= {"@regression or @sanity or @smokes1 or @smokes2 or @smokes3 or Smokes4 or @regre or @regre2"})
	public class AdactinpomRunnerClass {
		@AfterClass
		public static void afterclass() {
			JVMReport.generateReport(System.getProperty("user.dir")+ "\\src\\test\\resources\\Reports\\my.json");
		}
		

}
