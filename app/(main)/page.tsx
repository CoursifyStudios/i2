import RowCard from "@/components/cards/rowCard";
import Content from "@/components/layout/content";
import placeholderImage from "@/public/placeholder.jpg";
import Image, { StaticImageData } from "next/image";
import i2Logo from "@/app/icon.svg";

export default function Home() {
	return (
		<>
			<div className="relative -z-10 h-[100vh] select-none text-white ">
				<video
					autoPlay
					loop
					muted
					src="https://player.vimeo.com/progressive_redirect/playback/737942319/rendition/1080p/file.mp4?loc=external&signature=5d2eb330c0b79b10cf7eca8d73677a2117798a857684c832a16decee9117d9a4"
					className="h-[100vh] w-full select-none object-cover brightness-[0.85]"
				/>
				<div className="absolute inset-0 z-30 flex flex-col items-center justify-center backdrop-blur-md">
					<Image src={i2Logo} className="mb-6 h-36 w-36" alt="i2 Logo" />
					<h1 className="text-7xl font-bold">
						The Inquiry and Innovation Program
					</h1>
					<p className="mt-2 text-lg">At Sacred Heart Cathedral Preparatory</p>
				</div>
				<div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-30%" />
			</div>

			<Content>
				<div className="-mt-20 flex w-full rounded-lg bg-white mb-16 shadow-lg">
					<p className="p-4 text-center font-semibold">
						The Inquiry & Innovation Program {"(i2)"} is a four-year leadership
						and enrichment program that challenges students to inquire how their
						capabilities and passions can serve communities from the local to
						global scale and to explore innovative ways to do so effectively.The
						i2 Program develops students problem-solving, creativity, analytical
						abilities, and leadership skills through a curriculum that
						integrates STEM, liberal arts, and service. Through annual projects,
						field trips, talks, performances, and outdoor adventures, students
						examine and address ideas and issues outside the classroom. As they
						involve themselves in the many programs at SHC, including Robotics,
						the Student Launch Initiative, and TEDxYouth@SHC, i2 students build
						their capacity to create positive change in the world.
					</p>
				</div>
				<div className=" grid grid-cols-3 gap-6">
					<RowCard
						content="After 2 long years of not having a Showcase, i2 scholars will be presenting their projects on April 9th. The Showcase will begin at 10:00 am and go for 90 minutes until 11:30 am. We’ll take a 30-minute break, and then families will join the i2 scholars in the Collins Theatre for a celebration of the year. "
						image={placeholderImage}
						title="What's New in i2?"
					/>
					<RowCard
						content="The Inquiry & Innovation Program (i2) is a four-year leadership and enrichment program that challenges students to inquire how their capabilities and passions can serve communities from the local to global scale and to explore innovative ways to do so effectively."
						image={placeholderImage}
						title="What is i2?"
						className="-translate-y-10"
					/>
					<RowCard
						content="Senior Projects: Not surprisingly, many of the seniors have been infected with Senioritis, especially now that quite a number have begun to hear back from colleges. Seniors are now helping out underclass folks on their projects and will be acting as judges at the Showcase."
						image={placeholderImage}
						title="Project Update"
					/>
				</div>
				<div className="mb-[200rem]"></div>
			</Content>
		</>
	);
}
