import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <div className="py-10 max-w-[100%] mb-12">
      <section className="flex items-center justify-center">
        <div className="mt-12 flex flex-col gap-14">
          <img src={logo} className="w-56 m-auto" alt="" />
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-kumbhsansbold w-3/4 text-center m-auto text-[#0C4428]">
            Tamilnadu Engineering College Faculty Welfare Association
          </h1>
          <button className="text-center text-xl lg:text-2xl p-3 hover:scale-105 ease-in-out bg-[#89b8ad] rounded-xl text-black w-fit m-auto ">
            <a
              className="font-kulimpark"
              href="https://forms.gle/bsd9nu1eefhNWMHY7"
              target="_blank"
            >
              {" "}
              Membership Form
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
