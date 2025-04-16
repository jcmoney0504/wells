import User from "../model/user.model.js"

export const login = async (req, res) => {
    try {
        const {username, password} = req.body
         
        const existingUser = await User.findOne({username})
        if(existingUser) {
            return res.status(400).json({message: "User already exist"})
        }

        const user = await User.create({
            username,
            password
        })

        return res.status(200).json({data: user})
    } catch (error) {
        console.log("Error in login", error);
        return res.status(500).json({message: "Something went wrong"})        
    }
}