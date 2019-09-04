import Mongoose from 'mongoose'
const fs = require('fs')
const path = require('path')


let models = {}
fs.readdirSync(__dirname)
.forEach((file) => {
  if (file !== path.basename(__filename) && file.endsWith('.js')) {
    let modelName = file.replace('.js','') 
    models[modelName] = require(`./${file}`).default;
  }
})

export default models;