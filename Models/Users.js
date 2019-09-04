import Mongoose from 'mongoose'
import paginate from 'mongoose-paginate-v2'

const schema = new Mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  middleName: { type: String, default: null },
  email: { type: String, default: null },
  password: { type: String, default: null },
  displayName: { type: String, default: null },
  pin: { type: String, default: null },
  jobPosition: { type: String, default: null },
  contactNumber: { type: String, default: null },
  gender: { type: String, default: null },
  
})
schema.plugin(paginate)
const Users = Mongoose.model('Users', schema);


export default Users;