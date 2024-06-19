import React, { useEffect, useState } from "react";

export function VerifyNum() {
  const [time, setTime] = useState(60);
  const [displayTime, setDisplayTime] = useState("01:00");

  useEffect(() => {
    const tick = () => {
      const min = String(Math.trunc(time / 60)).padStart(2, 0);
      const sec = String(time % 60).padStart(2, 0);

      setDisplayTime(`${min}:${sec}`);

      if (time === 0) {
        // clearInterval(timer);
        // Add log out actions here if needed
      } else {
        // Decrease time by 1 second
        setTime((prevTime) => prevTime - 1);
      }
    };

    tick();
    const timer = setInterval(tick, 1000);

    // Cleanup on component unmount
    return () => clearInterval(timer);
  }, [time]);

  return (
    <>
      <div className="fixed inset-0 z-50 bg-opacity-20  flex justify-center items-center backdrop-blur w-full">
        <div className="bg-[#3f3e3e] text-[#eeebeb] flex flex-col items-center justify-center gap-3 absolute w-[500px] pt-10 pb-2 px-3 z-[999]">
          <h2 className="font-bold text-lg">Verify Your Number</h2>
          <p className="text-sm">Enter the 4 digit verification code.</p>
          <input className="w-[80px] bg-[#312f2f] outline-none outline-0 border-none focus:outline-none text-center" />
          <button className="bg-[#92929252] px-4 py-1 font-semibold">
            Verify
          </button>
          <span className="text-sm text-[#f1efef9a] flex items-end justify-end w-full">
            {displayTime}
          </span>
        </div>
      </div>
    </>
  );
}
