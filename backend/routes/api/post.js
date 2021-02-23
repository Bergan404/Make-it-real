const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const db = require('../../db/models/')

const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
    const {
        postTitle,
        description,
        highlights,
        listPicture,
        price,
        userId,
    } = req.body;

    console.log(postTitle,
        description,
        highlights,
        listPicture,
        price, userId)

    const Posts = await db.Post.create({
        postTitle,
        description,
        highlights,
        listPicture,
        price,
        userId,
    });
    res.json(Posts)

    console.log(req.body)
}))


module.exports = router;
