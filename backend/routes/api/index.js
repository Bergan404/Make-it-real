const router = require('express').Router();
const sessionRouter = require('./session.js');
const userRouter = require('./user.js')
const postRouter = require('./post.js')

router.use('/session', sessionRouter);

router.use('/users', userRouter);

router.use('/posts', postRouter);


module.exports = router;
