import "@/db/db"
import bcrypt from 'bcrypt'
import login from "@/models/Schemas/Login";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req,res){
    
    let data = await (req.json());

    let email = data.email;
    let password = data.password;
    console.log(password)
    const oldExpert = await login.findOne({email:email})
        if(oldExpert){
            console.log(oldExpert.password)
            let result = await bcrypt.compare(password,oldExpert.password)
            if(result){
                return NextResponse.json({status:"success",message:"User authenticated successfully",name:oldExpert.name,email:oldExpert.email},{status:200})
            }
            else{
                return NextResponse.json({status:"error",message:"User password doesnt match "},{status:500})
            }
        }
        else{

            return NextResponse.json({status:"error",message:"User already exists "},{status:500})
            
        }
    

    
}


