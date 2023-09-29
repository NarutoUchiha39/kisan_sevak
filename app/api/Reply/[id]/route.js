import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { useParams } from "next/navigation";
import farmerproblem from "@/models/Schemas/farmerproblem";


export  async function POST(req,res)
{
   
    const id = req.url
    const total = id.split('/')
    const id2 = total[total.length-1]
    const body = await req.json()
    console.log(body)
    let problems;
    if(id2 == "All"){

        problems = await farmerproblem.find({assigned:body.email})
    }

    return NextResponse.json({result:problems},{status:200})
}