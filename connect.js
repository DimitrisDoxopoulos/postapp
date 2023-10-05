const typeorm = require('typeorm')
require('dotenv').config()

const CategoryEntity = require('./model/Category.model').CategoryEntity
const PostEntity = require('./model/Post.model').PostEntity

const dataSource = new typeorm.DataSource({
    type: 'mariadb',
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [ CategoryEntity, PostEntity ],
    synchronize: true
})

dataSource
    .initialize()
    .then(function() {
        console.log('Connected to database')
    })
    .catch(function() {
        console.log('Problem in connecting to database')
    })

module.exports = { dataSource }