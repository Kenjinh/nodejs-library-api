const mongoose = require('mongoose');
const username = 'admin';
const password = 'Lince123';
const database = 'library';
const server = `mongodb+srv://${username}:${password}@cluster0.3ajgq.mongodb.net`;

mongoose.connect(`${server}/${database}`,
   { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => {
   console.log("Successfully connect to MongoDB.");
})
.catch(err => {
    console.error("Connection error", err);
    process.exit();
});
var db = mongoose.connection;

module.exports = db;