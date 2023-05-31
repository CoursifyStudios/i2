import Header from "@/components/layout/banner";
import Image from "next/image";
import placeholderImage from "@/public/placeholder.jpg";

export default function About() {
  return (
    <div>
      <Header name="About i2" image={placeholderImage} />
    </div>
  );
}
