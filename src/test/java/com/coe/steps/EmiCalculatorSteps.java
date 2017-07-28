package com.coe.steps;

import java.net.MalformedURLException;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.coe.lib.ConfigReader;
import com.coe.pages.EmiCalculatorPage;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class EmiCalculatorSteps {
	
	protected static WebDriver driver;	
	protected static boolean isWeb = false;	
	private static Properties prop = new Properties();
	
	@Before 
	public static void setUp(Scenario scenario){
		System.out.print("\nTag: " + isWeb);
		for (String tag : scenario.getSourceTagNames()) {
			System.out.print("\nTag: " + tag);	
			if (isWeb == false) {
				if (tag.toString().indexOf("web") > 0) {
					isWeb = true;					
					break;
				}
			}
	    }
		System.out.print("\nTag:: " + isWeb);

		if (isWeb == true) {
			driver = new ChromeDriver(); 	
			driver.manage().window().maximize();		
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS); 
		} else {
			driver = null;
		}
	} 
	
	@After 
    public void cleanUp(){ 
		if(driver != null) {
			driver.manage().deleteAllCookies();
			driver.close();
		}	
		isWeb = false;	
	}
	
    @Given("^User navigates to website$")
    public void navigate_to_website() throws MalformedURLException,	InterruptedException {
    	ConfigReader config = new ConfigReader();
		EmiCalculatorPage page = new EmiCalculatorPage(driver);
    	page.goToSite(config.readProperty("baseUrl"));
	}
    
	@When("^User provides loan amount as \"([^\"]*)\"$")
    public void enter_loan_amount(String loanAmount) throws InterruptedException {
		EmiCalculatorPage page = new EmiCalculatorPage(driver);
        page.enterLoanAmount(loanAmount);       
    }
    
	@When("^Loan rate and term as rate and term respectively$")
    public void provide_valid_loan_details(Map<String,String> loanFields) throws InterruptedException {
		EmiCalculatorPage page = new EmiCalculatorPage(driver);
		for (Map.Entry<String, String> field : loanFields.entrySet()) {
			String[] fldArray = field.getKey().split(":");
			Map<String, String> fldLoan = new LinkedHashMap<String, String>();			
			fldLoan.put(new String(fldArray[0]),new String(fldArray[1]));
			page.writeOnElement(fldLoan, field.getValue());			
		}
    }
	
    @When("^User clicks on Calculate button$")
    public void calculate_emi() throws InterruptedException {
    	EmiCalculatorPage page = new EmiCalculatorPage(driver);
    	page.calculateEmi();
    }

    @Then("^System shows expected emi as \"([^\"]*)\"$")
    public void verify_emi(String emi) throws InterruptedException {
    	EmiCalculatorPage page = new EmiCalculatorPage(driver);
    	page.assertEmi(emi, "value");
    }
}
