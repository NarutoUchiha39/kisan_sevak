import farmerproblem from "@/models/Schemas/farmerproblem"
import { NextResponse } from "next/server"
export async function GET(req,res){
    let total = req.url.split('/')
    let dynamic_url = total[total.length-1]
    console.log(dynamic_url)
    let result = await farmerproblem.findOne({_id:dynamic_url})
    return NextResponse.json({result:result},{status:200})
}