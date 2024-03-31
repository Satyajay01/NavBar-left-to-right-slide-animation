import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";

function NevBar() {

  const [NewBar_anima, setNewBar_anima] = useState("");
  function NewBar_open() {
    setNewBar_anima ("transform translate-x-full")
  }
  function NewBar_close() {
    setNewBar_anima (" ")
  }

  


  return (
    <>
      <div className="fixed bg-sky-300 w-full flex justify-between p-3 shadow-2xl items-center ">
        
        <h1 className="text-2xl">Logo</h1>
        <div className=" flex">
          <button className="pr-8" type="button">login</button>
          <div onClick={NewBar_open} className=" text-2xl"><RiMenu2Line /></div>
        </div>
      </div>

      <div className={` fixed flex bg-[#2f2f3048] w-full h-screen top-0 left-[-100%] ${NewBar_anima} transition-all duration-700 ease-in-out`}>
      <div className="w-4/5 bg-white h-screen"></div>
      <div onClick={NewBar_close} className=" bg-[rgba(0,0,0,0.58)] w-1/4 h-screen backdrop-blur-[0.5px] "><h1 className="text-white text-xl p-8"><TfiClose /></h1></div>
        
        </div>
    </>
  );
}

export default NevBar;
