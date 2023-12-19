import PageContainer from "./page-container";
import phoneIcon from "../assets/phone-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import timeIcon from "../assets/timeicon.svg";
import qrcode from "../assets/scan.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import illustration2 from "../assets/illustration-2.svg";
import React from "react";
const FooterSection = () => {
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
    <footer id="footer" className="bg-[#5FBF8F] py-20 px-10 text-xl max-w-full">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={qrcode} alt="" />
        </Box>
      </Modal>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col w-full">
          <div className="-mt-36 lg:-mt-44">
            <img src={illustration2} className="lg:w-[30rem] " alt="" />
          </div>
          <div className="flex items-center justify-center h-full w-full">
            <div className="mapembed">
              <h1 className="text-3xl md:text-5xl text-center font-kulimparkregular mt-10 my-3 text-neutral-800">
                directions
              </h1>
              <div className="hidden lg:block w-full bg-white h-[1px] mb-6"></div>
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
        <div className="flex flex-col lg:border-l-[0.1rem] w-full">
          <h1 className="text-3xl md:text-5xl font-kulimparkregular w-full text-center  text-neutral-800">
            contact us
          </h1>

          <div className="hidden lg:block w-full bg-white h-[1px] mt-2"></div>

          <div className="flex flex-col gap-10 m-10 w-full">
            <div className="flex gap-2 items-center">
              <img src={phoneIcon} alt="phoneIcon" className="w-10" />
              <p className="font-kulimpark text-2xl text-white">098407 98193</p>
            </div>
            <div className="flex gap-2 items-center -ml-4">
              <img src={locationIcon} alt="phoneIcon" className="w-16" />
              <p className="font-kulimpark text-xl text-white md:leading-10">
                64A 22, <br />
                Alandur Road <br /> Saidapet Chennai, <br /> Tamil Nadu 600015
                India
              </p>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-kulimparkregular w-full text-center  text-neutral-800">
            business hours
          </h1>

          <div className="hidden lg:block w-full bg-white h-[1px] mt-2"></div>

          <div className="flex items-center gap-12 md:my-10 md:mx-10 my-6">
            <img src={timeIcon} alt="timeIcon" className="w-10" />
            <p className="text-lg lg:text-lg text-justify text-white font-kulimpark lg:leading-10">
              Mon : 10:00 AM – 4:00 PM <br /> Tue : 10:00 AM – 4:00 PM <br />{" "}
              Wed : 10:00 AM – 4:00 PM <br />
              Thu : 10:00 AM – 4:00 PM <br /> Fri : 10:00 AM – 4:00 PM <br />{" "}
              Sat : Closed Sun : Closed
            </p>
          </div>

          <p className="font-semibold relative lg:left-10 text-lg my-10 lg:text-xl">
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
    </footer>
  );
};

export default FooterSection;
