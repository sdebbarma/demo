package com.coe.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome = true,
		plugin = { 
				"pretty", 
				"html:target/html/cucumber", 
				"json:target/cucumber.json"
				},
		features = "src/test/resources/features",
        glue = "com.coe.steps"
)

public class TestRunner {
}
