"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
    id: "1",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    id: "2",
  },
  {
    name: "Contact",
    href: "/contact",
    id: "3",
  },
]

const Navbar = () => {
  const pathname = usePathname();
    return (
        <div className="bg-slate-800 sticky -top-1 border-t-[1px] border-gray-600 z-10">
          <nav className="content flex items-center justify-center gap-8 py-5 mb-14">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                className={`text-lg md:text-xl font-semibold ${isActive ? 'text-rose-400' : 'text-white'}`}
                href={link.href}
                key={link.id}
              >
                {link.name}
              </Link>
              )
            })}
          </nav>
        </div>
    );
}
export default Navbar