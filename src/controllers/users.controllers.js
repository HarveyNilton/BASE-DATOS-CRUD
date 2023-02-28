const UserServices = require("../services/users.services")


const getAllUsers = async (req, res) => {
    try {
        const data = await UserServices.getAll()
        res.json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}


const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserServices.getById(id)
        res.json(user)
    } catch (error) {
        res.status(400).json(error)
    }

}

const getUserByName = async (req, res) => {
    try {
        const { name } = req.params
        const user = await UserServices.getByName(name)
        res.json(user)
    } catch (error) {
        res.status(400).json(error)
    }

}

const newUserCreate = async (req, res) => {
    try {
        const newUser = req.body
        const result = await UserServices.createNewUser(newUser)
        res.status(201).send(result)

    } catch (error) {
        res.status(400).json(error)
    }
}

const userUpdate = async (req,res)=>{
    try {
        const {id} = req.params
        const data = req.body
        const result = await UserServices.updateUser(data,id)
        res.status(204).send()
       
    } catch (error) {
        res.status(400).json(error)
    }
}


const userDelete = async (req,res)=>{
    try {
        const {id} = req.params
        const result =  await UserServices.userDestroy(id)
        res.status(204).json('not content')
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    getAllUsers,
    getUserById,
    getUserByName,
    newUserCreate,
    userUpdate,
    userDelete
}