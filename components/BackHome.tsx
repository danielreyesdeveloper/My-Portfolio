import Link from "next/link"

const BackHome = () => {
  return (
    <div className="mt-10">
      <Link href="/" className="text-blue-500 hover:text-blue-700 hover:underline font-semibold text-lg">Back to Home</Link>
    </div>
  )
}
export default BackHome