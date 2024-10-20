import { NavbarInfo } from "../utils/constant";
import logo from "../assets/logo.png";
/**
 * MainNavbar component renders the main navigation bar.
 *
 * @returns {JSX.Element} - Returns the JSX element representing the main navigation bar.
 */
const MainNavbar = () => {
  return (
    <div className="hidden w-full items-center md:flex justify-between bg-[#AEE5D8] shadow-gray-500 shadow-md max-w-full m-auto">
      <div className="hidden md:flex justify-center items-center gap-2 mx-3 py-3">
        <img src={logo} className="w-12" alt="logosvg" />
        <a href="/">
          <h1 className="flex text-3xl gap-1 font-koulen font-[700] text-[#014824]">
            TNECFWA
          </h1>
        </a>
      </div>
      <nav className="space-x-12 flex">
        {/* Render navigation links */}
        {NavbarInfo.map((item, index) => {
          return (
            // Navigation link with font style and route
            <div className="flex">
              <img src={item.src} alt="" />
              <a
                className="font-kufam text-lg rounded-lg transition-all ease-in-out p-2"
                href={item.href}
                key={index}
              >
                {item.title}
              </a>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default MainNavbar;
