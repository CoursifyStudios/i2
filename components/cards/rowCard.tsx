import Image, { StaticImageData } from "next/image";

const RowCard = ({className, content, image, title}: {className?: string, image: string | StaticImageData, title: string, content: string}) => {
	return (
		<div className={`overflow-hidden bg-white shadow-xl rounded-3xl ${className}`}>
			<Image
				src={image}
				alt={`Image of ${title}`}
				width={300}
				height={100}
				className="w-full h-40 object-cover"
			/>
			
			<h2 className="font-medium text-lg mt-2 px-5">{title}</h2>
			<p className="p-5 pt-0">{content}</p>
		</div>
	)
}

export default RowCard;