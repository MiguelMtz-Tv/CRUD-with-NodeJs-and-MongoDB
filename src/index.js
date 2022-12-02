const express = require('express');
const app = express();
const taskRoutes =  require('./routes/task');
const connectDB = require('./db/connect');
require('dotenv').config();
//middlewere
app.use(express.json()); // parses incoming JSON requests and puts the parsed data in req.body
//routes
app.use('/api/v1/task', taskRoutes);

//mongoDB connection with mongoose.
const port = process.env.port || 3000;

const start = async()=>{
    try{
        await connectDB(process.env.MONGODB);
        app.listen(port, 
        console.log(`Server listening on http://localhost:${port}`)
        );
    } catch(error){
        console.error(error);
    }
};

app.use(express.static('public'));
start();