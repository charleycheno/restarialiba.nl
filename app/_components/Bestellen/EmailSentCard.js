import { Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";

export default function EmailSentCard() {
   return (
      <Card className="w-full md:max-w-100 h-full p-4">
         <CardHeader className="flex flex-col gap-4 md:px-10">
            <Image className="text-center" src="/icons/logo.png" width={100} height={100} />
            <h1 className="text-center text-2xl font-bold">E-mail verstuurd</h1>
            <p>Er is een e-mail verstuurd naar het opgegeven e-mailadres met instructies om het wachtwoord te resetten.</p>
         </CardHeader>
      </Card>
   )
}