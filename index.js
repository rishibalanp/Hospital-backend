const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
// const port = 3001;
const userRoutes = require("./routes/user");
const acoountRoutes = require("./routes/doctor");


const User = require('./models/userModels')

// rishibalanp
// QVYprzuAOV8ZWXtA

mongoose.connect("mongodb+srv://rishibalanp:QVYprzuAOV8ZWXtA@hospital-backend.o7l71yi.mongodb.net/?retryWrites=true&w=majority")


// async function insert() {
//     await User.create({
//         name: 'Rishi',
//         email: 'rishibalanp@gmail.com'
//     })
// }
// insert();

http.listen(3000, function () {
    console.log('server is running port 3000')
});

// app.use('/user', userRoutes);
// app.use('/doctor', acoountRoutes);


// app.listen(port, () => {
//     console.log(`listening ${port}`);
// });

// app.get('/', (req, res) => {
//     res.send("hello");
// });

// app.get('/getdata', (req, res) => {
//     res.json({
//         "statusCode": 200,
//         "statusMessage": "success"
//     })
// })