"use client"

import { useState } from "react"
import EmailSentCard from "./EmailSentCard"
import EmailPromptCard from "./PasswordResetEmailPromptCard"

export default function ResetPasswordEmailCard() {
  const [sent, setSent] = useState(false)

  return (
    <>
      {sent ? <EmailSentCard /> : <EmailPromptCard setSent={setSent} />}
    </>
  )
}