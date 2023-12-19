// Import the necessary type definition for navigation items from the "../types" module.
import { INAV_INFO } from "../types";
import contactIcon from "../assets/contact-icon.svg"
import callIcon from "../assets/phone-icon.svg"
import directionIcon from "../assets/directions-icon.svg"
// Define an array of navigation items using the INAV_INFO type.
export const NavbarInfo: INAV_INFO[] = [
  {
    // Define the title of the first navigation item.
    title: "contact us",

    // Specify the URL for the "Home" page.
    href: "#footer",
    src: contactIcon
  },
  {
    // Define the title of the "History" navigation item.
    title: "call now",

    // Specify the URL for the "History" page.
    href: "#footer",
    src: callIcon
  },

  {
    // Define the title of the "About us" navigation item.
    title: "get directions",

    // Specify the URL for the "About us" page.
    href: "#footer",
    src: directionIcon
  },
];
