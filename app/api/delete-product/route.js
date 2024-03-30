import database from "@/app/_database/database"
import { NextResponse } from "next/server"

export async function DELETE(request) {
   try {
      const body = await request.json()
      database.deleteProduct(body.id)
      return NextResponse.json({ message: "Deleted" }, { status: 200 })
   } catch(error) {
      return NextResponse.json({ message: "Error", error }, { status: 500 })
   }
}