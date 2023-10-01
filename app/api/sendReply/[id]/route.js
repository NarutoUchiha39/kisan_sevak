import { NextResponse } from "next/server";
import Reply from "@/models/Schemas/Reply";
export async function POST(req,res)
{
    const body = await req.json()
    let total = req.url.split('/')
    let dynamic_id = total[total.length-1]
    const date = new Date();
    let split = dynamic_id.split("_")
    let adhar = split[1]
    let id = split[0]
    let email = split[2]
    
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let final_date = String(day) + "/"+ String(month) +"/" + String(year) 

    let result = await Reply.insertMany({
        email_id:email,
        reference_id:id,
        Replied_at:final_date,
        prescription:body.prescription,
        diagnosis:body.diagnosis,
        adhar_number:adhar
    })

    let result2 = await problem.problem.updateOne({_id:{$eq:id}},{
        status:"completed"
    })
    
    return NextResponse.json({status:"Success",message:"sent successfully !!"},{status:200})
    
}