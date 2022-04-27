package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/feature",glue={"stepdefinition","hooks"},
monochrome=true,
dryRun=false,
tags= {"@All"},
//tags= {"@tag1","@regression"},// AND condition
//tags= {"@tag1,@regression"},// OR condition
//tags= {"~@tag1"}, //Skip tags 
plugin= {"pretty","html:reports/htmlreport"}
)
public class TestRunner {

}
