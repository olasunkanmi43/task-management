const express = require("express");
const taskRoutes = require("./routes/tasks")
const DbConnection = require('./config/db_connect');
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");


const app = express();


//MIDDLEWARE 
app.use(express.json())
app.use(notFound)
app.use(errorHandlerMiddleware)

// ROUTES
app.use('/api/v1/tasks', tasks);

const PORT = process.env.PORT || 9000;

const startServer = async () => {
    try {
        await DbConnection("mongodb://localhost:27017/taskDb")
        app.listen(PORT, () => {
            console.log(`Server up and running on port $(PORT)..`)
        })
    } catch (error) {

    }
}

startServer()