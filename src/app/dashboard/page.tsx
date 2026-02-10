import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import LogoutButton from '@/components/layout/LogoutButton'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: userData } = await supabase.auth.getUser()
  const user = userData?.user

  if (!user) {
    redirect('/login')
  }

  // Get user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user!.id)
    .single()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Job Assistance Dashboard
              </h1>
            </div>
            <div className="flex items-center">
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome back, {profile?.full_name || 'User'}!
            </h2>
            
            <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                    {user.email}
                  </dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Account Created
                  </dt>
                      <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                        {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                      </dd>
                </div>

                {profile?.location && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                      {profile.location}
                    </dd>
                  </div>
                )}

                {profile?.phone && (
                  <div>
                    <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Phone
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                      {profile.phone}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Quick Stats
              </h3>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="bg-blue-50 dark:bg-blue-900 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-blue-900 dark:text-blue-100 truncate">
                      Total Applications
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-blue-600 dark:text-blue-200">
                      0
                    </dd>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-green-900 dark:text-green-100 truncate">
                      Pending
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-green-600 dark:text-green-200">
                      0
                    </dd>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-yellow-900 dark:text-yellow-100 truncate">
                      Interviews
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-yellow-600 dark:text-yellow-200">
                      0
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}