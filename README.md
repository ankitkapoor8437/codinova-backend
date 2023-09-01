# Crypto Exchange Listing App - Backend [ Codinova ]

Welcome to the Crypto Exchange Listing App backend repository! This backend provides API endpoints for managing cryptocurrency exchange data and exchange icon data. It integrates with the Coinapi.io API for fetching exchange data and utilizes MongoDB for data storage.

## Features

- **GET Exchange Data:** Retrieve a list of cryptocurrency exchange data from the database.
- **POST Exchange Data:** Fetch latest exchange data from the Coinapi.io API and store it in the database.
- **GET Exchange Icons:** Fetch exchange icons from the Coinapi.io API and return them to the frontend.
- **POST Exchange Data:** Fetch latest exchange icons from the Coinapi.io API and store it in the database
- 
## Getting Started

To set up and run the Crypto Exchange Listing App backend on your local machine, follow these steps:

1. **Clone the Repository:**
2. **Navigate to the Project Directory:**
3. **Install Dependencies:**
4. **Configure Environment Variables:**
Create a `.env` file in the project root and set the following environment variables:
PORT=3000
MONGODB_URI=<your-mongodb-connection-uri>
COINAPI_API_KEY=<your-coinapi-api-key>
5. **Start Server:**


The server will start, and you can access the API endpoints at `http://localhost:3000`.

## Folder Structure

The project's backend follows a structured organization to manage various components. Here's an overview of the important directories:

- `config/`: Contains configuration files.
- `dbconfig.js`: Connects to the MongoDB database using Mongoose.
- `controllers/`: Contains route controller functions.
- `exchangeDataController.js`: Implements GET and POST API for exchange data.
- `exchangeIconController.js`: Implements GET API for exchange icons.
- `models/`: Defines MongoDB schemas.
- `exchange.js`: Defines the Exchange model.
- `routes/`: Defines API routes.
- - `index.js`: Initializes the Express server.

## API Endpoints

- `GET /api/exchange`: Get a list of cryptocurrency exchange data.
- `POST /api/exchange`: Fetch and store latest exchange data from Coinapi.io API.
- `GET /api/icons`: Fetch and return exchange icons from Coinapi.io API.

## Usage

- Use the provided API endpoints to manage and fetch cryptocurrency exchange data.
- Configure your MongoDB connection and Coinapi.io API key in the `.env` file.
- Customize and expand the API controllers and routes to add more features.

## Contributing

Contributions are welcome! If you have improvements or new features to add, follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Push the changes to your fork.
5. Create a pull request on the original repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have questions or need assistance, feel free to contact the project maintainers.

---

Happy coding and data fetching!
