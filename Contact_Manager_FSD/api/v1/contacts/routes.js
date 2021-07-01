const express = require('express')
const router = express.Router();

const contacts = [
    {
        "id": 1,
        "name": "Divya",
        "email": "divya@gmail.com",
        "phone": 7625745327456,
        "city": "Kanpur"

    }
]

router.get('/', (req, res, next) => {
    console.log("contacts GET request 1 with query params : ", req.query);
    res.json({
        data: contacts
    })
})

router.get('/:id', (req, res, next) => {
    console.log("contact GET request 2 with id : ", req.params);
    res.json({
        data: contacts
    })
})

router.post('/', (req, res, next) => {
    console.log("contacts POST request");
})

router.put('/', (req, res, next) => {
    console.log("contacts PUT request");
})

router.delete('/', (req, res, next) => {
    console.log("contacts DELETE request");
})

module.exports = router;