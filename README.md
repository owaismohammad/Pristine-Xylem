# Pristine Xylem 🌊

Pristine Xylem is a web application designed to assess the quality of water images by using a machine learning model to classify them as clean or unclean. It also provides user authentication functionality with MongoDB and JWT.

## 🚀 Features

- **User Registration and Login**: Secure user registration and login functionality 🔐.
- **Machine Learning Model**: Classifies images of water as clean or unclean 💧.
- **REST API**: Provides endpoints for user authentication and data retrieval 📡.
- **Deployment**: The backend is deployed on Render for accessibility 🌐.

## 🔧 Technologies Used

- **Node.js**: JavaScript runtime used for the backend 🟩.
- **Express.js**: Web framework for Node.js 🚂.
- **MongoDB**: NoSQL database for storing user data 📚.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB 🏗️.
- **Bcrypt.js**: Library for hashing passwords 🔒.
- **JWT (JSON Web Token)**: For secure user authentication 🎟️.
- **Render**: Platform used for deploying the backend 🚀.

## 📦 Installation

To set up the backend locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/owaismohammad/Pristine-Xylem.git
    cd Pristine-Xylem
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configuration:**

    Update the `mongoUrl` and `JWT_SECRET` in the `server.js` file with your MongoDB connection string and JWT secret key 🔑.

4. **Run the server:**

    ```bash
    npm start
    ```

    The server will start on port `5001` 🌟.

## 🔑 API Endpoints

- **GET /**: Returns a status message indicating the server is running 🟢.
- **POST /register**: Registers a new user. Requires `name`, `email`, `mobile`, and `password` in the request body 📝.
- **POST /login-user**: Authenticates a user. Requires `email` and `password` in the request body 🔑.
- **POST /userdata**: Retrieves user data. Requires a JWT token in the request body 🔍.

## 🛠️ Dependencies

This project uses the following dependencies:

- `express`: ^4.17.3
- `mongoose`: ^6.0.12
- `cors`: ^2.8.5
- `jsonwebtoken`: ^8.5.1
- `multer`: ^1.4.3
- `bcryptjs`: ^2.4.3

## 🔒 Security

- Ensure that your JWT secret key (`JWT_SECRET`) is kept confidential and not exposed in public repositories 🔒.
- Regularly update dependencies to mitigate security vulnerabilities 🔄.

## 📄 License

This project is licensed under the [MIT License](LICENSE) 📜.

## 💬 Contact

For any questions or feedback, please reach out to [owaismohammad](mailto:owaismohammad@example.com) 📧.

---

Feel free to contribute to this project or provide feedback. Your input is valuable! 🌟
