const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');
const db = require('../../db/models/')

const router = express.Router();

router.get('/:id', asyncHandler(async (req, res) => {
    let id = Number(req.params.id)
    const posts = await db.Post.destroy({where: {id: id}});
    res.json(posts)
}))

module.exports = router;
