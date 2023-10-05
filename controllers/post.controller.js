const postService = require('../services/post.service')

exports.createPost = async (req, res) => {
    const data = req.body
    console.log("Insert post ", data.title)

    try{
        const result = await postService.createPost(data)
        res.status(200).json({status: true, data: result})
        console.log('Inserted post with name ', data.name)
    } catch(err) {
        res.status(400).json({status: false, data: err})
        console.log('Problem in inserting data with name ', data.name)
    }
}

exports.findAll = async (req, res) => {
    console.log('Find all posts')
    try{
        const result = await postService.findall()
        res.status(200).json({status: true, data: result})
        console.log('All posts found')
    } catch(err) {
        res.status(400).json({status: false, data: err})
        console.log('Problem in finding all posts')
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id
    console.log('Find post with id ', id)

    try{
        const result = await postService.findOne(id)
        res.status(200).json({status: true, data: result})
        console.log('Found post with id ', id)
    } catch(err) {
        res.status(400).json({status: false, data: err})
        console.log('Problem in finding post with id ', id)
    }
}

exports.updatePost = async (req, res) => {
    const data = req.params
    console.log('Updating post with id ', data.id)

    try{
        const result = await postService.updatePost(data)
        res.status(200).json({status: true, data: result})
        console.log('Updated post with id ', data.id)
    } catch(err) {
        res.status(400).json({status: false, data: err})
        console.log('Problem in updating post with id ', data.id)
    }
}

exports.updateCategory = async (req, res) => {
    const data = req.params
    const id = data.id
    console.log('Updating categories of post with id ', id)

    try{
        const result = await postService.updateCategory(data)
        res.status(200).json({status: true, data: result})
        console.log('Updated categories of post with id ', id)
    } catch(err) {
        res.status(400).json({status: false, data: err})
        console.log('Problem in updating categories of post with id ', id)
    }
}

exports.deletePost = async (req, res) => {
    console.log('Deleting post with id ', req.params.id)

    try {
        const result = await postService.deletePost(req.params.id)
        res.status(200).json({status: true, data:result})
        console.log('Deleted post with id ', req.params.id)
    } catch(err) {
        res.status(400).json({status: false, data: err})
        console.log("Problem with deleting post with id ", req.params.id)
    }
}

exports.deleteCategories = async (req, res) => {
    const data = req.body
    const id = data.id
    console.log('Deleting categories of post with id ', id)

    try{
        const result = await postService.deleteCategories(data)
        res.status(200).json({status: true, data: result})
        console.log('Deleted categories of post with id ', id)
    } catch(err) {
        res.status(400).json({status: false, data: err})
        console.log('Problem in deleting categories of post with id ', id)
    }
}