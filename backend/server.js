const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')

require('dotenv').config()


const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


const uri = process.env.URI


mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, dbName: 'Mock_Website', useUnifiedTopology: true })

const connection = mongoose.connection;
connection.once('open', () =>
{
    console.log("Connection Successful")
})


const itemRouter = require('./routes/item')

// this is the route at end of ther server request
app.use('/item',itemRouter)

app.listen(port, ()=>
{
    console.log(`Server is running on port: ${port}`)
})
