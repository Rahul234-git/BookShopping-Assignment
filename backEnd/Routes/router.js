const express = require('express');
const bookdataHandle = require('../Controller/bookController');
const userdataHandle = require('../Controller/userController');
const shoppingCartdataHandle = require('../Controller/shoppingCartController');
const shoppingCartModel = require('../Model/shoppingCartModel');



const router = express.Router();


// book api...
router.get('/getAllBooks',bookdataHandle.getAllBooks);
router.post('/getbookbyName',bookdataHandle.filterBook);
router.post('/savebook',bookdataHandle.saveBook);
router.post('/deleteBook',bookdataHandle.deleteBook);
router.post('/updateBook',bookdataHandle.updateBook);

// user api...
router.get('/getAllUser',userdataHandle.getAllUsers);
router.post('/addUser',userdataHandle.addUser);
router.post('/deleteUser',userdataHandle.deleteUser);

// shopping Cart api...
router.get('/getallItem',shoppingCartdataHandle.getAllItem);
router.post('/addItem',shoppingCartdataHandle.addItem);

module.exports = router;