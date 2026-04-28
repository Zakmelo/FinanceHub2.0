import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { logout } from '@/app/actions/auth'
import { Button } from '@/components/ui/button'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">FinanceHub</h1>
            <p className="text-sm text-muted-foreground mt-1">{user.email}</p>
          </div>
          <form action={logout}>
            <Button variant="outline" size="sm" type="submit">Sair</Button>
          </form>
        </div>
        <p className="text-muted-foreground">Dashboard em construção...</p>
      </div>
    </div>
  )
}
