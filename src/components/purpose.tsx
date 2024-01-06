import illustration1 from "../assets/illustration-1.svg";

const Purpose = () => {
  return (
    <div className="bg-[#5FBF8F] max-w-full">
      <header className="pb-2 px-4 rounded-r-3xl relative top-11 bg-[#AEE5D8] border-2 border-[#E0B0D5] w-fit drop-shadow-xl">
        <div className="font-kulimpark text-4xl md:text-6xl">purpose</div>
      </header>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between mx-10 pb-20">
        <div className="w-full xl:w-1/2 font-kulimparkregular md:text-3xl mt-12 md:mt-32">
          <p className="xl:leading-[3rem]">
            The TNECFWA aims to foster collaboration among engineering college
            teachers in Tamil Nadu, promoting higher education and research in
            engineering. Activities include advocating for academic freedom,
            improving faculty economic status, encouraging governance
            participation, disseminating information on education principles,
            and developing chapter programs to advance the profession.
          </p>
        </div>
        <div className="relative top-10 md:-top-24 flex flex-col">
          <div>
            <img src={illustration1} className="w-[600px]" alt="" />
          </div>
          <div>
            <button className="text-center p-2 md:pd-4 bg-black rounded-xl text-xs md:text-lg text-white my-4 lg:relative lg:top-16 lg:left-10">
              <a
                href="https://tnecfwa-constitution.tiiny.site/"
                target="_blank"
                className="font-kulimpark"
              >
                {" "}
                View Constitution
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purpose;
