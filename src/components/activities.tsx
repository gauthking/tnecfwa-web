import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";

const Activities = () => {
  const handleDragStart = (e: any) => e.preventDefault();
  const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  };
  const items = [
    <img
      src={image10}
      onDragStart={handleDragStart}
      className="m-auto w-1/2 h-1/2 border-4 border-[#92AF92] rounded-2xl"
    />,
    <img
      src={image11}
      onDragStart={handleDragStart}
      className="m-auto w-1/2 h-1/2 border-4 border-[#92AF92] rounded-2xl"
    />,
    <img
      src={image12}
      onDragStart={handleDragStart}
      className="m-auto w-1/2 h-1/2 border-4 border-[#92AF92] rounded-2xl"
    />,
    <img
      src={image13}
      onDragStart={handleDragStart}
      className="m-auto w-1/2 h-1/2 border-4 border-[#92AF92] rounded-2xl"
    />,
    <img
      src={image14}
      onDragStart={handleDragStart}
      className="m-auto w-1/2 h-1/2 border-4 border-[#92AF92] rounded-2xl"
    />,
    <img
      src={image15}
      onDragStart={handleDragStart}
      className="m-auto w-1/2 h-1/2 border-4 border-[#92AF92] rounded-2xl"
    />,
  ];
  return (
    <div className="max-w-full mb-20">
      <header className="pb-2 px-4 rounded-r-3xl relative top-11 bg-[#AEE5D8] border-2 border-[#E0B0D5] w-fit drop-shadow-xl">
        <div className="font-kulimpark text-4xl md:text-6xl">activities</div>
      </header>
      <div className="flex items-center justify-center mt-20 w-1/20">
        <AliceCarousel
          autoPlayInterval={4000}
          mouseTracking
          items={items}
          autoPlay={true}
          responsive={responsive}
          infinite={true}
        />
      </div>
    </div>
  );
};

export default Activities;
