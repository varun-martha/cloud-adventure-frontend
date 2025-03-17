# Welcome to CloudAdventure

This is a web application for user registration with a profile image upload functionality. 
It allows users to register by filling in their personal details (first name, last name, email, password) and upload a profile image. The profile image is uploaded into an Amazon S3 bucket.

## Features

- User registration form with fields for `First Name`, `Last Name`, `Email`, and `Password`.
- File upload functionality for the profile image (JPG, PNG, or JPEG).
- Error handling for empty fields, invalid file types, and failed registration.
- Avatar preview before submission.

## Tech Stack

- **React** for the frontend UI.
- **CSS** for styling the components.

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** 
- **npm**

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/varun-martha/cloud-adventure-frontend.git
    ```

2. Navigate into the project directory:

    ```bash
    cd cloud-adventure-frontend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up your environment variables. Create a `.env` file at the root of the project and add the following:

    ```env
    VITE_API_URL=http://localhost:5000/api/  # URL of your backend API
    ```

    Replace `http://localhost:5000/api/` with the actual API URL for your backend.

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open your browser and navigate to `http://localhost:5173`.

## Usage

- When the page loads, you'll see a registration form with fields for first name, last name, email, password, and an option to upload a profile image.
- Fill in the required details and upload an image (either JPG, PNG, or JPEG).
- Once you fill out all fields and select a file, you can click "Register" to submit the form.
- If the form submission is successful, you will see an alert saying "Successfully created user."
- If there are any issues (e.g., missing fields, invalid file type), an appropriate error message will be displayed.

## Thank you🙏