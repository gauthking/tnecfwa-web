import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Media = () => {
  return (
    <div className="bg-[#b1bdb4] py-3">
      {/* <header>
        <h1 className="font-kulimpark text-4xl md:text-6xl text-center mb-5">
          Media Coverages
        </h1>
      </header> */}
      <section className="flex flex-col lg:flex-row ">
        <Marquee pauseOnHover={true} className="text-sm">
          <Link
            to={
              "https://www.newindianexpress.com/states/tamil-nadu/2023/nov/18/anna-university-hikes-exam-fee-for-engineeringstudents-by50-to-affect-rural-and-migrant-students-2633988.html"
            }
          >
            <div className="p-2 rounded-xl bg-[#4d7c71] text-xs md:text-lg font-kulimparkregular text-white mx-4">
              Anna University hikes exam fee for engineering students by
              50%,....
            </div>
          </Link>
          <Link
            to={
              "https://www.newindianexpress.com/cities/chennai/2021/aug/17/expand-industrial-sector-to-ensuresurvival-of-engineers-expert-2345684.html"
            }
          >
            <div className="p-2 rounded-xl bg-[#4d7c71] text-xs md:text-lg font-kulimparkregular text-white mx-4">
              Expand industrial sector to ensure survival of engineers...
            </div>
          </Link>
          <Link
            to={
              "https://www.vikatan.com/government-and-politics/education/the-controversy-regarding-anna-university-exam-results-getting-withheld?utm_source=mobile&utm_medium=whatsapp"
            }
          >
            <div className="p-2 rounded-xl bg-[#4d7c71] text-xs md:text-lg font-kulimparkregular text-white mx-4">
              "கேமராவைப் பார்த்துக் கொண்டேயிருக்கவேண்டும்!" - அண்ணா...
            </div>
          </Link>
        </Marquee>
      </section>
    </div>
  );
};

export default Media;
