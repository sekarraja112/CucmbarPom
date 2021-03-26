package org.test;

import org.base.LibGlobal;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import junit.framework.Assert;

public class BookAHotelPage extends LibGlobal {
	public BookAHotelPage() {

		PageFactory.initElements(driver, this);

	}

	@FindBy(id = "first_name")
	private WebElement txtFirstName;
	@FindBy(id = "last_name")
	private WebElement txtPassWord;
	@FindBy(id = "address")
	private WebElement txtAddress;
	@FindBy(id = "cc_num")
	private WebElement txtCardNumber;
	@FindBy(id = "cc_type")
	private WebElement dDnCardType;
	@FindBy(id = "cc_exp_month")
	private WebElement dDnMonth;
	@FindBy(id = "cc_exp_year")
	private WebElement dDnYear;
	@FindBy(id = "cc_cvv")
	private WebElement txtCvv;
	@FindBy(id = "book_now")
	private WebElement btnBook;
	@FindBy(id = "order_no")
	private WebElement getOrderId;

	public WebElement getGetOrderId() {
		return getOrderId;
	}

	public void setGetOrderId(WebElement getOrderId) {
		this.getOrderId = getOrderId;
	}

	public WebElement getTxtFirstName() {
		return txtFirstName;
	}

	public WebElement getTxtPassWord() {
		return txtPassWord;
	}

	public WebElement getTxtAddress() {
		return txtAddress;
	}

	public WebElement getTxtCardNumber() {
		return txtCardNumber;
	}

	public WebElement getdDnCardType() {
		return dDnCardType;
	}

	public WebElement getdDnMonth() {
		return dDnMonth;
	}

	public WebElement getdDnYear() {
		return dDnYear;
	}

	public WebElement getTxtCvv() {
		return txtCvv;
	}

	public WebElement getBtnBook() {
		return btnBook;
	}

	public void bookHotel(String FirstName, String LastName, String Address, String CardNumber, String CardType,
			String CardMonth, String CardYear, String Cvv) {
		sendKey(txtFirstName, FirstName);
		sendKey(txtPassWord, LastName);
		sendKey(txtAddress, Address);
		sendKey(txtCardNumber, CardNumber);
		selctbytext(dDnCardType, CardType);
		selctbytext(dDnMonth, CardMonth);
		selctbytext(dDnYear, CardYear);
		sendKey(txtCvv, Cvv);
		buttonClick(btnBook);
		
	}

	public void booknow() {
		WebElement book = driver.findElement(By.id("book_now"));
		buttonClick(book);
		WebElement firstname = driver.findElement(By.id("first_name_span"));
		String text = firstname.getText();
		assertEquls("Please Enter your First Name", text);
		WebElement lastname = driver.findElement(By.id("last_name_span"));
		String text2 = lastname.getText();
		assertEquls("Please Enter you Last Name", text2);
		WebElement address = driver.findElement(By.id("address_span"));
		String text3 = address.getText();
		assertEquls("Please Enter your Address", text3);
		WebElement cardnum = driver.findElement(By.id("cc_num_span"));
		String text4 = cardnum.getText();
		assertEquls("Please Enter your 16 Digit Credit Card Number", text4);
		WebElement cardtype = driver.findElement(By.id("cc_type_span"));
		String text5 = cardtype.getText();
		assertEquls("Please Select your Credit Card Type", text5);
		WebElement month = driver.findElement(By.id("cc_expiry_span"));
		String text6 = month.getText();
		assertEquls("Please Select your Credit Card Expiry Month", text6);
		WebElement cvv = driver.findElement(By.id("cc_cvv_span"));
		String text7 = cvv.getText();
		assertEquls("Please Enter your Credit Card CVV Number", text7);
		}

}