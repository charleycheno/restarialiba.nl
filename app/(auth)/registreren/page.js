import RegisterCard from "@/app/_components/Bestellen/RegisterCard";
import { createClient } from "@/app/_utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Page() {
   const supabase = createClient()

   const { data } = await supabase.auth.getUser()

   if(data.user) {
      redirect("/bestellen")
   }

   return (
      <div className="flex justify-center p-4 md:py-10">
         <RegisterCard />
      </div>
   )
 }
 