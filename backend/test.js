const mongoose = require('mongoose');
const uri = 'mongodb+srv://student:kmit123@cluster0.mwifk43.mongodb.net/himalayas';
mongoose.connect(uri).then(console.log('Database Connected'));
const db = mongoose.connection;
db.once('open',async()=>{
    const collection = db.collection('peaks');
    const data = await collection.find({}).toArray();
    console.log(data);
});