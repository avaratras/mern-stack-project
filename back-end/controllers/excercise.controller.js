let Excercise = require('../models/excercise.model');
// Get method
module.exports.getAll = function(req,res){
    Excercise.find().then(function(excercise){
        res.json(excercise)
    }).catch(function(err){
        res.status(400).json('Error: ' + err)
    });
};

module.exports.findByID = function(req,res){
    Excercise.findById(req.params.id).then(function(excercise){
        res.json(excercise)
    }).catch(function(err){
        res.status(400).json('Error: ' + err)
    });
};

module.exports.delete = function(req,res){
    Excercise.findByIdAndDelete(req.params.id).then(function(excercise){
        res.json(excercise)
    }).catch(function(err){
        res.status(400).json('Error: '+ err)
    });
}

//Post Method
module.exports.create = function(req,res){
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExcercise = new Excercise({
        username,
        description,
        duration,
        date
    }); 

    newExcercise.save().then(function(){
        res.json('Excercise added!')
        .catch(function(err){
            res.status(400).json('Error: ' + err)
        });
    });
};

module.exports.update = function(req,res){
    Excercise.findById(req.params.id).then(function(excercise){
        excercise.id = req.body.id;
        excercise.username = req.body.username;
        excercise.description = req.body.description;
        excercise.duration = Number(req.body.duration);
        excercise.date = Date.parse(req.body.date);

        excercise.save().then(() => res.json('Excercise updated!'))
        .catch((err) => {res.status(400).json("Error" + err)})
    })
}