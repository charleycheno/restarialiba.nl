import database from "@/app/_database/database"
import { NextResponse } from "next/server"

export async function PATCH(request) {
   try {
      const body = await request.json()
      const product = await database.updateProduct(body.id, body.update)
      return NextResponse.json({ message: "Updated", product: product }, { status: 200 })
   } catch(error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 })
   }
}