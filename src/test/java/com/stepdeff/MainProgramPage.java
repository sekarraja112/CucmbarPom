package com.stepdeff;



import org.base.LibGlobal;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.test.AdactinClickPage;
import org.test.AdactinSerchHotelPage;
import org.test.BookAHotelPage;
import org.test.BookItinerary;
import org.test.LoginPageInAdactin;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class MainProgramPage extends LibGlobal {
	
	LoginPageInAdactin loginpage;
	AdactinSerchHotelPage serachpage,sameorderid;
	AdactinClickPage clickpage;
	BookAHotelPage bookpage;
	AdactinSerchHotelPage page;
	AdactinSerchHotelPage Pages;
	BookAHotelPage book;
	AdactinSerchHotelPage check;
	BookItinerary itinerary;

	@Given("user Should Login With Login Credentials {string} and {string}")
	public void user_Should_Login_With_Login_Credentials_and(String string, String string2) {

		loginpage = new LoginPageInAdactin();
		loginpage.login(string, string2);

	}

	@When("User Should Enter The Booking Details {string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_Should_Enter_The_Booking_Details(String string, String string2, String string3, String string4,
			String string5, String string6, String string7, String string8) {
		serachpage = new AdactinSerchHotelPage();
		serachpage.serachotelPage(string, string2, string3, string4, string5, string6, string7, string8);


	}

	@When("User Should Select the hotel Page")
	public void user_Should_Select_the_hotel_Page() {
		clickpage = new AdactinClickPage();
		buttonClick(clickpage.getBtnClick());
		buttonClick(clickpage.getBtnContinue());
	}

	@When("User Should Enter Personal and Payment Details and User Should Get A Order Id {string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_Should_Enter_Personal_and_Payment_Details(String string, String string2, String string3,
			String string4, String string5, String string6, String string7, String string8) {

		bookpage = new BookAHotelPage();
		
		bookpage.bookHotel(string, string2, string3, string4, string5, string6, string7, string8);
		sameorderid=new AdactinSerchHotelPage();
		sameorderid.cancelWithSameOrderId();
		

	}

	

	@Then("User Should Sucessfully Done The Cancel Booking {string}")
	public void user_Should_Sucessfully_Done_The_Cancel_Booking(String string) {
		itinerary=new BookItinerary();
		itinerary.existingCancel();
		

	}

	@When("User Should Enter The Booking Details {string},{string},{string},{string},{string}")
	public void user_Should_Enter_The_Booking_Details(String string, String string2, String string3, String string4,
			String string5) {
		page = new AdactinSerchHotelPage();
		page.selecthotel(string, string2, string3, string4, string5);
		page.getBtnSubmit();

	}

	@When("User Should Enter The Search button")
	public void user_Should_Enter_The_Search_button() {
		serachpage = new AdactinSerchHotelPage();
		serachpage.checkLocation();
		

	}

	@Then("User Enter The Search Button")
	public void user_Enter_The_Search_Button() {
		check = new AdactinSerchHotelPage();
		check.checkInCheckout();

	}

	@When("User Should Enter The Booking Details {string}")
	public void user_Should_Enter_The_Booking_Details(String string) {
		Pages = new AdactinSerchHotelPage();
		Pages.searchButton(string);
	}

	@Then("User Should Enter BookNow Button")
	public void user_Should_Enter_BookNow_Button() {
		book = new BookAHotelPage();
		buttonClick(book.getBtnBook());

	}

}
