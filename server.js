const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');   //convert json format to java script object
const cors = require('cors');
const pdf =require('html-pdf');             //Convert html strings to PDF documents
const app = express();
const pdfTemplate=require('./routes/indexd');



//import routes


const employeeRoutes = require('./routes/employee');

const RestaurantRoutes = require('./routes/sampleRestaurant');

const ResRoutes = require('./routes/postsRes');

const postRoutes = require('./routes/posts');

const customerRoutes = require('./routes/Customer.routes');
const requestRoutes = require('./routes/Request.routes');

const basicSalaryRoutes = require('./routes/basicSalary');
const income_expenditureRoutes = require('./routes/income_expenditure');

const serviceRoutes = require('./routes/services');

const supplierRoutes = require('./routes/suppliers');



//app middleware
app.use(bodyParser.json());
app.use(cors());               //frontend and backend run in two ports in same time.cors used to avoid blocking that two ports


//route middleware - how to communicate routes with server

app.use(employeeRoutes);
 
app.use(supplierRoutes);

app.use(ResRoutes);

app.use(customerRoutes);
app.use(requestRoutes);

app.use(basicSalaryRoutes);
app.use(income_expenditureRoutes);

app.use(postRoutes);

app.use(RestaurantRoutes);

app.use(serviceRoutes);



const PORT = 8000;

//const DB_URL = 'mongodb+srv://rumi:rumi123@customercrud.z3wsz.mongodb.net/customerCrud?retryWrites=true&w=majority';
const DB_URL = 'mongodb+srv://rumindi:tkp12345@clusternewone.ceihw.mongodb.net/myDB1?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
.then(() =>{
     console.log('DB connected');
})
.catch((err) => console.log('DB connection ERROR',err));


app.post('/create-pdf', (req, res) => {     //POST request to the server a PDF document was created
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {      //pdf.create() -> create a pdf using html template, toFile->pass the name that we want to assign to the PDF document
        if(err) {
            res.send(Promise.reject());       //if it's an error
        }

        res.send(Promise.resolve());           //success
    });
});

app.get('/Recipt-pdf', (req, res) => {          //create a route , GET request ->server send the finished document to the client.
    res.sendFile(`${__dirname}/result.pdf`)        //finished the document and send it to the client
})




app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});


