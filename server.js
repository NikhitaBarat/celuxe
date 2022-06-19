const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const eventRoute = require('./routes/events.routes')
const newsRoute = require('./routes/news.routes')
const graphRoute = require('./graphql/query')


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

// routes
app.use('/api/event', eventRoute)
app.use('/api/news', newsRoute)
app.use('/graphql', graphRoute)


app.use(express.static(path.join(__dirname, "./client/build")))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

// app.get('/', (req, res) => {
//     res.send('Server route is working perfectly')
// })

app.listen(PORT, (req, res) => {
    console.log(`Server is running at http://localhost:${PORT}`)
})