const UserService = require("./user.services")

class UserController {
    userService = new UserService()

    signUp = async (req,res,next) => {
        const {email, password} = req.body

        try{
            const user = await this.userService.signUp({email,password})
            res.status(201).json({
                message:"회원가입 성공",
                nickname:user.nickname
            })
        }catch(error){
            next(error)
        }
    }
}