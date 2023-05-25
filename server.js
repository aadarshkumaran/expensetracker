const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')
const path = require('path')
const app = new express()

dotenv.config({path:'./config/config.env'})
connectDB()

const transactions = require ('./routes/transactions')

app.use(express.json())

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// app.get('/',(req,res) => res.send('Hello World'))
app.use('/api/v1/transactions',transactions)

// //serve static assets
// if(process.env.NODE_ENV === 'production'){
//     //set static folder
//     app.use(express.static('client/build'))
//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }

// //create post build script

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`.white.bold))
