import React, { useState } from "react";
import { VerifyNum } from "./VerifyNum";

export function EnterNum() {
  const [showVerifyNum, setVerifyNum] = useState(false);
  const handleVerifyClick = () => setVerifyNum(true);

  return (
    <>
      <div className="bg-[#3f3e3e] text-[#eeebeb] flex flex-col items-center justify-center gap-2 absolute top-[26%] left-[35%] right-[30%] w-[450px] h-[45vh] px-3">
        <h2 className="font-bold text-lg">Enter a Phone Number</h2>
        <p className="text-sm">
          You will receive a call with a verification code.
        </p>
        <p className="text-sm ">
          Your phone Number can be used to verify one only account and for
          verification and login.
        </p>
        <div className=" bg-[#312f2f] p-2 flex gap-3">
          <select className=" outline-1 bg-[#92929252] w-11">
            <option value="1"></option>
            <option value="2"></option>
            <option value="3"></option>
          </select>

          <input type="number" className="bg-transparent outline-none" />

          <button className="bg-[#92929252] px-4 py-1 font-semibold">
            Send
          </button>
        </div>
      </div>
    </>
  );
}
