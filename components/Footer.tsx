import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 h-24 mt-14 flex justify-center items-center">
      <div className="content text-white">
        <p className="flex justify-center items-center">Made with <FaHeart className="text-rose-500 mx-1" /> by Daniel Reyes</p>
      </div>
    </footer>
  )
}
export default Footer