const connectToMongo=require("./db")
const express = require('express')
const cors = require("cors");
connectToMongo();
const app = express()
const port = 5000
app.use(cors());
// app.get('/', (req, res) => {
//   res.send('Hello!')
// })
app.use(express.json())
app.use('/api/auth',require('./routes/auth'))
app.use('/api/applications', require('./routes/applications'))

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})