const express = require('express');
const router = express.Router();
const apiRouter = require('./api')

router.use('/api', apiRouter)

router.get('/hello/world', function (req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    // res.send('Hello World!');
    res.send('Fuck you spidaman!')
});

module.exports = router;
