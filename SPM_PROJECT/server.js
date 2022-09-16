const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');   //this will convert json format to java script object
const cors = require('cors');
const pdf =require('html-pdf');//convert html file in to pdf
const app = express();
const pdfTemplate=require('./routes/indexd');



//import routes

//const postRoutes = require('./routes/posts');
const employeeRoutes = require('./routes/employee');

const RestaurantRoutes = require('./routes/sampleRestaurant');

const ResRoutes = require('./routes/postsRes');

const postRoutes = require('./routes/posts');

const customerRoutes = require('./routes/Customer.routes');
const requestRoutes = require('./routes/Request.routes');
const basicSalaryRoutes = require('./routes/basicSalary');
const income_expenditureRoutes = require('./routes/income_expenditure');

//services
const serviceRoutes = require('./routes/services');
const supplierRoutes = require('./routes/suppliers'); 



//app middleware
app.use(bodyParser.json());
app.use(cors());//frontend and backend run in two ports in same time.cors used to avoid blocking that two ports


//route middleware

// app.use(postRoutes);
 
app.use(employeeRoutes);
 
app.use(supplierRoutes);

app.use(ResRoutes);

app.use(customerRoutes);
app.use(requestRoutes);
app.use(basicSalaryRoutes);
app.use(income_expenditureRoutes);
app.use(postRoutes);//route middleware


app.use(RestaurantRoutes);

app.use(serviceRoutes);



 


const PORT = 8000;
//const DB_URL = 'mongodb+srv://lahiru:tkp12345@clusternewone.ceihw.mongodb.net/myDB1?retryWrites=true&w=majoritynpm';
const DB_URL = 'mongodb+srv://lahiru:tkp12345@clusternewone.ceihw.mongodb.net/myDB1?retryWrites=true&w=majority'; 

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 })
.then(() =>{
     console.log('DB connected');
})
.catch((err) => console.log('DB connection ERROR',err));


app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/Recipt-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})




app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
});


