import express from 'express';
import {writer} from "./ts/app";


const app = express();
const port = 3000;

app.get('/api', (req, res) => {
    let msg: string = 'Hello, world!';
    writer().catch((err) => {msg = err.message})
    res.send(msg);
});


app.listen(port, ()=> {
    console.log(`server started at localhost:${port}`)
});