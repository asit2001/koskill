# CRM Documentation

This documentation provides an overview of the frontend functionality and features of the CRM (Customer Relationship Management) application.

## Requirements

Before using the CRM , ensure that you have the following software and dependencies installed on your machine:

- Node.js (v14 or higher)
- Package manager (npm or yarn)

## Frontend

### Installation

To set up the , follow these steps:

1. Clone the project repository from the provided source.
2. Open a terminal and navigate to the project directory.
3. Install the dependencies by running the following command:

```bash
cd repo/frontend
npm install
```

### Configuration

Before running the frontend, ensure that the backend API base URL is correctly configured. Open the .env file in the project root directory and set the value for REACT_APP_API to the base URL of the CRM backend API.

### Usage

To start the CRM frontend, use the following command:

```bash
npm start
```

This command will start the development server and open the CRM application in your default web browser at <http://localhost:3000>.

### Features

The CRM frontend provides the following features and functionality:

1. Display a list of all customers with their basic information, including name, email, phone number, and address.

2. Add a form to create a new customer. The form includes fields for name, email, phone number, address, city, state, country, and PIN code.

3. View detailed information about a specific customer, including their name, email, phone number, address, city, state, country, and PIN code.

4. Edit and update customer details. Users can modify any of the customer's information and save the changes.

5. Delete a customer from the CRM. Users can remove a customer entry, and a confirmation prompt will be displayed to confirm the deletion.

6. User authentication and authorization. Users can sign up for an account, log in with their credentials, and log out of the CRM application.

7. Validation and error handling. The frontend implements form validation to ensure that data is properly entered and handles errors gracefully.

8. Search functionality. Users can search for customers based on their name, email, or city. The search results are displayed in real-time as the user types.

9. Pagination. The list of customers is divided into pages to improve performance when there are a large number of customers. Users can navigate through the pages to view different sets of customers.

10. Sorting. Users can sort the list of customers based on different criteria such as name, creation date, or last activity. Clicking on the sorting options triggers the sorting functionality.

### Future Improvements

Given more time, here are some additional features and improvements that could be implemented in the CRM frontend:

1. Make the website fully responsive. Ensure that the CRM frontend is optimized for different screen sizes and devices, providing a seamless user experience across desktop, tablet, and mobile devices.

2. Enhance the user interface (UI) and user experience (UX). Continuously improve the design and layout of the CRM application, making it visually appealing, intuitive, and user-friendly.

3. Implement server-side pagination. Modify the backend API to support server-side pagination, allowing the frontend to fetch and display data in smaller chunks. This improves performance when there are a large number of customers by reducing the amount of data transferred.

4. Implement more secure logout using a KV (Key-Value) database. Enhance the logout functionality by storing and managing session data in a KV database, providing additional security measures to prevent session hijacking.

*** Please make sure to replace "repo" with the actual name of the repository.

## Backend

Please refer to the [backend/README.md](backend/README.md) file for detailed instructions on setting up and running the CRM backend. The backend README.md provides information on installation, configuration, and usage of the backend server, as well as an overview of the API routes and available endpoints.

Feel free to explore the backend README.md file for more information on the backend setup and functionality.

If you have any further questions or need assistance, please let me know.
