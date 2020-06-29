let User = require('../models/user.model');

//Get Methods
module.exports.getAll = function(req,res){
    User.find().then(function(users){
        res.json(users)
    } 
).catch(function(err){
    res.status(400).json('Error: ' + err)
});
};

module.exports.findByID = function(req,res) {
    User.findById(req.params.id).then(function(user){
        res.json(user)
    }).catch(function(err){
        res.status(400).json('Error' + err)
    });
};
//Delete Methods
module.exports.delete = function(req,res){
    User.findByIdAndDelete(req.params.id).then(function(user){
        res.json(user)
    }).catch(function(err){
        res.status(400).json('Error' + err)
    });
};

//Post Methods
module.exports.create = function(req,res){
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save().then(function(){
        res.json('User added')
    }).catch(function(err){
        res.status(400).json('Error: ' + err)
    });
};

//Put Methods
module.exports.update = function(req,res){
    User.findById(req.params.id).then(function(user){
        user.username = req.body.username;
        user.save().then(() => res.json('User updated'))
        .catch((err) => {res.status(400).json('Error' + err)
    });
    });
};