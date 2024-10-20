import president from "../assets/president.png";
import vpresident from "../assets/vp.png";
import sec from "../assets/secretary.png";
import tr from "../assets/treasurer.png";
import jtsec from "../assets/jtsec.png";
import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const OfficeBearers = () => {
  //modal
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
    borderRadius: "12px",
    boxShadow: 24,
    height: "80%",
    overflowY: "scroll",
    p: 4,
    margin: "10px",
  };
  return (
    <div className="bg-[#5FBF8F] max-w-full pb-12">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-10">
            <div className="flex flex-col gap-3">
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Dr Vijayaraja K, President
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Prof R R Elangovan, Vice President
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Dr Nadaraja Pillai, Secretary
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Prof C S Karunakaran, Jt Secretary
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Dr Asad Ahmed R, Founder &amp; Treasurer
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Dr Prem Kumar, Former Secretary &amp; EC Member
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Dr K Satish Kumar, EC Member
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Prof Ramakrishna, EC Member
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Dr Shanmuganathan, EC Member
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Prof D Sukumar, EC Member
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Prof A Jayababu, EC Member
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Prof Praveen Kumar U, EC Member
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Mr Senthamizh Selvan, EC Member
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Dr Praveen Joe I R, EC Member
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Prof R K Muthuraman, EC Member
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Dr Ravichandran, EC Member
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Dr Sankaran Arumugam, EC Member
              </p>
              <p className="font-kulimparkregular p-1 rounded-xl bg-gray-500">
                Prof John Alexander, EC Member
              </p>
            </div>
          </div>
        </Box>
      </Modal>
      <header className="pb-2 px-4 rounded-r-3xl relative top-11 bg-[#AEE5D8] border-2 border-[#c3e0b0] w-fit drop-shadow-xl">
        <div className="font-kulimpark text-4xl md:text-6xl">
          office bearers
        </div>
      </header>

      <div className="flex flex-col my-20 gap-20 justify-center">
        <div className="flex flex-col  gap-10 md:gap-2 lg:flex-row justify-evenly items-center">
          <div className="flex flex-col items-center justify-center">
            <img
              src={president}
              className="rounded-3xl border-[#92AF92] border-4 w-[200px]"
              alt=""
            />
            <h1 className="font-kulimpark">Dr Vijayaraja K</h1>
            <p className="font-kulimparkregular">President</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={vpresident}
              className="rounded-3xl border-[#92AF92] border-4 w-[200px]"
              alt=""
            />
            <h1 className="font-kulimpark">Prof R R Elangovan</h1>
            <p className="font-kulimparkregular">Vice President</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={sec}
              className="rounded-3xl border-[#92AF92] border-4 w-[200px]"
              alt=""
            />
            <h1 className="font-kulimpark">Dr Nadaraja Pillai</h1>
            <p className="font-kulimparkregular">Secretary</p>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:gap-2 lg:flex-row justify-evenly items-center">
          <div className="flex flex-col items-center justify-center">
            <img
              src={tr}
              className="rounded-3xl border-[#92AF92] border-4 w-[200px]"
              alt=""
            />
            <h1 className="font-kulimpark">Dr Asad Ahmed R</h1>
            <p className="font-kulimparkregular">Treasurer</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={jtsec}
              className="rounded-3xl border-[#92AF92] border-4 w-[200px]"
              alt=""
            />
            <h1 className="font-kulimpark">Prof C S Karunakaran</h1>
            <p className="font-kulimparkregular">Jt Secretary</p>
          </div>
        </div>

        <button
          onClick={() => handleOpen()}
          className="w-fit m-auto p-4 bg-black rounded-xl text-white"
        >
          <a className="font-kulimpark"> View EC Members</a>
        </button>
      </div>
    </div>
  );
};

export default OfficeBearers;
