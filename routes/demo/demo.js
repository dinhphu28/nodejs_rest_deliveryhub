var express = require('express')
var router = express.Router();

/**
 * CRUD
 */
router.get('/:ii', function(req, res, next) {

    var num = parseInt(req.params.ii);
    res.send({
        meo: 'This is a cat!',
        name: 'Meow',
        number: num
    });
});

router.post('/', function(req, res, next) {

    res.status(201).send({
        _id: '1f6cad8',
        name: 'You posted new meow'
    });
});

/**
 * Export
 */
module.exports = router;