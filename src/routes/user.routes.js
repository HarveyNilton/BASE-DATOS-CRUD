const { Router } = require("express");
const { getAllUsers, getUserById, getUserByName, newUserCreate, userUpdate, userDelete } = require("../controllers/users.controllers");

const router = Router()


router.get('/api/v1/users',getAllUsers)
//Buscar un usuario por su Id.

router.get('/api/v1/users/:id', getUserById)

router.get('/api/v1/users/name/:name', getUserByName)

router.post('/api/v1/users', newUserCreate)

router.put('/api/v1/users/:id', userUpdate)
/*
router.put('/api/v1/users/:id', async (req,res)=>{
    try {
        const {id} = req.params
        const data = req.body
        const result = await User.update(data,{
            where:{
                id
            }
        })
        res.status(204).send()
       
    } catch (error) {
        res.status(400).json(error)
    }
})
*/

router.delete('/api/v1/users/:id',userDelete)
/*
router.delete('/api/v1/users/:id', async (req,res)=>{
    try {
        const {id} = req.params
        const result =  await User.destroy({
            where:{
                id : id
            }
        })
        res.status(204).json('not content')
    } catch (error) {
        res.status(400).json(error)
    }
})*/

module.exports = router