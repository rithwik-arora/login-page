# Login and Signup Page with SQLite Database

## Overview
This project is a **Login and Signup Page** designed with **HTML, CSS, and JavaScript** for the frontend and **Node.js with Express.js** for the backend. User data is securely stored in an **SQLite database**, ensuring that user information remains persistent even after the server is shut down and restarted.

## Features
- **User Authentication:** Secure login and signup functionality.
- **Database Storage:** Uses **SQLite** to store user credentials permanently.
- **Styled UI:** The frontend is designed with **CSS** to provide a modern and responsive interface.
- **Password Hashing:** Ensures security by hashing passwords before storing them in the database.
- **Session Management:** Keeps users logged in during active sessions.

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [SQLite](https://www.sqlite.org/)

### Steps to Run the Project
1. **Clone the repository:**
   ```sh
   git clone <repository_url>
   cd login-signup-project
   ```
2. **Install dependencies:**
   ```sh
   npm install express sqlite3 body-parser
   ```
3. **Run the server:**
   ```sh
   node server.js
   ```
4. **Access the application:**
   Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Project Structure
```
login-signup-project/
│── public/              # Frontend files (HTML, CSS, JS)
│── database/            # SQLite database file
│── server.js            # Main server file (Express.js)
│── package.json         # Project dependencies
│── README.md            # Project documentation
```

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** SQLite

## Future Enhancements
- Implement **JWT authentication** for better security
- Add **email verification** for new user signups
- Improve UI with **CSS animations and themes**

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
For any questions or contributions, feel free to reach out via GitHub or email.

