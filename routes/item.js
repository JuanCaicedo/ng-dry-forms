var express = require('express');
var router = express.Router();

//Set up Mongo
var Mongoose = require('mongoose');
var db = Mongoose.createConnection('localhost', 'mytestapp');

var Item = require('../models/Item.js').Item(db);

/* GET all item listings. */
router.get('/', function(req, res) {
    var criteria = {};
    if (req.param('_id')) {
        criteria['_id'] = req.param('_id');
    }

    Item.find(criteria, function(error, items) {
        res.send({
            items: items
        })
    });
});

/* POST new item. listing */
router.post('/', function(req, res) {
    var item = new Item(req.body);
    item.save(function(error, newItem) {
        console.log('new item')
        res.send(newItem);
    }, function(error) {
        console.log('error')
        res.json({
            error: error
        });
    });
});

/* PUT update item listing. */
router.put('/', function(req, res) {
    var inputItem = req.body;
    console.log(req.body);
    Item.findOne({
        _id: inputItem._id
    }, function(error, item) {
        if (error || !item) {
            console.log('did not find an item');
            res.json({
                'error': error
            });
        } else {
            item.name = inputItem.name;
            item.description = inputItem.description;
            item.save(function(error, item) {
                if (error || !item) {
                    console.log('error saving item');
                    res.json({
                        'error': error
                    });
                } else {
                    console.log('saved item');
                    res.send(item);
                }
            });
        }
    });
});

/* DELETE item listing. */
router.delete('/', function(req, res) {
    var inputItem = req.body;
    console.log('inputItem ' + inputItem._id);
    Item.findOne({
        _id: inputItem._id
    }, function(error, item) {
        if (error || !item) {
            console.log('did not find an item');
            res.json({
                'error': error
            });
        } else {
            item.remove(function(error, item) {
                if (error || !item) {
                    console.log('error saving item');
                    res.json({
                        'error': error
                    });
                } else {
                    console.log('saved item');
                    res.send(item);
                }
            });
        }
    });
});

module.exports = router;