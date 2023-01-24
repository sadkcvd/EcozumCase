Interview project with React & Redux - State Managment Middleware Redux-Thunk 

# SUMMARY

The user, whose full name and e-mail address is received, can pay by selecting the packages they want from the packages screen.
performs the operation and sees the result screen.


# Sign Screen  -
# Post Request

{
 "fullName": "string",
 "email": "string"
}


# Packages Screen -
# Get Request

[
 {
 "imagePath": "http://placeimg.com/640/480/business",
 "name": "Paket Adı 1",
 "details": ["ipsa", "excepturi", "dolorem"],
 "tags": ["voluptatem","maiores","velit"],
 "amount": 200,
 "currency": "₺",
 "id": 1
 }
]


# Payment Screen -
# Post Request

{
 "packageIds": ["id","id"],
 "cardHolderName": "string",
 "cardNumber": "string",
 "expireDate": "string",
 "cvv": "string",
 "totalAmount": 100
}


# Result Screen -
# Get Request

{
 "content": "decoded html string"
}
