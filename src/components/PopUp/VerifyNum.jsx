import React from "react";

export function VerifyNum() {
  /* refactor this ehn my love 
  i add this z-[999] so the modal come up up */
  return (
    <>
      <div className="bg-[#3f3e3e] text-[#eeebeb] flex flex-col items-center justify-center gap-2 absolute top-[26%] left-[35%] right-[30%] w-[450px] h-[45vh] px-3 z-[999]">
        <h2 className="font-bold text-lg">Verify Your Number</h2>
        <p className="text-sm">Enter the 4 digit verification code.</p>
        {/* use input my love */}
        <input className="w-[80px] bg-[#312f2f] outline-none outline-0 border-none focus:outline-none text-center" />
        <button className="bg-[#92929252] px-4 py-1 font-semibold">
          Verify
        </button>
      </div>
    </>
  );
}
