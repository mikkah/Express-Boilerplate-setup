import  models from '../models'
import paginate from 'mongoose-paginate-v2'
import mongoose from 'mongoose'

mongoose.set('useFindAndModify', false);

const MainController = async (req, res, next) => {
  let model = req.params.model
  let id = req.params.id ? mongoose.Types.ObjectId(req.params.id) : null 

  switch (req.method) {
    case 'GET':
      try {
        let options = {
          lean: true,
        }
        let where = {}
        
        if (id) {
          where = { '_id':  id }
        }

        let paginatedResults = await models[model].paginate(where, options, (err, result) => {
          return result
        })
        res.send(paginatedResults);
      } catch (error) {
        catchError(error)
      }
      break;


    // case 'POST':
    //   try {
    //     let save = req.body
    //     let result = await models[model].create(save)
    //     res.send(result)
    //   } catch (error) {
    //     catchError(error)
    //   }
    //   break;

    // case 'PATCH':
    //   try {
    //     let options = { new: true }
    //     let udpatedData = req.body
    //     let where = { '_id': id }
    //     let result = await models[model].findOneAndUpdate(where, udpatedData, options)
    //     res.send(result)
    //   } catch (error) {
    //     catchError(error)
    //   }
    //   break;

    // case 'DELETE':
    //   try {
    //     let condition = { '_id': id }
    //     let result = await models[model].deleteOne(condition)
    //     res.send(result)
    //   } catch (error) {
    //     catchError(error)
    //   }

    //   break;
  
    default:
      break;
  }
} 

function catchError(error) {
  console.error('error', error)
  res.send({status: 'Error', message: 'Check console'})
}

export default MainController;
