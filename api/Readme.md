# API Documentation

# Status

### GET /status - Get System Status

- Method: GET
- Response Format: JSON
- Description: Fetches the status of the system or service.

# Auth

### POST /auth/signin - User Sign In

- Method: POST
- Request Format: JSON
- Request Body: Based on the SigninSchema
- Response Format: JSON
- Description: Authenticates a user and returns a JWT token if the provided credentials match a user record in the database.

### POST /auth/signup - User Sign Up

- Method: POST
- Request Format: JSON
- Request Body: Based on the SignupSchema
- Response Format: JSON
- Description: Sign up creates a new user record in the database, and returns a JWT token that represents the newly created user.

## Schemas

### SigninSchema

- `name`: a string indicating the user's name.
- `email`: a string in email format indicating the user's email.
- `password`: a string with a minimum length of 8 characters indicating the user's password.
- `birthday`: a string implying the date of the user's birth. The value is treated as date.

```json
{
    "name": "John Doe",
    "email": "johndoe@mail.com",
    "password": "strong@p@ss",
    "birthday": "2000-01-01"
}
```

### SignupSchema

- `email`: a string indicating the user's email.
- `password`: a string with a minimum length of 8 characters indicating the user's password.

```json
{
    "email": "johndoe@mail.com",
    "password": "strong@p@ss"
}
```

# Events

### GET /events - List All Events

- Method: GET
- Authorization: JWT token required
- Response Format: JSON
- Description: Fetches a list of all events.

### GET /events/mine - List User's Own Events

- Method: GET
- Authorization: JWT token required
- Response Format: JSON
- Description: Returns a list of all events created by the authenticated user.

### GET /events/:id - Get Event by ID

- Method: GET
- Authorization: JWT token required
- Response Format: JSON
- Request Parameters: id (Event ID)
- Description: Fetches a specific event using its id.

### POST /events - Create New Event

- Method: POST
- Authorization: JWT token required
- Request Format: JSON
- Request Body: Based on the EventSchema
- Response Format: JSON
- Description: Creates a new event with the data sent in the request body.

### POST /events/:id/subscribe - Subscribe to an Event

- Method: POST
- Authorization: JWT token required
- Request Parameters: id (Event ID)
- Response Format: JSON
- Description: Subscribes the authenticated user to the specified event by its id. If the operation is successful, response includes the subscription record. If the event does not exist, the response will be a 404 error with a relevant message.

### POST /events/:id/unsubscribe - Unsubscribe from an Event

- Method: POST
- Authorization: JWT token required
- Request Parameters: id (Event ID)
- Description: Unsubscribes the authenticated user from the specified event by its id. If the operation is successful, it will respond with a 204 status code. If the event does not exist or user is not already subscribed, the response will be an error with a relevant message.

### PUT /events/:id - Update Event

- Method: PUT
- Authorization: JWT token required
- Request Format: JSON
- Request Parameters: id (Event ID)
- Request Body: Based on the EventSchema
- Response Format: JSON
- Description: Updates the specific event using its id with the data provided in the request body.

### DELETE /events/:id - Remove Event

- Method: DELETE
- Authorization: JWT token required
- Request Parameters: id (Event ID)
- Description: Deletes the specific event using its id.

## Schemas

### EventSchema

- `name`: a string indicating the event's name. It must be between 5 and 150 characters.
- `description`: a string giving a description of the event. It should not exceed 500 characters.
- `city`: a string identifying the city where the event takes place. It should be between 3 and 50 characters long.
- `state`: a string identifying the state where the event occurs. Its length should range between 3 and 50 characters.
- `country`: a string specifying the country of the event. It should be between 3 and 50 characters long.
- `zipCode`: a string representing the zip code. It should follow the pattern 'xxxxx-xxx', where 'x' is a digit.
- `latitude`: a string representing the latitude of the event location. It must match the regex pattern for valid latitude coordinates.
- `longitude`: a string representing the longitude of the event location. It must match the regex pattern for valid longitude coordinates.
- `onlyAdults`: a boolean indicating whether the event is for adults only. The default value is `false`.
- `showUsers`: a boolean indicating whether to show users or not. The default is `true`.

```json
{
    "name": "Party at home",
    "description": "Let's go drink and play some games",
    "city": "Itajaí",
    "state": "Santa Catarina",
    "country": "Brazil",
    "zipCode": "88888-000",
    "latitude": "2.00",
    "longitude": "2.00",
    "onlyAdults": true,
    "showUsers": true
}
```
