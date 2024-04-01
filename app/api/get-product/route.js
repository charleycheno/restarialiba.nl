import database from "@/app/_database/database"
import { NextResponse } from "next/server"

export async function POST(request) {
   try {
      const body = await request.json()
      const product = await database.getProduct(body.id)
      return NextResponse.json({ message: "Success", product: product }, { status: 200 })
   } catch(error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 })
   }
}