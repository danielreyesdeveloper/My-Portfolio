import Animation from "@/components/Animation";

const Header = () => {
  return (
    <div className="bg-slate-800 h-80 flex justify-center items-center relative">
        <Animation/>
        <div className="text-center text-white z-50">
            <h1 className="text-4xl font-bold mb-1">Daniel Reyes</h1>
            <h2 className="text-2xl font-semibold">Web Developer</h2>
        </div>
    </div>
  )
}
export default Header