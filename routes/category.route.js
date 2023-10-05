const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category.controller')
const { body, param, validationResult } = require('express-validator')

const idValidator = () => {
    return [
        param('id').isNumeric().withMessage('Enter only a number')
    ]
}

const nameValidator = () => {
    return [
        body('name').not().isEmpty().withMessage('The field is required'),
        body('name').isString().withMessage('Enter only letters')
    ]
}

const updateValidator = () => {
    return [
        param('id').isNumeric().withMessage('Enter only number'),
        body('id').isNumeric().withMessage('Enter only numbers'),
        body('id').not().isEmpty().withMessage('The field id is required'),
        body('name').isString().withMessage('Enter only letters'),
        body('name').notEmpty().withMessage('The field name is required')
    ]
}

router.get('/', categoryController.findall)

router.get('/:id', idValidator(), (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isempty()) {
        return res.status(400).json({status: false, data: errors.array()})
    } else {
        next()
    }
}, categoryController.findOne)

router.post('/', nameValidator(), (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isempty()) {
        return res.status(400).json({status: false, data: errors.array()})
    } else {
        next()
    }
}, categoryController.create)

router.patch('/:id', updateValidator(), (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isempty()) {
        return res.status(400).json({status: false, data: errors.array()})
    } else {
        next()
    }
}, categoryController.update)

router.delete('/:id', idValidator(), (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isempty()) {
        return res.status(400).json({status: false, data: errors.array()})
    } else {
        next()
    }
}, categoryController.delete)

module.exports = router