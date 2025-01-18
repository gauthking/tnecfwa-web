import Marquee from "react-fast-marquee";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/upcomingevent2.jpg";
import image11 from "../assets/upcomingevent1.jpg";
import image12 from "../assets/upcomingevent3.jpg";

const Gallery = () => {
  return (
    <div className="min-h-screen max-w-full">
      <header className="pb-2 px-4 rounded-l-3xl relative top-11 bg-[#AEE5D8] border-2 border-[#c3e0b0] w-fit drop-shadow-xl float-right">
        <div className="font-kulimpark text-4xl md:text-6xl px-4">gallery</div>
      </header>
      <Marquee className="p-20 text-sm">
        <img
          src={image1}
          alt="image1"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image2}
          alt="image2"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image11}
          alt="image11"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image3}
          alt="image3"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image4}
          alt="image4"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image12}
          alt="image4"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image5}
          alt="image5"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image2}
          alt="image2"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image1}
          alt="image1"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image4}
          alt="image4"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
      </Marquee>
      <Marquee className="p-20 text-sm -mt-20" direction="right">
        <img
          src={image6}
          alt="image6"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image7}
          alt="image7"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image5}
          alt="image5"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image8}
          alt="image8"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image9}
          alt="image9"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image10}
          alt="image10"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
        <img
          src={image4}
          alt="image4"
          className="h-[220px] mx-6 border-4 rounded-xl border-[#92AF92] shadow-lg"
        />
      </Marquee>
    </div>
  );
};

export default Gallery;
