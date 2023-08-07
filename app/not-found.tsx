import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="bg-zinc-800 text-slate-100 h-screen flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl font-semibold mb-2">Could not find requested resource</p>
        <Link href="/" className="text-xl font-semibold text-rose-400 hover:text-rose-500 transition duration-200 ease-in-out">Back to Home</Link>
    </div>
  )
}