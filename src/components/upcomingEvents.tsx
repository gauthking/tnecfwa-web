// import poster from "../assets/upcomingevent.png";
import poster1 from "../assets/upcomingevent1.jpg";

const UpcomingEvents = () => {
  return (
    <div className=" min-h-screen pb-12">
      <hr />
      <header>
        <h1 className="font-kulimpark text-4xl md:text-6xl text-center mt-10">
          Upcoming Events
        </h1>
      </header>

      <div className="flex flex-col items-center justify-center mt-10 gap-4 mx-6">
        <img
          src={poster1}
          className=" w-[400px] md:w-[550px] rounded-2xl border-[#92AF92] border-4"
          alt=""
        />
        <div className="bg-[#89b8ad] p-2 rounded-xl">
          <p className="font-kulimparkregular text-lg md:text-2xl text-center">
            Free Webinar : Digital Technology in Aviation
          </p>
          <div className="flex p-2 items-center gap-3">
            <button className="text-center text-[12px] p-2 bg-black rounded-xl text-white">
              <a href="https://forms.gle/9Yg6dMUk9VBcc4fT7" target="_blank">
                Register
              </a>
            </button>
            <button className="text-center text-[12px] p-2 bg-black rounded-xl text-white">
              <a href="https://meet.google.com/ojm-triw-kvc" target="_blank">
                Google Meet
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
