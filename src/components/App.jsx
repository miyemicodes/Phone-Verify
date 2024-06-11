import React, { useState } from "react";
import { EnterNum } from "./PopUp/EnterNum";
import { VerifyNum } from './PopUp/VerifyNum';

function App() {
  const [openNumModal, setOpenNumModal] = useState(false);

  const [openVerifyNumModal, setOpenVerifyNumModal] = useState(false);

  const handleClick = () => setOpenNumModal(true);
  // const handleToggle = () => setEnternum(false);

  return (
    <>
      <div className=" flex items-center justify-center bg-[#1a1a1a] text-[#7c7878] w-full h-screen relative">
        <div className="flex flex-col items-center justify-center gap-10 w-[500px] h-lvh">
          {/* <div>
            <img src="" alt="" />
          </div> */}

          <div className="flex flex-col items-center gap-7">
            <h1 className="text-4xl">Verification Required</h1>
            <p className="text-md">
              We&apos;ve detected some abnormalities and we want to keep you and the
              community safe. Verify your account to continue using our product {/*  */}
              <a className="text-blue-400" href="#">
                learn more
              </a>
            </p>
            <button
              onClick={handleClick}
              className="font-bold border px-5 py-2 bg-slate-200 text-[#706e6e] cursor-pointer hover:border-slate-200 hover:bg-transparent hover:text-slate-200 "
            >
              Verify By Phone
            </button>
          </div>
        </div>
      </div>

      {openNumModal ? <EnterNum numModalState={setOpenNumModal} openVerifyNumModalState={setOpenVerifyNumModal}  /> : null}
      {openVerifyNumModal ? <VerifyNum /> : null}
    </>
  );
}

export default App;
