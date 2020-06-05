const Dog = require('../models/dog');


module.exports= {
    create
}

function create(req, res) {
    console.log(req.body, req.params.id)
    //crete a destination and append to a dog
    Dog.findById(req.params.id, function(err, dog) {
        dog.walks.push(req.body);
        console.log(req.body);
        dog.save(function(err) {
            console.log(dog);
            res.redirect(`/dogs/${dog._id}`);
        })
    })

}

 