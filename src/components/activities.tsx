import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const Activities = () => {
  const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  };
  const items = [
    <iframe
      className="border-4 border-[#92AF92] rounded-3xl m-auto w-[350px] lg:w-[500px] h-fit"
      height="215"
      src="https://www.youtube.com/embed/7RMYgiDagsg?si=3yeOpnxoTCwNGlC7"
      title="video 1"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>,
    <iframe
      className="border-4 border-[#92AF92] rounded-3xl m-auto w-[350px] lg:w-[500px] h-fit"
      height="215"
      src="https://www.youtube.com/embed/YecyjmFJZ9o?si=S7EIN_2m27JEGWl4"
      title="video 2"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>,
    <iframe
      className="border-4 border-[#92AF92] rounded-3xl m-auto w-[350px] lg:w-[500px] h-fit"
      height="215"
      src="https://www.youtube.com/embed/tEwqA7utVAA?si=Xh2IazdExPr7VeIm"
      title="video 3"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>,
    <iframe
      className="border-4 border-[#92AF92] rounded-3xl m-auto w-[350px] lg:w-[500px] h-fit"
      height="215"
      src="https://www.facebook.com/plugins/video.php?height=235&href=https%3A%2F%2Fwww.facebook.com%2FTNECFWA%2Fvideos%2F3516944825234522%2F&show_text=false&width=560&t=0"
      title="video 4"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>,
    <iframe
      className="border-4 border-[#92AF92] rounded-3xl m-auto w-[350px] lg:w-[500px] h-fit"
      height="215"
      src="https://www.facebook.com/plugins/video.php?height=234&href=https%3A%2F%2Fwww.facebook.com%2FTNECFWA%2Fvideos%2F1009936726721550%2F&show_text=false&width=560&t=0"
      title="video 5"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>,
    <iframe
      className="border-4 border-[#92AF92] rounded-3xl m-auto w-[350px] lg:w-[500px] h-fit"
      height="215"
      src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FTNECFWA%2Fvideos%2F1865592436948177%2F&show_text=false&width=560&t=0"
      title="video 6"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>,
    <iframe
      className="border-4 border-[#92AF92] rounded-3xl m-auto w-[350px] lg:w-[500px] h-fit"
      height="215"
      src="https://www.facebook.com/plugins/video.php?height=249&href=https%3A%2F%2Fwww.facebook.com%2FTNECFWA%2Fvideos%2F314877854298607%2F&show_text=false&width=560&t=0"
      title="video 7"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>,
    <iframe
      className="border-4 border-[#92AF92] rounded-3xl m-auto w-[350px] lg:w-[500px] h-fit"
      height="215"
      src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fasad.r.39%2Fvideos%2F2948257902091013%2F&show_text=false&width=333&t=0"
      title="video 8"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>,
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

      <section>
        <header></header>
      </section>
    </div>
  );
};

export default Activities;
