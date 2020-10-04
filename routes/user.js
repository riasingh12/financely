const express =require ('express')
const router =express.Router()

const UserController =require('../controllers/UserController')
const upload = require ('../middleware/upload')
const authenticate =require ('../middleware/authenticate')

router.get('/', authenticate, UserController.index)
router.post('/show', UserController.show)
router.post('/store',upload.single('avatar'),UserController.store)
router.post('/update',UserController.update)
router.post('/delete',UserController.delete)

module.exports = router 







