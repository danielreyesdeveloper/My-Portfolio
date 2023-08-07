import Link from "next/link";
import MainTitle from "@/components/MainTitle";
import BackHome from "@/components/BackHome";
import { FaWhatsapp, FaLinkedin, FaGithubAlt } from "react-icons/fa";
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const contactItems = [
  {
    name:"Whatsapp",
    icon:<FaWhatsapp/>,
    color:"text-green-400",
    bgColor:"hover:bg-green-500",
    href:"https://wa.me/523318780026",
    id: "1",
  },
  {
    name:"Linkedin",
    icon:<FaLinkedin/>,
    color:"text-sky-400",
    bgColor:"hover:bg-sky-500",
    href:"https://www.linkedin.com/in/daniel-reyes-developer/",
    id: "2",
  },
  {
    name:"Github",
    icon:<FaGithubAlt/>,
    color:"text-purple-400",
    bgColor:"hover:bg-violet-500",
    href:"https://github.com/danielreyesdeveloper",
    id: "3",
  },
]

const ContactPage = () => {
  return (
    <>
      <Header/>
      <Navbar/> 
      <main className="container">
        <MainTitle title="Contact"/>
        <div className="flex flex-wrap justify-center gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {contactItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferer"
              >
                <div
                  className={`bg-zinc-800 w-60 h-40 flex items-center justify-center rounded-t-lg duration-200
                  ease-in-out cursor-pointer contact-item hover:text-white ${item.color} ${item.bgColor}`}
                >
                  <span className="text-5xl">{item.icon}</span>
                </div>
                <div className="bg-zinc-800 text-white font-semibold py-2 text-center rounded-b-lg border-t-[1px] border-gray-600">
                  {item.name}
                </div>
              </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="https://mail.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold hover-zinc-500"
          >
            Email: danielreyesdev@gmail.com
          </Link>
        </div>
        
        <BackHome/>
      </main>
      <Footer/>
    </>
  )
}
export default ContactPage