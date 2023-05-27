const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
// const postRoutes = require('../routes/posts.js');
// const serverless = require('serverless-http');

import postRoutes from '../routes/posts.js';
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/.netlify/functions/api', postRoutes);

// app.get('*', (req,res)=>{
//     req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
// });

app.get('/', (req,res)=>{
    res.send("Hello to the test projects")
});
// const CONNECTION_URL = "mongodb+srv://raptly:raptly123@cluster0.v9gql.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 9000;

// app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`))
mongoose.connect(process.env.CONNECTION_URL)
    .then(()=>app.listen(PORT, ()=>console.log(`Server running on port: ${PORT}`)))
    .catch((err)=> console.log(err.message));

// module.exports = app;
// module.exports.handler = serverless(app);

