import { register } from './actions'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function RegisterPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams

  async function handleRegister(formData: FormData) {
    'use server'
    const result = await register(formData)

    if (result?.error) {
      redirect(`/register?error=${encodeURIComponent(result.error)}`)
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center py-12 px-4">
      <form action={handleRegister} className="max-w-md w-full space-y-4 bg-zinc-900 p-8 rounded-lg shadow-xl border border-zinc-800">
        <h1 className="text-2xl font-bold text-white">Register</h1>

      {params.error && (
        <div className="bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded">
          {params.error}
        </div>
      )}

      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="w-full border border-zinc-700 bg-zinc-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        minLength={6}
        className="w-full border border-zinc-700 bg-zinc-800 text-white p-2 rounded focus:outline-none focus:border-blue-500"
      />

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors">
        Register
      </button>

      <p className="text-center text-sm text-gray-400">
        Already have an account?{' '}
        <Link href="/login" className="text-blue-400 hover:underline">
          Login here
        </Link>
      </p>
    </form>
    </div>
  )
}
