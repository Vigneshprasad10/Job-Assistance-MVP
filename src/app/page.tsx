import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  
  // Test database connection
  const { data: jobs, error } = await supabase
    .from('jobs')
    .select('*')
    .limit(1)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Job Assistance System
        </h1>
        
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Database Connection Test</h2>
          
          {error ? (
            <div className="text-red-500">
              <p className="font-bold">❌ Connection Error:</p>
              <pre className="mt-2 text-xs">{error.message}</pre>
            </div>
          ) : (
            <div className="text-green-500">
              <p className="font-bold">✅ Database Connected Successfully!</p>
              <p className="mt-2 text-sm">Jobs table is accessible</p>
              <p className="mt-1 text-xs text-gray-500">
                {jobs?.length || 0} jobs found
              </p>
            </div>
          )}
        </div>

        <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
          Ready to build authentication system
        </p>
      </div>
    </main>
  )
}
