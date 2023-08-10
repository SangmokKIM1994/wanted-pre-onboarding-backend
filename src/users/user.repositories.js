const {User} =require("../models")

class UserRepository{

    signUp = async ({email, password}) => {
        const makeUser = await User.create({email, password})
        return makeUser
    }

}

module.exports = UserRepository