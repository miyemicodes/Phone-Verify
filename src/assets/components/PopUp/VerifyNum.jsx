import React from "react";

export function VerifyNum() {
  return (
    <>
      <div className="bg-[#3f3e3e] text-[#eeebeb] flex flex-col items-center justify-center gap-2 absolute top-[26%] left-[35%] right-[30%] w-[450px] h-[45vh] px-3">
        <h2 className="font-bold text-lg">Verify Your Number</h2>
        <p className="text-sm">Enter the 4 digit verification code.</p>
        <input />
        <button className="bg-[#92929252] px-4 py-1 font-semibold">
          Verify
        </button>
      </div>
    </>
  );
}
