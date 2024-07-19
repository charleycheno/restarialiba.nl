"use client"

import ResetPasswordCard from '@/app/_components/Bestellen/ResetPasswordCard'
import EmailPromptCard from '@/app/_components/Bestellen/PasswordResetEmailPromptCard'
import EmailSentCard from '@/app/_components/Bestellen/EmailSentCard'
import { createClient } from '@/app/_utils/supabase/client'
import { useState } from 'react'

export default function Page() {
   const supabase = createClient()

   const [sent, setSent] = useState(false)

   const { data, error } = supabase.auth.getUser()

   if(data?.user) {
      return (
         <div className="flex justify-center p-4 md:py-10">
            <ResetPasswordCard />
         </div>
      )
   } else if(!data?.user) {
      return (
         <div className="flex justify-center p-4 md:py-10">
            {sent ? <EmailSentCard /> : <EmailPromptCard setSent={setSent} />}
         </div>
      )
   }
}