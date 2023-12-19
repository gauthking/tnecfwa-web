import PageContainer from "./page-container";
import phoneIcon from "../assets/phone-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import timeIcon from "../assets/timeicon.svg";
import qrcode from "../assets/scan.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import React from "react";
const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#5FBF8F",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div id="footer" className="bg-[#5FBF8F] py-20 px-10 text-xl max-w-full">
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={qrcode} alt="" />
        </Box>
      </Modal> */}
      <div className="md:px-4 flex-col lg:flex-row px-4 sm:px-auto flex w-full ">
        <div className="h-full flex flex-col w-full justify-between">
          <div>
            {/* <div className="flex justify-center items-center gap-2 mx-3 py-3">
                <img src={logo} className="w-12" alt="logosvg" />
                <a href="/">
                  <h1 className="flex text-3xl gap-1 font-koulen font-[700] text-[#014824]">
                    TNECFWA
                  </h1>
                </a>
              </div> */}

            {/* <div className="w-full bg-gray-600 h-[1px]"></div> */}
            <div className="flex items-center justify-center h-full ">
              <div className="mapembed">
                <h1 className="text-3xl md:text-5xl text-center font-kulimparkregular my-6 text-neutral-800">
                  directions
                </h1>
                <iframe
                  className="w-72 h-72 md:h-[400px] md:w-[400px]"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15692.903528829913!2d76.1667694!3d10.4828516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1703007628148!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:h-full w-full h-[.4px] mt-10 lg:mt-auto bg-green-700 lg:w-[.4px]"></div>
      </div>

      <div className="flex flex-col space-y-10 md:space-x-6 px-4">
        <h1 className="text-3xl md:text-5xl font-kulimparkregular w-full relative left-24 text-neutral-800">
          contact us
        </h1>
        {/* <div className="w-full bg-green-700 h-[1px] relative -left-10 -top-8"></div> */}

        <div className="flex flex-col gap-10 -mt-20 w-full">
          <div className="flex gap-2 items-center">
            <img src={phoneIcon} alt="phoneIcon" className="w-10" />
            <p className="font-kulimpark text-2xl text-white">098407 98193</p>
          </div>
          <div className="flex gap-2 items-center -ml-4">
            <img src={locationIcon} alt="phoneIcon" className="w-16" />
            <p className="font-kulimpark text-xl text-white leading-10">
              64A 22, <br />
              Alandur Road <br /> Saidapet Chennai, <br /> Tamil Nadu 600015
              India
            </p>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-kulimparkregular w-full relative left-20 text-neutral-800">
          business hours
        </h1>

        {/* <div className="w-full bg-green-700 h-[1px] relative -left-10 -top-8"></div> */}
        <div className="flex items-center gap-12">
          <img src={timeIcon} alt="timeIcon" className="w-10" />
          <p className=" text-lg text-justify text-white font-kulimpark leading-10">
            Mon:10:00 AM – 4:00 PM <br /> Tue:10:00 AM – 4:00 PM <br />{" "}
            Wed:10:00 AM – 4:00 PM <br />
            Thu:10:00 AM – 4:00 PM <br /> Fri:10:00 AM – 4:00 PM <br />{" "}
            Sat:Closed Sun:Closed
          </p>
        </div>

        <p className="font-semibold relative lg:left-10">
          Google Pay Number :{" "}
          <div className="font-light flex items-center gap-3 text-white font-kulimpark">
            <p>+91 8778801371 or</p>
            <p
              className="font-extralight text-gray-300 underline cursor-pointer"
              onClick={() => handleOpen()}
            >
              Click here for QR Code
            </p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Footer;
