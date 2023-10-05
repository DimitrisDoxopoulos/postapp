const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller')
const { body, param, validationResult } = require('express-validator')

const text_and_type_validator = () => {
    return [
        body('title').notEmpty().withMessage('The title is required'),
        body('title').isString().withMessage('Enter only letters'),
        body('text').notEmpty().withMessage('The text is required'),
        body('text').isString().withMessage('Enter only letters'),
    ]
}

router.post('/', text_and_type_validator(), (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isempty()) {
        return res.status(400).json({status: false, data: errors.array()})
    } else {
        next()
    } 
}, postController.createPost)

router.get('/:id', postController.findOne)
router.get('/', postController.findAll)
router.patch('/:id', postController.updatePost)
router.patch('/:id/category', postController.updateCategory)
router.delete('/:id', postController.deletePost)
router.delete("/:id/categories", postController.deleteCategories)

module.exports = router