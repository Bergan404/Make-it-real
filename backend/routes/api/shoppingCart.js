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

router.post('/:cartId', asyncHandler(async (req, res) => {
    const {
        id,
        cartId,
    } = req.body

    const cart = await db.ShoppingCartPost.create({
        postId: id,
        shoppingCartId: cartId,
    })
    res.json(cart)
}))

router.get('/cart/:userId', asyncHandler(async (req, res) => {
    const userId = Number(req.params.userId)

    const cart = await db.ShoppingCart.findOne({where: {userId: userId}})

    return res.json({
        cart
    })
}))

module.exports = router;
