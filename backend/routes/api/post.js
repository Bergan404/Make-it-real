const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const db = require('../../db/models/')

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    let id = Number(req.params.id)
    console.log(id)
    const posts = await db.Post.findAll({where: {userId: id}});
    res.json(posts)
}))

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

router.get('/', asyncHandler(async (req, res) => {
    const allPosts = await db.Post.findAll()
    res.json(allPosts)
}))

module.exports = router;
