import express from 'express'
import MainController from './controllers/MainController'
const router = express.Router()

router.get('/', (req,res) => {
  res.status(200).json({
    message: "API Working"
  })
})

router.use('/db/:model/:id*?',  MainController, function (req, res, next) {
  next();
})


export default router;