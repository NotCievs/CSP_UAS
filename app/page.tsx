import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <main className="max-w-2xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Employee Portal
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Welcome to the employee management system
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Register
          </Link>
        </div>
      </main>
    </div>
  )
}
