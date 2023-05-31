import RowCard from "@/components/cards/rowCard";
import Content from "@/components/layout/content";
import Header from "@/components/layout/header";
import placeholderImage from "@/public/placeholder.jpg";
import image from "next/image";
import Image, { StaticImageData } from "next/image";
import i2Icon from "@/app/icon.svg";

export default function Home() {
  return (
    <>
      <div className="relative h-[100vh] select-none -z-10">
        <video
          autoPlay
          loop
          muted
          src="https://player.vimeo.com/progressive_redirect/playback/737942319/rendition/1080p/file.mp4?loc=external&signature=5d2eb330c0b79b10cf7eca8d73677a2117798a857684c832a16decee9117d9a4"
          className="h-[100vh] w-full brightness-[0.65] select-none object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center flex-col z-30 backdrop-blur-sm text-white -translate-y-24">
          <Image src={i2Icon} className="w-36 h-36 mb-6" alt="i2 icon" />
          <h1 className="text-7xl font-bold">
            The Inquiry and Innovation Program
          </h1>
          <p className="text-lg mt-2">At Sacred Heart Cathedral Preperatory</p>
        </div>

        <div className="inset-0 absolute bg-gradient-to-b from-transparent to-gray-100 from-75%" />
      </div>

      <Content>
        <div className="grid grid-cols-3 gap-6 -mt-10">
          <RowCard
            content="words here"
            image={placeholderImage}
            title="Wordsss"
          />
          <RowCard
            content="words here"
            image={placeholderImage}
            title="Wordsss"
            className="-translate-y-10"
          />
          <RowCard
            content="words here"
            image={placeholderImage}
            title="Wordsss"
          />
        </div>
        <div className="mb-[200rem]"></div>
      </Content>
    </>
  );
}
