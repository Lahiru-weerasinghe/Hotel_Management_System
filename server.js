const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');   //this will convert json format to java script object
const cors = require('cors');                //to avoid the cors error, it is occur when we use two port numbers to backend and frontend

//import express because we are going to build express application 
const app = express();



const ResRoutes = require('./routes/postsRes');





//app middleware
app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use(ResRoutes);





 

const PORT = 8000;



//const DB_URL = 'mongodb+srv://twg:twg123@cluster0.g6c3p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
//const DB_URL = 'mongodb+srv://thisal:TKP12345@cluster0.fu8og.mongodb.net/myFirstDB2?retryWrites=true&w=majority'; 

const DB_URL = 'mongodb+srv://thisal:tkp12345@clusternewone.ceihw.mongodb.net/myDB1?retryWrites=true&w=majority'


mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
.then(() =>{
     console.log('DB connected');
})
.catch((err) => console.log('DB connection ERROR',err));




app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});