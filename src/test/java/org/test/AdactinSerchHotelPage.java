package org.test;

import org.base.LibGlobal;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class AdactinSerchHotelPage extends LibGlobal {
	public AdactinSerchHotelPage() {
		PageFactory.initElements(driver, this);
	}
	@FindBy(id="location")
	private WebElement dDnLocation;
	@FindBy(id="hotels")
	private WebElement dDnhotels;
	@FindBy(id="room_type")
	private WebElement dDnRoomType;
	@FindBy(id="room_nos")
	private WebElement dDnNoOfRooms;
	@FindBy(id="datepick_in")
	private WebElement txtCheckInDate;
	@FindBy(id="datepick_out")
	private WebElement txtCheckOutDate;
	@FindBy(id="adult_room")
	private WebElement dDnAdultRoom;
	@FindBy(id="child_room")
	private WebElement dDnChildRoom;
	@FindBy(id="Submit")
	private WebElement btnSubmit;
	public WebElement getBtnSubmit() {
		return btnSubmit;
	}
	public void setBtnSubmit(WebElement btnSubmit) {
		this.btnSubmit = btnSubmit;
	}
	public WebElement getdDnLocation() {
		return dDnLocation;
	}
	public WebElement getdDnhotels() {
		return dDnhotels;
	}
	public WebElement getdDnRoomType() {
		return dDnRoomType;
	}
	public WebElement getdDnNoOfRooms() {
		return dDnNoOfRooms;
	}
	public WebElement getTxtCheckInDate() {
		return txtCheckInDate;
	}
	public WebElement getTxtCheckOutDate() {
		return txtCheckOutDate;
	}
	public WebElement getdDnAdultRoom() {
		return dDnAdultRoom;
	}
	public WebElement getdDnChildRoom() {
		return dDnChildRoom;
	}
	public void serachotelPage(String Location,String Hotels,String Roomtype,String NoOfRooms,String CheckIndate,
							String CheckOutDate,String AdultsPerRoom,String ChildrensPerRoom) {
		
		
		selctbytext(dDnLocation, Location);
		selctbytext(dDnhotels, Hotels);
		selctbytext(dDnRoomType, Roomtype);
		selctbytext(dDnNoOfRooms, NoOfRooms);
		clear(txtCheckInDate);
		sendKey(txtCheckInDate, CheckIndate);
		clear(txtCheckOutDate);
		sendKey(txtCheckOutDate, CheckOutDate);
		selctbytext(dDnAdultRoom, AdultsPerRoom);
		selctbytext(dDnChildRoom, ChildrensPerRoom);
		buttonClick(btnSubmit);
		}
	public void selecthotel(String Location,String NoOfRooms,String CheckIndate,String CheckOutDate,String AdultsPerRoom) {
		selctbytext(dDnLocation, Location);
		selctbytext(dDnNoOfRooms, NoOfRooms);
		clear(txtCheckInDate);
		sendKey(txtCheckInDate, CheckIndate);
		clear(txtCheckOutDate);
		sendKey(txtCheckOutDate, CheckOutDate);
		selctbytext(dDnAdultRoom, AdultsPerRoom);
		buttonClick(btnSubmit);
		
	}
	public void searchButton(String Location ) {
		
		buttonClick(btnSubmit);
		WebElement error = driver.findElement(By.id("location_span"));
		String text = error.getText();
		System.out.println(text);
		assertEquls("Please Select a Location", text);
		
	}
	public void checkInCheckout() {
		WebElement error = driver
				.findElement(By.xpath("//span[text()='Check-In Date shall be before than Check-Out Date']"));
		WebElement error1 = driver
				.findElement(By.xpath("//span[text()='Check-Out Date shall be after than Check-In Date']"));
		String text2 = error1.getText();
		String text = error.getText();
		System.out.println(text2);
		System.out.println(text);
		Assert.assertEquals("Check-In Date shall be before than Check-Out Date", text);
		Assert.assertEquals("Check-Out Date shall be after than Check-In Date", text2);
	}
	
	
	public void checkLocation() {
		buttonClick(getBtnSubmit());
		WebElement error = driver.findElement(By.id("location_span"));
		String text = error.getText();
		System.out.println(text);
	}
	public void cancelWithSameOrderId() {
		WebElement book = driver.findElement(By.xpath("//a[text()='Booked Itinerary']"));
		buttonClick(book);
		
		WebElement type = driver.findElement(By.xpath("//input[@type='button']"));
		buttonClick(type);
		simpleAlert();
		
	}
}
