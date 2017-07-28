package com.coe.pages;

import static org.junit.Assert.assertEquals;

import java.util.LinkedHashMap;
import java.util.Map;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class EmiCalculatorPage extends BasePage {
	/*
	@FindBy(name="lnAmount") 
	private WebElement loanAmount; 
	
	@FindBy(name="lnRate") 
	private WebElement loanRate; 
	
	@FindBy(name="lnTerm") 
	private WebElement loanTerm; 
	*/
	@FindBy(name="Calculate") 
	private WebElement calculate; 
	
	@FindBy(name="lnPayment") 
	private WebElement payableEmi; 
	
	public EmiCalculatorPage(WebDriver driver) { 
		super(driver, ""); 
	}
	
	public void enterLoanAmount(String loanAmount){ 
		Map<String, String> fldAmount = new LinkedHashMap<String, String>();
		fldAmount.put("name","lnAmount");
		this.writeOnElement(fldAmount, loanAmount);
	}	
	
	public void calculateEmi(){ 
		this.clickOnElement(this.calculate);
		this.pause(shortWait);
	}
	
	public void assertEmi(String emi, String attrib){ 
		if (this.payableEmi.isDisplayed()) {
			this.pause(shortWait);
			assertEquals(emi, this.payableEmi.getAttribute(attrib));
		}
	}
}
