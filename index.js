const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/api/courses', (req,res)=>{
    res.send([1,2,3]);
});

app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

const port = process.env.port || 8080;

app.listen(port, () =>{
    console.log(`Listening at port ${port}...`);
})