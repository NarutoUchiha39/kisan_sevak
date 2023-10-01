import NextAuth from "next-auth/next";
import bcrypt from 'bcrypt'
import '@/db/db'
import login from "@/models/Schemas/Login";
import CredentialsProviders from "next-auth/providers/credentials";
export const authOptions  = {
    session:{
        strategy:"jwt"
    },
    providers:[
        CredentialsProviders(
            {
                type:"credentials",
                credentials:{},
                async authorize(credentials,req){
                    const {email,password} = credentials 
                    const user = await login.findOne({email:email}) 
                    if(!user) throw new Error("Expert not registered")
                    const passwordMatch = await bcrypt.compare(password,user.password)
                    if(!passwordMatch) throw new Error("Password doesnt match")
                    console.log(user.email)
                    return{
                        name: user.name,
                        email:user.email,
                        id:user._id,
                        role:user.role
                    }
                }
            }),
    ],
    callbacks:
    {
        jwt(params){

            if(params.user?.role){
                console.log(params)
                params.token.role = params.user.role
                params.token.id = params.user.id
                
            }
            return params.token
        },
        session({session,token}){

            if(session.user){
                session.user.id = token.id
                session.user.role = token.role
            }
             return session
        }
    }

}
const authHandler = NextAuth(authOptions)

export const GET = authHandler
export const POST = authHandler