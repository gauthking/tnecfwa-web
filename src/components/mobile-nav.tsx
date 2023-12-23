import React from "react";
import { CreateUserDataContext } from "../hooks/UseUserDataWrapper";
import CustomButton from "./common/custom-btn";
import CompleteDrawer from "./common/drawer";
import { Icons } from "./icons";
import PageContainer from "./page-container";
import { NavbarInfo } from "../utils/constant";
import logo from "../assets/logo.png";

/**
 * MobileNavbar component represents the mobile version of the navigation bar.
 *
 * @returns {React.Element} Returns a JSX element representing the mobile navigation bar.
 */
const MobileNavbar = () => {
  // Access user data context using useContext.
  const { setOpen, open } = React.useContext(CreateUserDataContext);

  /**
   * Toggles the mobile navigation drawer open or closed.
   *
   * @param {boolean} newState - The new state of the mobile navigation drawer.
   */
  const toggleMobileDrawer = (newState: boolean) => {
    setOpen(newState);
  };

  return (
    <div className="flex min-w-full md:hidden px-3 md:py-auto py-5 justify-between bg-[#AEE5D8] shadow-gray-500 shadow-md">
      <div className="flex justify-center items-center gap-2 mx-3">
        <img src={logo} className="w-10" alt="logosvg" />
        <a href="/">
          <h1 className="flex text-2xl gap-1 font-koulen font-[700] text-[#014824]">
            TNECFWA
          </h1>
        </a>
      </div>
      {/* Render CompleteDrawer for mobile navigation */}
      <CompleteDrawer
        isOpen={open}
        onClose={() => toggleMobileDrawer(false)}
        position=""
      >
        <PageContainer className="grid overflow-hidden min-h-screen max-h-screen h-full place-items-center grid-cols-1">
          <nav className="flex flex-col items-center space-y-4">
            {/* Map over NavbarInfo to render navigation links */}
            {NavbarInfo.map((item, index) => {
              return (
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
        </PageContainer>
      </CompleteDrawer>
      {/* Render custom button with hamburger icon */}
      <CustomButton
        className="text-xl"
        onClick={() => toggleMobileDrawer(!open)}
      >
        <Icons.Hamburger />
      </CustomButton>
    </div>
  );
};

export default MobileNavbar;
