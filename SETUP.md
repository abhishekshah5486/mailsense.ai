## Project Overview

**Project Name**: Mailsense.ai
**Version**: 0.1.0  
**Description**: Mailsense is a React-based web application designed to manage and automate email handling. It integrates various libraries and tools to provide a smooth user experience and functionality for sending, receiving, and categorizing emails.

**Technologies Used**:
- **Frontend**: React, React Router DOM
- **Backend Proxy**: Axios (for HTTP requests)
- **State Management and Cookies**: JS-Cookie
- **Environment Variables**: dotenv
- **UI/UX**: React Toastify, React Loader Spinner
- **Testing**: @testing-library/react, @testing-library/jest-dom, @testing-library/user-event

## Prerequisites

- **System Requirements**:
  - **Operating System**: Windows, macOS, or Linux
  - **RAM**: Minimum 4GB (8GB recommended)
  - **Node.js**: Version 14.x or above
  - **npm** (Node Package Manager): Version 6.x or above

- **Software Requirements**:
  - Node.js and npm must be installed on your machine. [Node.js official website](https://nodejs.org/)



## Installation Guide

#### Step 1: Clone the Repository

Open your terminal and run the following command:

```bash
git clone git@github.com:abhishekshah5486/mailsense.ai.git
```
#### Step 2: Navigate to the project directory

```bash
cd mailsense.ai
```

#### Step 3: Install the dependencies

```bash
npm install
```

#### Step 4: Environment Setup
Create a .env file in the root directory of the project to set up environment variables. Example:

```bash
REACT_APP_API_BASE_URL=http://localhost:8081
```


## Configuration

### Configuration Files

#### `.env`
Ensure environment variables such as API endpoints are correctly set.

#### `proxy` in `package.json`
The proxy is set to `http://localhost:8081`. If your backend API runs on a different port, update this accordingly.



## Running the Project

### Start the Development Server

To run the app in development mode, use the following command:

```bash
npm start
```
```bash
npm run start
```

This will start the development server on http://localhost:3000. The page will reload if you make edits, and you will see any lint errors in the console.


## Build the Project for Production

To build the app for production, which creates an optimized `build` folder, run:

```bash
npm run build
```

## Viewing the Webpage

### Accessing the Webpage

After running `npm start`, open your web browser and go to:
```bash
http://localhost:3000
```
You should see the Mailsense.ai homepage.


### Troubleshooting

- **Port Issues**: If port `3000` is already in use, either free the port or start the app on a different port.
- **Proxy Errors**: Ensure the backend server is running and accessible via the proxy configured in `package.json`.

For any issues or questions, feel free to open an issue on the GitHub repository https://github.com/abhishekshah5486/mailsense.ai.