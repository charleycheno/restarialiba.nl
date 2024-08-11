import ResetPasswordCard from '@/app/_components/Bestellen/ResetPasswordCard'
import { createClient } from '@/app/_utils/supabase/server'

export default async function Page() {
   const supabase = createClient()
   console.log(await supabase.auth.getUser())
   return (
      <div className="flex justify-center p-4 md:py-10">
         <ResetPasswordCard />
      </div>
   )
}