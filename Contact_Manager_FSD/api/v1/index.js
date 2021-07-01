const express = require('express')
const router = express.Router();

router.use('/contacts', require('./contacts'));
router.use('/', (req, res, next) => {
    res.json({
        message: 'The API points available at /contacts'
    })
})

module.exports = router;