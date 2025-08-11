'use client'

export default function Error({ error, reset }) {
  return (
    <div className="p-6">
      <h2 className="text-white text-xl">Something went wrong</h2>
      <p className="text-gray-400 mt-2">{error?.message}</p>
      <button
        className="mt-4 rounded bg-white/10 px-3 py-2 hover:bg-white/20 transition"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}


