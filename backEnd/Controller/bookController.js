const dataModel = require('../Model/bookModel');


exports.getAllBooks = (req,res) => {
    dataModel.find().then(result => {
        res.json({
            message:"Book List Fetched Successfully",
            response:result
        })
    }).catch(error => {
        res.json({
            response:error
        })
    });
}
exports.filterBook = (req,res) => {
    const bookName = req.body.name;
    dataModel.find(
        {
            name:bookName
        }
    ).then(result => {
        res.json({
            message:"Book List Fetched Successfully",
            response:result
        })
    }).catch(error => {
        res.json({
            response:error
        })
    });
}
exports.saveBook = (req,res) => {
    const bookName = req.body.name;

    const saveBookReq = new dataModel({
        name:bookName
    })

    saveBookReq.save().then(result => {
        res.json({
            message:"Book Save Successfully",
            response:result
        })
    }).catch(error => {
        res.json({
            response:error
        })
    });
    
}

exports.deleteBook = (req,res) => {
    const bookName = req.body.name;

    dataModel.deleteOne({
        name:bookName
    }).then(result => {
        res.json({
            message:"Book Deleted Successfully",
            response:result
        })
    }).catch(error => {
        res.json({
            response:error
        })
    });
}

exports.updateBook = (req,res) => {
    const bookName = req.body.name;
    dataModel.updateOne({
        name:bookName
    }).then(result => {
        res.json({
            message:"Book Updated Successfully",
            response:result
        })
    }).catch(error => {
        res.json({
            response:error
        })
    });
}