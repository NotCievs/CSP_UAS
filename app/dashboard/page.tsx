import { createSupabaseServer } from '@/lib/supabase/server'
import { logout } from './actions'

export default async function DashboardPage() {
  const supabase = await createSupabaseServer()

  const { data: { user } } = await supabase.auth.getUser()

  const { data: announcements } = await supabase
    .from('announcements')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-black py-10">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-gray-400 mt-1">Welcome, {user?.email}</p>
          </div>
          <form action={logout}>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors">
              Logout
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Announcements</h2>
          <div className="space-y-4">
            {announcements && announcements.length > 0 ? (
              announcements.map((item) => (
                <div key={item.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
                  <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                  <p className="text-gray-300 mt-2">{item.content}</p>
                  {item.created_at && (
                    <p className="text-sm text-gray-500 mt-2">
                      {new Date(item.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-400 text-center py-8 bg-zinc-900 rounded-lg border border-zinc-800">No announcements yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
