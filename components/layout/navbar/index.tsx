import Image from "next/image";
import NavbarBackgroundColor from "./backgroundColor";
import i2Logo from "../../../app/icon.svg";
import Link from "next/link";

const links: { name: string; to: string }[] = [
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Projects",
    to: "/projects",
  },
];

const Navbar = ({}: {}) => {
  return (
    <>
      <NavbarBackgroundColor />
      <nav className="sticky top-0 h-14 z-50 mx-auto max-w-screen-lg w-full px-2 flex items-center justify-between text-white">
        <Link
          href="/"
          className="rounded bg-white p-1 text-black flex items-center font-medium w-9 transition-all duration-500 hover:w-[12.5rem] group overflow-hidden"
        >
          <Image alt="i2 Logo" src={i2Logo} width={25} height={25} />
          <p className="invisible absolute opacity-80 group-hover:opacity-100 group-hover:visible transition-all duration-500 whitespace-nowrap ml-9 w-0 group-hover:w-[9.5rem] overflow-hidden">
            Inquiry & Innovation
          </p>
        </Link>
        <section className="flex space-x-6">
          {links.map((link, i) => (
            <Link
              href={link.to}
              key={i}
              className="hover:text-green-400 transition"
            >
              {link.name}
            </Link>
          ))}
        </section>
      </nav>
    </>
  );
};

export default Navbar;
