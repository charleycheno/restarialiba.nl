import { createClient } from '@/app/_utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function Page() {
   const supabase = createClient()

   supabase.auth.signOut()
   redirect('/inloggen')
}