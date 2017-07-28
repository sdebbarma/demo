package com.coe.pages;

import java.net.MalformedURLException;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BasePage { 
	protected WebDriver driver;
	public static WebDriverWait waitVar = null;
	public static Integer shortWait = 3000;
	public static Integer longWait = 10000;
	
	public BasePage(WebDriver driver, String bwsrType) { 
		this.driver = driver; 
		PageFactory.initElements(driver, this); 
	} 
	
	public void goToSite(String url) throws MalformedURLException {
		this.driver.get(url);
		waitVar = new WebDriverWait(this.driver, 15);
	}
	
	public void highlightElement(WebDriver driver, WebElement element) {
	    for (int i = 0; i < 2; i++) {
	        JavascriptExecutor js = (JavascriptExecutor) driver;
	        js.executeScript("arguments[0].setAttribute('style', arguments[1]);",
	        		element, "background-color: yellow");
	    }
	}
	
	public void pause(Integer milliseconds){
	    try {
	        TimeUnit.MILLISECONDS.sleep(milliseconds);
	    } catch (InterruptedException e) {
	        e.printStackTrace();
	    }
	}	
	public void writeOnElement(Map<String,String> fldMap, String text) {
		try {
			WebElement element = null;
			for (Map.Entry<String, String> field : fldMap.entrySet()) {
				switch (field.getKey()) {
	            	case "name":
	            	element = this.driver.findElement(By.name(field.getValue()));
	            	break;
	            	
	            	default:
		            element = null;
		            break;
		            	
				}
				break;
			}
			if(element!=null) {
				waitVar.until(ExpectedConditions.visibilityOf(element));
				this.highlightElement(this.driver, element);
				element.sendKeys(text);	
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}	
	
	public void clickOnElement(WebElement element) {
		waitVar.until(ExpectedConditions.visibilityOf(element));
		element.click();
	}
	
	public void readElement(WebElement element, String attribute) {
		//
	}
	
	public void exitSite() {
		this.driver.quit();
	}
}
