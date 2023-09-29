import "@/db/db"
import bcrypt from 'bcrypt'
import Register from "@/models/Schemas/Register";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req,res){
    
    let data = await (req.json());
    console.log(data)
    let email = data.email;
    let password = data.password;
    let crop = data.crop;
    let degree = data.degree
    let name = data.name
    let years = data.years

    console.log(data.name);
    const oldExpert = await Register.findOne({email:email})
        if(!oldExpert){
            let salt = await bcrypt.genSalt(10)
            let hashedPassword = await bcrypt.hash(password,salt)
            let result = await Register.insertMany({
                name:name,
                password:hashedPassword,
                crop:crop,
                degree:degree,
                email:email,
                years:years
            })
            return NextResponse.json({status:"success",message:"Verification request sent successfully",name:name,email:email},{status:200})
            
           
        }
        else{

            return NextResponse.json({status:"error",message:"User already exists !!"},{status:500})
            
        }
    

    
}


