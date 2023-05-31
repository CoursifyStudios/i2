import Image from "next/image";
import NavbarBackgroundColor from "./backgroundColor";
import i2Logo from "../../../app/icon.svg";
import Link from "next/link";

const links: { name: string; to: string }[] = [
	{
		name: "Projects",
		to: "/projects",
	},
  {
    name: "Students",
    to: "/students",
  },
	{
		name: "About",
		to: "/about",
	},
];

const Navbar = ({}: {}) => {
	return (
		<>
			<NavbarBackgroundColor />

			<nav className="fixed left-0 right-0 top-0 z-50 mx-auto flex h-14 w-full max-w-screen-lg items-center justify-between px-2 text-white">
				<Link
					href="/"
					className="group flex w-9 items-center overflow-hidden rounded bg-white p-1 font-medium text-black transition-all duration-500 hover:w-[12.5rem]"
				>
					<Image alt="i2 Logo" src={i2Logo} width={25} height={25} />
					<p className="invisible absolute ml-9 w-0 overflow-hidden whitespace-nowrap opacity-80 transition-all duration-500 group-hover:visible group-hover:w-[9.5rem] group-hover:opacity-100">
						Inquiry & Innovation
					</p>
				</Link>
				<section className="flex space-x-6">
					{links.map((link, i) => (
						<Link
							href={link.to}
							key={i}
							className="transition hover:text-green-400"
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
