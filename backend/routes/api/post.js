const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const db = require('../../db/models/')

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    let id = Number(req.params.id)
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

    const Posts = await db.Post.create({
        postTitle,
        description,
        highlights,
        listPicture,
        price,
        userId,
    });
    res.json(Posts)
}))

router.get('/', asyncHandler(async (req, res) => {
    const allPosts = await db.Post.findAll()
    res.json(allPosts)
}))

router.get('/', asyncHandler(async (req, res) => {
    const addPostToCart = await db.Post.findOne()
    res.json(addPostToCart)
}))

module.exports = router;
