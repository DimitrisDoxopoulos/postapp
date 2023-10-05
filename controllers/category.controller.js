const categoryService = require('../services/category.service')

exports.findall = async (req, res) => {
    console.log('Find all categories')

    try {
        const result = await categoryService.findall()
        res.status(200).json({status: true, data: result})
        console.log('Find all categories')
    } catch(err) {
        res.status(400).json({status: false, data: err})
        console.log('Problem in finding all categories')
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id
    console.log('Find a category with id ', id)
    try {
        const result = await categoryService.findOne(id)
        res.status(200).json({status: true, data: result})
        console.log('Found category with id ', id)
    } catch (err) {
        res.status(400).json({status: false, data: err})
        console.log('Problem in finding category with id ', id)
    }
}

exports.create = async (req, res) => {
    console.log('Create category')
    const name = req.body.name

    try {
        const result = await categoryService.create(name)
        res.status(200).json({ status: true, data: result})
        console.log('Success in saving category titled ', name)
    } catch (err) {
        res.status(400).json({ status: false, data: err})
        console.log('Problem in saving category ', name)
    }

    res.status(200).json({status: true})
}

exports.update = async (req, res) => {
    const id = req.params.id
    console.log('Updating category with id', id)

    try{
        const result = await categoryService.update(req.body)
        res.status(200).json({status: true, data: result})
        console.log('Updated category with id ', id)
    } catch(err) {
        res.status(400).json({status: false, data: err})
        console.log('Problem in finding category with id ', id)
    }
}

exports.delete = async(req, res) => {
    const id = req.params.id
    console.log('Deleting category with id ', id)

    try{
        const result = await categoryService.delete(id)
        res.status(200).json({status: true, data: result})
        console.log('Deleted category with id ', id)
    } catch(err) {
        res.status(400).json({status: false, data: err})
        console.log('Problem in deleting category with id ', id)
    }
}