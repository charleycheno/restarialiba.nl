import { createClient } from "@/app/_utils/supabase/server"

export default async function Page() {
   const supabase = createClient()

   const user = await supabase.auth.getUser()

   return (
      <div>
         { JSON.stringify(user) }
      </div>
   )
}
