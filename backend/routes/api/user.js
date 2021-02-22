const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const moment = require('moment')
// const db = require('../../db/models/')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { db } = require('../../config');


const router = express.Router();

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];

// Sign up
router.post(
    '',
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });

        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

router.post(
    '',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });

        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

router.get('/:username/', requireAuth, asyncHandler(async (req, res) => {
    const user = await db.User.findOne({
        where: { username: req.params.username },
        include: db.Post,
        order: [[db.Post, 'createdAt']],
    });
    user.Posts.forEach(
        (post) => (post.postedDate = moment(post.createdAt).fromNow())
    );
}))

module.exports = router;
