const cartDataHandler = require('../Model/shoppingCartModel');


exports.getAllItem = (req,res) => {
    cartDataHandler.find().then(result => {
        res.json({
            message:"Item Fetched Successfully",
            response:result
        })
    }).catch(error => {
        res.json({
            response:error
        })
    });
}

exports.addItem = (req,res) => {
    const name = req.body.name;
    const addItemReq = new cartDataHandler({
        bookName:name
    });

    addItemReq.save().then(result => {
        res.json({
            message:"Item Added Successfully",
            response:result
        })
    }).catch(error => {
        res.json({
            response:error
        })
    });
}