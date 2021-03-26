$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Adactin.feature");
formatter.feature({
  "name": "Verifying Adactin Hotel Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Booking Details and Cancel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user Should Login With Login Credentials \"\u003cUserName\u003e\" and \"\u003cPassWord\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User Should Enter The Booking Details \"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoomType\u003e\",\"\u003cNoOfRooms\u003e\",\"\u003cCheckInDate\u003e\",\"\u003cCheckOutDate\u003e\",\"\u003cAdultsPerRoom\u003e\",\"\u003cChildrensPerRoom\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Should Select the hotel Page",
  "keyword": "And "
});
formatter.step({
  "name": "User Should Enter Personal and Payment Details and User Should Get A Order Id \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cAddress\u003e\",\"\u003cCardNumber\u003e\",\"\u003cCardType\u003e\",\"\u003cCardMonth\u003e\",\"\u003cCardYear\u003e\",\"\u003cCvv\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "PassWord",
        "Location",
        "Hotels",
        "RoomType",
        "NoOfRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsPerRoom",
        "ChildrensPerRoom",
        "FirstName",
        "LastName",
        "Address",
        "CardNumber",
        "CardType",
        "CardMonth",
        "CardYear",
        "Cvv"
      ]
    },
    {
      "cells": [
        "rajasekar144",
        "820613106059",
        "Sydney",
        "Hotel Creek",
        "Double",
        "1 - One",
        "22/03/2021",
        "23/03/2021",
        "2 - Two",
        "2 - Two",
        "Rajsekar",
        "SekarRaja",
        "Chennai",
        "1234567890901234",
        "American Express",
        "February",
        "2012",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Booking Details and Cancel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Should Login With Login Credentials \"rajasekar144\" and \"820613106059\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Login_With_Login_Credentials_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Enter The Booking Details \"Sydney\",\"Hotel Creek\",\"Double\",\"1 - One\",\"22/03/2021\",\"23/03/2021\",\"2 - Two\",\"2 - Two\"",
  "keyword": "When "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Enter_The_Booking_Details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Select the hotel Page",
  "keyword": "And "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Select_the_hotel_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Enter Personal and Payment Details and User Should Get A Order Id \"Rajsekar\",\"SekarRaja\",\"Chennai\",\"1234567890901234\",\"American Express\",\"February\",\"2012\",\"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Enter_Personal_and_Payment_Details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Booking Details and Cancel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "user Should Login With Login Credentials \"\u003cUserName\u003e\" and \"\u003cPassWord\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User Should Sucessfully Done The Cancel Booking \"\u003cBookingId\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "PassWord",
        "BookingId"
      ]
    },
    {
      "cells": [
        "rajasekar144",
        "820613106059",
        "I9923O2K76"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Booking Details and Cancel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Should Login With Login Credentials \"rajasekar144\" and \"820613106059\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Login_With_Login_Credentials_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Sucessfully Done The Cancel Booking \"I9923O2K76\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Sucessfully_Done_The_Cancel_Booking(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Booking.feature");
formatter.feature({
  "name": "Verifying Adactin Hotel Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Booking Details and Cancel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.step({
  "name": "user Should Login With Login Credentials \"\u003cUserName\u003e\" and \"\u003cPassWord\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User Should Enter The Booking Details \"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoomType\u003e\",\"\u003cNoOfRooms\u003e\",\"\u003cCheckInDate\u003e\",\"\u003cCheckOutDate\u003e\",\"\u003cAdultsPerRoom\u003e\",\"\u003cChildrensPerRoom\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Should Select the hotel Page",
  "keyword": "And "
});
formatter.step({
  "name": "User Should Enter Personal and Payment Details and User Should Get A Order Id \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cAddress\u003e\",\"\u003cCardNumber\u003e\",\"\u003cCardType\u003e\",\"\u003cCardMonth\u003e\",\"\u003cCardYear\u003e\",\"\u003cCvv\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "PassWord",
        "Location",
        "Hotels",
        "RoomType",
        "NoOfRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsPerRoom",
        "ChildrensPerRoom",
        "FirstName",
        "LastName",
        "Address",
        "CardNumber",
        "CardType",
        "CardMonth",
        "CardYear",
        "Cvv"
      ]
    },
    {
      "cells": [
        "rajasekar144",
        "820613106059",
        "Sydney",
        "Hotel Creek",
        "Double",
        "1 - One",
        "22/03/2021",
        "23/03/2021",
        "2 - Two",
        "2 - Two",
        "Rajsekar",
        "SekarRaja",
        "Chennai",
        "1234567890901234",
        "American Express",
        "February",
        "2012",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Booking Details and Cancel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regre"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Should Login With Login Credentials \"rajasekar144\" and \"820613106059\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Login_With_Login_Credentials_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Enter The Booking Details \"Sydney\",\"Hotel Creek\",\"Double\",\"1 - One\",\"22/03/2021\",\"23/03/2021\",\"2 - Two\",\"2 - Two\"",
  "keyword": "When "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Enter_The_Booking_Details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Select the hotel Page",
  "keyword": "And "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Select_the_hotel_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Enter Personal and Payment Details and User Should Get A Order Id \"Rajsekar\",\"SekarRaja\",\"Chennai\",\"1234567890901234\",\"American Express\",\"February\",\"2012\",\"123\"",
  "keyword": "And "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Enter_Personal_and_Payment_Details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Booking Details and Cancel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regre2"
    }
  ]
});
formatter.step({
  "name": "user Should Login With Login Credentials \"\u003cUserName\u003e\" and \"\u003cPassWord\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User Should Enter The Booking Details \"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoomType\u003e\",\"\u003cNoOfRooms\u003e\",\"\u003cCheckInDate\u003e\",\"\u003cCheckOutDate\u003e\",\"\u003cAdultsPerRoom\u003e\",\"\u003cChildrensPerRoom\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Should Select the hotel Page",
  "keyword": "And "
});
formatter.step({
  "name": "User Should Enter BookNow Button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "PassWord",
        "Location",
        "Hotels",
        "RoomType",
        "NoOfRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsPerRoom",
        "ChildrensPerRoom"
      ]
    },
    {
      "cells": [
        "rajasekar144",
        "820613106059",
        "Sydney",
        "Hotel Creek",
        "Double",
        "1 - One",
        "22/03/2021",
        "23/03/2021",
        "2 - Two",
        "2 - Two"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Booking Details and Cancel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regre2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Should Login With Login Credentials \"rajasekar144\" and \"820613106059\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Login_With_Login_Credentials_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Enter The Booking Details \"Sydney\",\"Hotel Creek\",\"Double\",\"1 - One\",\"22/03/2021\",\"23/03/2021\",\"2 - Two\",\"2 - Two\"",
  "keyword": "When "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Enter_The_Booking_Details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Select the hotel Page",
  "keyword": "And "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Select_the_hotel_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Enter BookNow Button",
  "keyword": "Then "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Enter_BookNow_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/SearchPage.feature");
formatter.feature({
  "name": "Verifying Adactin Hotel Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Booking Details and Cancel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokes1"
    }
  ]
});
formatter.step({
  "name": "user Should Login With Login Credentials \"\u003cUserName\u003e\" and \"\u003cPassWord\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User Should Enter The Booking Details \"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoomType\u003e\",\"\u003cNoOfRooms\u003e\",\"\u003cCheckInDate\u003e\",\"\u003cCheckOutDate\u003e\",\"\u003cAdultsPerRoom\u003e\",\"\u003cChildrensPerRoom\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "PassWord",
        "Location",
        "Hotels",
        "RoomType",
        "NoOfRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsPerRoom",
        "ChildrensPerRoom"
      ]
    },
    {
      "cells": [
        "rajasekar144",
        "820613106059",
        "Sydney",
        "Hotel Creek",
        "Double",
        "1 - One",
        "22/03/2021",
        "23/03/2021",
        "2 - Two",
        "2 - Two"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Booking Details and Cancel Booking",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokes1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Should Login With Login Credentials \"rajasekar144\" and \"820613106059\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Login_With_Login_Credentials_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Enter The Booking Details \"Sydney\",\"Hotel Creek\",\"Double\",\"1 - One\",\"22/03/2021\",\"23/03/2021\",\"2 - Two\",\"2 - Two\"",
  "keyword": "When "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Enter_The_Booking_Details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Booking Details With Mandatory",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokes2"
    }
  ]
});
formatter.step({
  "name": "user Should Login With Login Credentials \"\u003cUserName\u003e\" and \"\u003cPassWord\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User Should Enter The Booking Details \"\u003cLocation\u003e\",\"\u003cNoOfRooms\u003e\",\"\u003cCheckInDate\u003e\",\"\u003cCheckOutDate\u003e\",\"\u003cAdultsPerRoom\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "PassWord",
        "Location",
        "NoOfRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsPerRoom"
      ]
    },
    {
      "cells": [
        "rajasekar144",
        "820613106059",
        "Sydney",
        "1 - One",
        "22/03/2021",
        "23/03/2021",
        "2 - Two"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Booking Details With Mandatory",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokes2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Should Login With Login Credentials \"rajasekar144\" and \"820613106059\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Login_With_Login_Credentials_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Enter The Booking Details \"Sydney\",\"1 - One\",\"22/03/2021\",\"23/03/2021\",\"2 - Two\"",
  "keyword": "When "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Enter_The_Booking_Details(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verifying Booking Details Changeing with CheckIn and CheckOut Dates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokes3"
    }
  ]
});
formatter.step({
  "name": "user Should Login With Login Credentials \"\u003cUserName\u003e\" and \"\u003cPassWord\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "User Should Enter The Booking Details \"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoomType\u003e\",\"\u003cNoOfRooms\u003e\",\"\u003cCheckInDate\u003e\",\"\u003cCheckOutDate\u003e\",\"\u003cAdultsPerRoom\u003e\",\"\u003cChildrensPerRoom\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Enter The Search Button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "PassWord",
        "Location",
        "Hotels",
        "RoomType",
        "NoOfRooms",
        "CheckInDate",
        "CheckOutDate",
        "AdultsPerRoom",
        "ChildrensPerRoom"
      ]
    },
    {
      "cells": [
        "rajasekar144",
        "820613106059",
        "Sydney",
        "Hotel Creek",
        "Double",
        "1 - One",
        "22/05/2021",
        "23/03/2021",
        "2 - Two",
        "2 - Two"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Booking Details Changeing with CheckIn and CheckOut Dates",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokes3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user Should Login With Login Credentials \"rajasekar144\" and \"820613106059\"",
  "keyword": "Given "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Login_With_Login_Credentials_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Should Enter The Booking Details \"Sydney\",\"Hotel Creek\",\"Double\",\"1 - One\",\"22/05/2021\",\"23/03/2021\",\"2 - Two\",\"2 - Two\"",
  "keyword": "When "
});
formatter.match({
  "location": "MainProgramPage.user_Should_Enter_The_Booking_Details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Enter The Search Button",
  "keyword": "Then "
});
formatter.match({
  "location": "MainProgramPage.user_Enter_The_Search_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});