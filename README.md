## NPM
- Node Package Manager.
- Nodejs has a lot of packages.
- It helps you to install, uninstall, update
- NPM creates a package.json. it contains info about packages (versions, list of all packages) used by your project.

-------------------------------------------------------------
- To get started, we first need to initialize npm in the package, and install express.
```bash 
npm init
npm install express
```
- Now we can setup the server using express
```node
const express = require("express")
const app = express();
app.use(express.json());    // to access body in request
const port = 8080;
const server = app.listen(port, ()=>{
	console.log(`Server is listening on port ${port}`)
})
```
- We need to setup routes so that we can test our server.
- To run the server, enter below command in the terminal
```bash
node server.js
```
## Routes and routing

### Routes and Routing in Express.js

**Routes** define the endpoints (URIs) that your application will respond to, and they determine what code will execute when those endpoints are hit.

**Routing** refers to how an application’s endpoints (URIs) respond to client requests. Express.js provides a robust set of features for routing, which makes it easy to handle different HTTP methods and paths.

---


### Setting Up Routes

Here's an example of setting up a basic route in Express.js:

```javascript
app.get('/', (req, res) => {
    res.send('Hello World!');
});
```

This route listens for GET requests on the root URL (`/`). When a request is made to this URL, it sends back "Hello World!".

You can define routes for different HTTP methods (GET, POST, PUT, DELETE, etc.):

```javascript
app.post('/submit', (req, res) => {
    res.send('Data received');
});

app.put('/update', (req, res) => {
    res.send('Data updated');
});

app.delete('/delete', (req, res) => {
    res.send('Data deleted');
});
```

---

### Controllers in Express.js

**Controllers** in Express.js are responsible for handling incoming requests and sending responses back to the client. They help organize your application logic, making it easier to manage and scale.

#### Why Use Controllers?

- **Separation of Concerns:** By separating route definitions and business logic, your code becomes more organized and easier to maintain.
- **Reusability:** Controllers can be reused across different routes.
- **Testability:** Controllers can be tested independently from the rest of the application.

#### Setting Up Controllers

Let's create a simple controller to handle basic user operations like getting user details, creating a user, updating a user, and deleting a user.

**Step 1: Create the Controller File**

First, create a directory named `controllers` in your project root, then create a file named `userController.js` inside this directory.

**Example: userController.js**

```javascript
// Define controller functions
exports.getUser = (req, res) => {
    res.send('User details');
};

exports.createUser = (req, res) => {
    res.send('User created');
};

exports.updateUser = (req, res) => {
    res.send('User updated');
};

exports.deleteUser = (req, res) => {
    res.send('User deleted');
};
```

In this file, we define four functions (`getUser`, `createUser`, `updateUser`, `deleteUser`) to handle different user-related operations. Each function takes `req` (the request object) and `res` (the response object) as parameters and sends a response back to the client.

**Step 2: Define Routes Using Controllers**

Next, create a directory named `routes` in your project root, then create a file named `userRoutes.js` inside this directory.

**Example: userRoutes.js**

```javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes and associate them with controller functions
router.get('/user', userController.getUser);
router.post('/user', userController.createUser);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);

module.exports = router;
```

In this file, we define routes and associate them with the controller functions we created earlier. Each route handles a different HTTP method (GET, POST, PUT, DELETE) and URL path.

**Step 3: Use Routes in Your Server**

Finally, modify your main server file to use the routes defined in `userRoutes.js`.

**Example: server.js**

```javascript
const express = require('express');
const app = express();
const port = 8080;

const userRoutes = require('./routes/userRoutes');
// Use middleware globally (if needed)
// app.use(isAuthenticated);

app.use('/api', userRoutes);

const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
