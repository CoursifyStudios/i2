import Image, { StaticImageData } from "next/image";

const Header = ({className, image, name}: {className?: string, image: string | StaticImageData, name: string}) => {
	return (
		<section className={`h-96 max-h-[35vh] relative grid place-items-center  ${className}`}>
			<Image
			fill
			alt="Image"
			src={image}
			className="object-cover brightness-75 -z-10"
			/>
			<div className="text-white text-5xl font-bold">{name}</div>
		</section>
	)
}

export default Header;