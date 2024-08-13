
const express = require('express');
const mongoose  = require('mongoose');
const dotenv  = require('dotenv');

dotenv.config({ path: './config.env' });


const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute.js');
// const protectedRouter = require('./middlewares/protectedRoutes.js')

const app = express();
app.use(express.json())



const databaseUrl = process.env.DB_STRING
const port = process.env.PORT

app.use(function(req,res,next) {
    console.log('I am fetching...');
        next();
})


//MOUNTING ROUTE
app.use('/api/users',userRouter);
app.use('/api/posts',postRouter);
// app.use('/api/protected',protectedRouter);

//================================//
mongoose.connect(databaseUrl).then(function(con){
    console.log('Database connected successfully....')
}).catch(function(error){
    console.log(error.message)
});

//===========================//
app.listen(port, 'localhost', function(){
    console.log('App is listening on a port 3001...')
})