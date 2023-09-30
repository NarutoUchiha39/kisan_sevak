import { NextRequest, NextResponse } from "next/server";
import farmerproblem from "@/models/Schemas/farmerproblem";


export  async function POST(req,res)
{
   
    const id = req.url
    const total = id.split('/')
    const id2 = total[total.length-1]
    const body = await req.json()
   
    let problems;
    if(id2 == "All"){

        problems = await farmerproblem.find({assigned:body.email})
    }

    else if(id2 == "Pending"){
        problems = await farmerproblem.find({assigned:body.email,status:"Pending"})
    }

    else if(id2 == "Completed"){
        problems = await farmerproblem.find({assigned:body.email,status:"Completed"})
    }
    
    else
    {
        return NextResponse.json({status:"error",message:"Something went wrong try again later"},{status:500})
    }

    

    return NextResponse.json({result:problems},{status:200})
}