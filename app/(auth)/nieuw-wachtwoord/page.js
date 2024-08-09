import ResetPasswordEmailCard from '@/app/_components/Bestellen/ResetPasswordEmailCard'
import ResetPasswordCard from '@/app/_components/Bestellen/ResetPasswordCard'
import { createClient } from '@/app/_utils/supabase/server'

export default async function Page() {
   const supabase = createClient()

   const { data, error } = await supabase.auth.getUser()
   console.log(data, error)

   if(data?.user) {
      return (
         <div className="flex justify-center p-4 md:py-10">
            <ResetPasswordCard />
         </div>
      )
   } else if(!data?.user) {
      return (
         <div className="flex justify-center p-4 md:py-10">
            <ResetPasswordEmailCard />
         </div>
      )
   }
}