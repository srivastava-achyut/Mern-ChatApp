import User from '../models/user.model.js'
import bcrypt from "bcryptjs";
import generateTokenandSetCookie from '../utils/generateToken.js'
export const signupUser = async (req,res) => {
    
    try {
        const {fullname, username, password, confirmPassword,gender}=  req.body;
        if(password !== confirmPassword){
            return res.status(400).json({error:"Password don't match"})
        }
        const user= await User.findOne({username})
        if(user){
            return res.status(400).json({error:"Username already exist"})
        }
          
        const salt=await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        const boyProfile = `https://ui-avatars.com/api/?name=${username}`
        const girlProfile=`https://ui-avatars.com/api/?name=${username}`

        const newUser = new User({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender==="male" ? boyProfile : girlProfile

        })

        
        if(newUser){
             generateTokenandSetCookie(newUser._id, res);
            await newUser.save();
           res.status(201).json({
            _id:newUser._id,
            fullname:newUser.fullname,
            username:newUser.username,
            profilePic:newUser.profilePic,


        })
        }
        else{
            res.status(400).json({error:"Invalid user data"});
        }
        
    } catch (error) {
        console.log("Error in signup controller ", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

export const loginUser = async (req,res) =>{

    try {
        const {username,password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "")
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid credentials"});
        }
        generateTokenandSetCookie(user._id,res);

        res.status(200).json({
             _id:user._id,
            fullname:user.fullname,
            username:user.username,
            profilePic:user.profilePic,
        })
    } 
    catch (error) {
         console.log("Error in login controller",error.message);
         res.status(500).json({error: "Internal Server error"})
    }
   
}

export const logoutUser = async (req,res) =>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:"Logged out Sucessfully"})
    } catch (error) {
         console.log("Error in logout controller",error.message);
         res.status(500).json({error: "Internal Server error"})
    }
}

