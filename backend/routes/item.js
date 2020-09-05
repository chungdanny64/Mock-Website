const router = require('express').Router()

let Item = require('../models/item.model')


router.route('/').get((req,res) => {
    // .find() gets all the users from the mongoDB database
    Item.find()
    // when it finds it THEN it returns the users in json format 
    .then(items => res.json(items))
    // if there is an error then display the message
    .catch(err => res.status(400).json('Error: ' + err));
});

// :id is anything that comes after the slash, not just an id number
router.route('/search/:id').get((req,res) => {
    let a = req.params.id
    // .find() gets all the users from the mongoDB database that contains the string 
    // not case sensitive using regex 
    Item.find({name : {'$regex' : a, '$options' : 'i' }})
    // when it finds it THEN it returns the users in json format 
    .then(items => res.json(items))
    // if there is an error then display the message
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').get((req,res) =>
{
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error' + err))
})


// to add items into the database
router.route('/add').post((req,res) => {
    const image1 = req.body.first_image;
    const image2 = req.body.second_image;
    const image3 = req.body.third_image;
    const image4 = req.body.fourth_image;
    const image5 = req.body.fifth_image;
    const image6 = req.body.sixth_image;
    const price = req.body.price;
    const name = req.body.name;
    const color = req.body.color;

    const newItem = new Item({image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        price,
        name,
        color
    })

    newItem.save()
        .then(()=> res.json('Item added'))
        .catch(err => res.status(400).json('Error ' + err))


})

module.exports = router