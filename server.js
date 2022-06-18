const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const eventRoute = require('./routes/events.routes')


// configuration
const PORT = process.env.PORT || 4000
const app = express()


// middleware
app.use(express.json())
app.use(cors())



// database connections
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.once('open', () => {
    console.log('Database is connected')
})

app.use('/api/event', eventRoute)

app.get('/', (req, res) => {
    res.send('Server route is working perfectly')
})

app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}/api`)
})