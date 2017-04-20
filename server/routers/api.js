let router=require('express').Router()
let houseCon=require('../controllers/house')

router.post('/house',houseCon.insert)
router.get('/house',houseCon.views)
router.get('/house/:id',houseCon.view)
router.put('/house/:id',houseCon.edit)
router.delete('/house/:id',houseCon.delete)
module.exports=router;
