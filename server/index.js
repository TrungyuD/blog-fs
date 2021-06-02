import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const URI = 'mongodb+srv://admin:xSwWmAYLj2v0WHsN@cluster0.mcngv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();
const PORT = process.env.port || 5000;

app.use(bodyParser.json({limit: '30mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}));
app.use(cors());

app.use('/posts', posts);

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then (()=> {
    console.log('connected to db');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err)=> {
    console.log(err);
})

