import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skill from "@/components/Skill";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <Navbar/>
      <main className="container">
      <section className="border-b-2 border-slate-200 pb-8 mb-14">
          <h4 className="text-gray-700 font-bold text-2xl mb-4">About me</h4>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="mb-6 leading-7">I am a Software developer living in Jalisco Mexico. My training is in web development, 
                my primary interest is create functional software for the real world. 
                I think that one of the essential goals of our generation is to understand 
                how works technology.
              </p>
              <Link
                href="Daniel Reyes CV.pdf"
                className="bg-rose-500 hover:bg-rose-700 transition-all ease-in duration-200 text-white font-semibold py-2 px-6 rounded-md"
                target="_blank"
                rel="noopener noreferer"
                download="Daniel Reyes CV"
              >
                  Download CV
              </Link>
            </div>
            <div>
              <Image
                className="rounded-md"
                src="https://res.cloudinary.com/dbnjogcsn/image/upload/v1655768876/code_zo8ddq.jpg"
                alt="about image (works)"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '245px', objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </section>
        <section>
          <h4 className="text-gray-700 font-bold text-2xl mb-7">Skills</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
            <Skill name="HTML"/>
            <Skill name="CSS"/>
            <Skill name="Tailwind"/>
            <Skill name="JavaScript"/>
            <Skill name="TypeScript"/>
            <Skill name="ReactJS"/>
            <Skill name="Next13"/>
            <Skill name="Wordpres Themes"/>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
