const express = require('express');
const app = express();
const port = 3001;
const userRoutes = require("./routes/user");
const acoountRoutes = require("./routes/doctor");

app.use('/user', userRoutes);
app.use('/doctor', acoountRoutes);


app.listen(port, () => {
    console.log(`listening ${port}`);
});

app.get('/', (req, res) => {
    res.send("hello");
});

app.get('/getdata', (req, res) => {
    res.json({
        "statusCode": 200,
        "statusMessage": "success"
    })
})