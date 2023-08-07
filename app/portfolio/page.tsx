import Link from "next/link";
import Image from "next/image"
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MainTitle from "@/components/MainTitle";
import BackHome from "@/components/BackHome";
import { FaFolderOpen, FaLink } from "react-icons/fa";

const projectList = [
  {
    id: 1,
    title:"My web (portfolio)",
    image:"https://res.cloudinary.com/dbnjogcsn/image/upload/v1691005630/portfolio_mkunpp.png", 
    href: "/",
    slug: "project-1",
  },
  {
    id: 2,
    title:"Fakestore API",
    image:"https://res.cloudinary.com/dbnjogcsn/image/upload/v1691005630/fakestore-api_zvzzic.png",
    href: "https://fakestore-api-zeta.vercel.app/",
    target:"_blank",
    slug: "project-2",
  },
  {
    id: 3,
    title:"Stream app design",
    image:"https://res.cloudinary.com/dbnjogcsn/image/upload/v1691005630/stream-app_i9lx4f.png",
    href: "https://stream-app-omega.vercel.app/",
    target:"_blank",
    slug: "project-3",
  },
]

const PortfolioPage = () => {
  return (
    <>
      <Header/>
      <Navbar/> 
      <main className="container">
        <MainTitle title="Works"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-10">
          {projectList.map((project) => (
            <div key={project.id}>
              <div className="relative">
                <Image
                  className="h-[280px] lg:h-[230px] rounded-md shadow-md"
                  src={project.image}
                  alt="about image (works)"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', objectFit: "cover" }}
                  priority
                />
                <Link 
                  className="bg-gray-800/80 absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col rounded-lg cursor-pointer opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  href={project.href}
                  target={project.target}
                  rel="noopener noreferrer"
                >
                  <span className="text-white text-4xl"><FaFolderOpen/></span>
                </Link>
              </div>
              <div className="flex justify-between items-center mt-3">
                <p className="text-gray-700 text-xl font-semibold">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
        <BackHome/>
      </main>
      <Footer/>
    </>
  )
}
export default PortfolioPage