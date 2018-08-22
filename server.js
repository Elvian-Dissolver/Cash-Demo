const path = require('path');
const Joi = require('joi');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const controllers = require('./controllers/index')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://root:Elvian1@ds125872.mlab.com:25872/cashfree', {
  //useMongoClient: true
  useNewUrlParser: true
})

app.use(express.json());

//setup view engine
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'hbs')



app.use(express.static('public'))


app.use(bodyParser.urlencoded({
  extended: true
})) // for parsing application/x-www-form-urlencoded
app.use(methodOverride('_method'))

// Routes
app.get('/', controllers.index)
app.get('/indexAdmin', controllers.indexAdmin)
app.get('/add', controllers.add)
app.post('/save', controllers.save)
app.get('/detail/:id', controllers.details)
app.get('/detailForAdmin/:id', controllers.detailsForAdmin)
app.get('/remove/:id', controllers.remove)
app.get('/edit/:id', controllers.edit)
app.put('/update', controllers.update)

const port = process.env.port || 8080
app.listen(port, () => {
    console.log(`Listening at port ${port}...`);
});



















/*
app.get('/',(req, res) => {
    res.render('index', {
        
        items: product
        
    })
   
});



app.get('/add',(req, res) => {
    res.render('post', {
        items: data
    })
});


app.post('/post',(req, res) => {
    const newItem = new Items(req.body)
    newItem
      .save()
      .then(result => {
        res.json({ info: 'product created successfully.' })
      })
      .catch(err => console.error(err))
});

app.get('/detail/:id', (req,res) =>{
    const item = Items.find(c => c.id === parseInt(req.params.id));
    
    if(!item) return res.status(404).send('The item with given id not exits');
    res.render('detail', {
       item: Items
    });
})



*/
/*

const courses = [
    {id:1, name:'courses1'},
    {id:2, name:'courses2'},
    {id:3, name:'courses3'}
];

app.get('/echo/:name',(req, res) => {
    res.render('index', {
        say: req.params.name
    })
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The courses with given id not exits');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourses(req.body);

    if(error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The courses with given id not exits');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});


function validateCourses(course){    
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);

}
*/



