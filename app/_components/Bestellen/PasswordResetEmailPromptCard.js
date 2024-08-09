"use client"

import { createClient } from "@/app/_utils/supabase/client";
import { Card, CardHeader, CardBody, CardFooter, Input, Button } from "@nextui-org/react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function EmailPromptCard({ setSent}) {
   const supabase = createClient()

   const [email, setEmail] = useState("")

   const [loading, setLoading] = useState(false)
   const resetButton = useRef()
   const errorMessage = useRef()

   async function handlePasswordReset() {
      setLoading(true)
      if(email == "") {
         errorMessage.current.style.visibility = "visible"
         errorMessage.current.textContent = "Vul alle velden in"
         setLoading(false)
      } else {
         const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'https://www.ljhc.nl/nieuw-wachtwoord'
         })

         if (error) {
            errorMessage.current.style.visibility = "visible"
            errorMessage.current.textContent = "Er is een fout opgetreden"
            setLoading(false)
         } else {
            setSent(true)
         }
      }
   }

   return (
      <Card className="w-full md:max-w-100 h-full pt-4">
         <CardHeader className="flex flex-col gap-4 md:px-10">
            <Image src="/icons/logo.png" width={100} height={100} />
            <h1 className="text-center text-2xl font-bold">Wachtwoord resetten</h1>
            <p>Er zal een e-mail worden verzonden naar het onderstaande e-mail adres met instructies om het wachtwoord te resetten.</p>
         </CardHeader>
         <CardBody className="flex flex-col gap-4 md:px-10">
            <Input type="email" label="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button color="primary" className="font-medium" onPress={handlePasswordReset} ref={resetButton} isLoading={loading}>Wachtwoord resetten</Button>
            <p className="invisible text-red-500 text-center" ref={errorMessage}>Er is een fout opgetreden</p>
         </CardBody>
      </Card>
   )
}