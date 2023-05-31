import RowCard from "@/components/cards/rowCard";
import Content from "@/components/layout/content";
import Header from "@/components/layout/header";
import placeholderImage from "@/public/placeholder.jpg";
import image from "next/image";
import Image, { StaticImageData } from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative h-[100vh] select-none -z-10">
        <Image
          alt="Image"
          src={placeholderImage}
          className="h-[100vh] w-full brightness-90 select-none "
        />
        <h1 className="content-center">Inquiry & Innovation Program</h1>
        <div className="inset-0 absolute bg-gradient-to-b from-transparent via-transparent to-gray-100" />
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
