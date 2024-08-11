"use client"

import EmailSentCard from "@/app/_components/Bestellen/EmailSentCard"
import EmailPromptCard from "@/app/_components/Bestellen/PasswordResetEmailPromptCard"
import { useState } from "react"

export default function Page() {
   const [sent, setSent] = useState(false)

   return (
      <div className="flex justify-center p-4 md:py-10">
         {sent ? <EmailSentCard /> : <EmailPromptCard setSent={setSent} />}
      </div>
   )
}