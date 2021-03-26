package org.test;


import org.base.LibGlobal;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookItinerary extends LibGlobal {

	public void bookItinerary() {
		PageFactory.initElements(driver, this);
	}
	
	
	@FindBy(xpath="//a[text()='Booked Itinerary']")
	private WebElement btnBookItinerary;
	
	@FindBy(id = "order_id_text")
	private WebElement txtbox;
	
	@FindBy(id = "search_hotel_id")
	private WebElement txtSearch;
	@FindBy(name = "cancelall")
	private WebElement btnCancel;
	@FindBy(id="check_all")
	private WebElement btnRadioButton;
	
	@FindBy(name="order_no")
	private WebElement txtOrderId;
	
	public WebElement getTxtOrderId() {
		return txtOrderId;
	}
	public WebElement getTxtbox() {
		return txtbox;
	}
	public WebElement getBtnRadioButton() {
		return btnRadioButton;
	}
	public void setBtnRadioButton(WebElement btnRadioButton) {
		this.btnRadioButton = btnRadioButton;
	}
	public WebElement getBtnBookItinerary() {
		return btnBookItinerary;
	}
	
	public WebElement getTxtSearch() {
		return txtSearch;
	}
	public WebElement getBtnCancel() {
		return btnCancel;
	}
	
	public void existingCancel() {
		WebElement click = driver.findElement(By.xpath("//a[text()='Booked Itinerary']"));
		buttonClick(click);
		WebElement cancel = driver.findElement(By.xpath("//input[@type='button']"));
		buttonClick(cancel);
		simpleAlert();
		WebElement cancelled = driver.findElement(By.id("search_result_error"));
		String text = getText(cancelled);
		System.out.println(text);
		Assert.assertEquals("The booking has been cancelled.", text);
		System.out.println("...........User Sucessfully Done The Cancelling Process...........");
	}
	
}
