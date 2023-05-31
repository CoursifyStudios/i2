import SHCLogo from "@/public/SHCLogo.svg";
import Image from "next/image";
import Link from "next/link";
const Footer = ({}: {}) => {
	return (
		<nav className="mx-auto flex w-full max-w-screen-lg items-center px-2 py-4 text-sm">
			<p className="font-medium">
				Made with ❤️ by{" "}
				<Link
					href="https://github.com/CoursifyStudios/i2"
					className="bg-gradient-to-r from-pink-400 to-orange-300 bg-clip-text font-bold text-transparent"
				>
					Coursify Studios
				</Link>
			</p>

			<p className="ml-auto font-medium">
				<Link href="/admin/login">Student Login</Link>
			</p>
			<a
				className="ml-4"
				href="https://shcp.edu/"
				rel="norefferer noopener"
				target="_blank"
			>
				<Image
					src={SHCLogo}
					alt="The Sacred Heart Cathedral Preparatory Logo"
					className="h-12"
				/>
			</a>
		</nav>
	);
};

export default Footer;
