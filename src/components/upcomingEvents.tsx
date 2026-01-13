// import poster from "../assets/upcomingevent.png";
import poster2 from "../assets/iitm.jpg";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  return (
    <div className=" min-h-screen pb-12">
      <hr />
      <header>
        <h1 className="font-kulimpark text-4xl md:text-6xl text-center mt-10">
          Upcoming Events
        </h1>
      </header>
      <div className="flex flex-col items-center justify-center w-full gap-10">
        <div className="flex flex-col items-center justify-center mt-10 gap-4 mx-6">
          <img
            src={poster2}
            className=" w-[300px] md:w-[450px] rounded-2xl border-[#92AF92] border-4"
            alt=""
          />

        </div>
        <Link to={"https://beige-lidia-31.tiiny.site/"}>
          <button className="text-center text-xl lg:text-2xl p-3 hover:scale-105 ease-in-out bg-[#89b8ad] rounded-xl text-black w-fit m-auto font-kulimpark ">
            View RIDE Rules
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;
