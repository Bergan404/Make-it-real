const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const db = require('../../db/models/')

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    const id = Number(req.params.id)
    const addPostToCart = await db.Post.findByPk(id)


    res.json(addPostToCart)
}))

router.post('/', asyncHandler(async (req, res) => {
    const {
        postId,
        shoppingCartId,
    } = req.body

    const cart = await db.ShoppingCartPost.create({
        postId,
        shoppingCartId,
    })
    res.json(cart)
}))

module.exports = router;
