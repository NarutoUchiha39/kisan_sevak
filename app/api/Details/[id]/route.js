import { NextResponse } from "next/server";
import farmerschema from "@/models/Schemas/farmerschema";
export async function GET(req,res)
{
    let total = req.url.split('/')
    let id = total[total.length-1]
    let details = await farmerschema.findOne({aadhar_number:Number(id)});
    let first_name = details.first_name
    let adhar = details.adhar_number
    let last_name = details.last_name

    return NextResponse.json({id:id,first_name:first_name,last_name:last_name,adhar:adhar},{status:200})
}