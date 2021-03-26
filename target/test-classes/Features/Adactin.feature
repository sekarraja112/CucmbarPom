Feature: Verifying Adactin Hotel Application
	@regression
  Scenario Outline: Verifying Booking Details and Cancel Booking
    Given user Should Login With Login Credentials "<UserName>" and "<PassWord>"
    When User Should Enter The Booking Details "<Location>","<Hotels>","<RoomType>","<NoOfRooms>","<CheckInDate>","<CheckOutDate>","<AdultsPerRoom>","<ChildrensPerRoom>"
    And User Should Select the hotel Page
    And User Should Enter Personal and Payment Details and User Should Get A Order Id "<FirstName>","<LastName>","<Address>","<CardNumber>","<CardType>","<CardMonth>","<CardYear>","<Cvv>"
   
   
   
   

    Examples: 
      | UserName     | PassWord     | Location | Hotels      | RoomType | NoOfRooms | CheckInDate | CheckOutDate | AdultsPerRoom | ChildrensPerRoom | FirstName | LastName  | Address | CardNumber       | CardType         | CardMonth | CardYear | Cvv |
      | rajasekar144 | 820613106059 | Sydney   | Hotel Creek | Double   | 1 - One   | 22/03/2021  | 23/03/2021   | 2 - Two       | 2 - Two          | Rajsekar  | SekarRaja | Chennai | 1234567890901234 | American Express | February  |     2012 | 123 |
      
      @sanity
	Scenario Outline: Verifying Booking Details and Cancel Booking
    Given user Should Login With Login Credentials "<UserName>" and "<PassWord>"
    Then User Should Sucessfully Done The Cancel Booking "<BookingId>"
    
    
    Examples:
    
    | UserName     | PassWord     |BookingId|
    | rajasekar144 | 820613106059 |I9923O2K76|