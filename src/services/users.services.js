const User = require("../models/user.model");

class UserServices {
    static async getAll() {
        try {
            const users = await User.findAll({
                attributes: ['id', 'name', 'email'],
                order: ['id']
            })
            return users
        } catch (error) {
            throw error
        }

    }

    static async getById(id) {
        try {
            const user = await User.findByPk(id, {
                attributes: ['id', 'name', 'email']
            })
            return user
        } catch (error) {
            throw error
        }
    }

    static async getByName(name) {
        try {
            const user = await User.findOne({
                where: { name },
                attributes: ['id', 'name', 'email']
            })
            return user
        } catch (error) {
            throw error
        }

    }

    static async createNewUser(newUser) {
        try {
            const result = await User.create(newUser)
            return result

        } catch (error) {
            res.status(400).json(error)
        }

    }

    static async updateUser(data,id) {
        try {
            const result = await User.update(data, {
                where: {
                    id
                }
            })
            return result

        } catch (error) {
            throw error
        }

    }

    static async userDestroy(id){
            try {
                const result =  await User.destroy({
                    where:{
                        id : id
                    }
                })
                return result
            } catch (error) {
                throw error
            }
    }
}

module.exports = UserServices