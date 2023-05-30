import RowCard from "@/components/cards/rowCard";
import Content from "@/components/layout/content";
import Header from "@/components/layout/header";
import placeholderImage from "@/public/placeholder.jpg";

export default function Home() {
  return (
    <>
      <Header name="Inquiry and Innovation @ SHC" image={placeholderImage} />
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
      </Content>
    </>
  );
}
