import mongoose from 'mongoose'
import consola from 'consola'

const db_url = process.env.DB_URL

mongoose.connect(db_url,{ useNewUrlParser: true })

const DB = mongoose.connection;

if(!DB) 
  consola.error("Error connecting to DB")
else 
  consola.success(`DB Connected to ${db_url}`)
