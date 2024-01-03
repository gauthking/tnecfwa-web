import poster from "../assets/upcomingevent.png";

const UpcomingEvents = () => {
  return (
    <div className=" min-h-screen pb-12">
      <hr />
      <header>
        <h1 className="font-kulimpark text-4xl md:text-5xl text-center mt-10">
          Upcoming Events
        </h1>

        <div className="flex flex-col items-center justify-center mt-10 gap-4 mx-6">
          <img
            src={poster}
            className=" w-[400px] md:w-[550px] rounded-2xl border-[#92AF92] border-4"
            alt=""
          />
          <div className="bg-[#92AF92] p-2 rounded-xl">
            <p className="font-kulimparkregular text-lg md:text-2xl text-center">
              Free Webinar : Production of Non-Woven Fibers
            </p>
            <button className="text-center text-[12px] p-2 bg-black rounded-xl text-white">
              <a href="https://forms.gle/bZXKU437QYnzUP6Y9" target="_blank">
                Register
              </a>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default UpcomingEvents;
