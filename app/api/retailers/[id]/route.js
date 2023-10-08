import Retailer from '@/models/Schemas/retailers'
import { NextResponse } from "next/server"
export async function GET(req,res){
    let total = req.url.split('/')
    let dynamic_url = total[total.length-1]
    let result = await Retailer.find({state:{$eq:"Maharashtra"}})
    console.log(result)
    return NextResponse.json({result:result},{status:200})
}