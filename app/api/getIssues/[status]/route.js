import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import { useParams } from "next/navigation";
export  async function GET(req,res)
{
    console.log(req)
    const id = req.url
    const total = id.split('/')
    const id2 = total[total.length-1]
    
    return NextResponse.json({name:id2},{status:200})
}