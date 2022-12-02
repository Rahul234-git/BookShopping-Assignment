const userdataHandler = require('../Model/userModel');

exports.getAllUsers = (req,res) => {
    userdataHandler.find().then(result => {
        res.json({
            message:"User List Fetched Successfully",
            response:result
        })
    }).catch(error => {
        res.json({
            response:error
        })
    });
}

exports.addUser = (req,res) => {
    const {name,email,password} = req.body;
    const userDataReq = new userdataHandler({
        name:name,
        email:email,
        password:password
    });
    userDataReq.save().then(result => {
        res.json({
            message:"User Added Successfully",
            response:result
        })
    }).catch(error => {
        res.json({
            response:error
        })
    })
}
exports.deleteUser = (req,res) => {
    const {name} = req.body.name;
    
    

    userdataHandler.deleteOne({
        name:name

    }).then(result => {
        res.json({
            message:"User remove Successfully",
            response:result
        })
    }).catch(error => {
        res.json({
            response:error
        })
    });
    
}