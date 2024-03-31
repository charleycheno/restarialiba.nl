import database from "@/app/_database/database"
import { NextResponse } from "next/server"

export async function POST(request) {
   try {
      const products = await database.getProducts()
      return NextResponse.json({ message: "Success", products: products }, { status: 200 })
   } catch(error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 })
   }
}