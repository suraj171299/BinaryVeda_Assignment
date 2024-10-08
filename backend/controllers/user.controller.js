import { User } from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import { generateTokenandSetCookie } from "../utils/generateTokenandSetCookie.js"

export const signup = async (req, res) => {
    const { username, email, password, age, address} = req.body
    try {
        const userAlreadyExists = await User.findOne({ email })
        
        if(userAlreadyExists) {
            return res.status(400).json({ success: false, message: 'Email already exists'})
        }

        const salt = 10
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = new User({
            email,
            username,
            password: hashedPassword,
            age,
            address
        })
        await user.save()

        const id = user._id.toString()
        generateTokenandSetCookie(res, id)

        res.status(201).json({ success: true,
            message: 'SignUp successful',
            user:{
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        return res.status(400).json({ success: false, message: error.message })
    }    
}

export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if(!user){
            return res.status(400).json({ success: false, message: 'Invalid Email. Please Login'})
        }

        const isPassword = await bcrypt.compare(password, user.password)

        if(!isPassword) {
            return res.status(400).json({ success: false, message: 'Invalid Credentials'})
        }

        const id = user._id.toString()
        generateTokenandSetCookie(res, id)

        res.status(200).json({ 
            success: true, 
            message: 'Login Successful',
            user:{
                ...user._doc,
                password: undefined
            } 
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message})
    }
}