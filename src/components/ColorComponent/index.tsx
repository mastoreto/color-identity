import React from "react";

const ColorComponent = () => {
  return (
    <div className="flex flex-col w-full px-[15rem]">
      <div className="my-5 flex flex-col m-auto">
        <label htmlFor="base-color" className="my-2 text-xl montserrat text-center">Insert your color</label>
        <h2 className="text-[#9e9e9e] my-5 montserrat text-center">We take care of the rest.</h2>
        <input
          type="text"
          name="base-color"
          id="base-color"
          value="#FF0000"
          className="rounded-xl border-2 border-[#ABABAB ] bg-[#E0E0E0] p-2 w-[15rem]"
        />
      </div>

      <div>
        <div className="flex flex-col ">
            <p className="montserrat text-xl mt-[2rem]">Primary</p>
            <div className="flex flex-row w-3/3 h-10 rounded-xl shadow-xl">
                <div className="w-1/3 h-10 rounded-tl-xl rounded-bl-xl bg-red-500"></div>
                <div className="w-1/3 h-10 bg-black"></div>
                <div className="w-1/3 h-10 rounded-tl-xr rounded-br-xl bg-white"></div>
            </div>

            <p className="montserrat text-xl mt-[2rem]">Secondary</p>
            <div className="flex flex-row w-5/5 h-10 rounded-xl shadow-xl">
                <div className="w-1/5 h-10 rounded-tl-xl rounded-bl-xl bg-[#FF5959]"></div>
                <div className="w-1/5 h-10 bg-[#FF7C7C]"></div>
                <div className="w-1/5 h-10 bg-[#FFA6A6]"></div>
                <div className="w-1/5 h-10 bg-[#FFD3D3]"></div>
                <div className="w-1/5 h-10 rounded-tr-xl rounded-br-xl bg-[#FFECEC]"></div>
            </div>

            <p className="montserrat text-xl mt-[2rem]">Tertiary</p>
            <div className="flex flex-row w-5/5 h-10 rounded-xl shadow-xl">
                <div className="w-1/5 h-10 rounded-tl-xl rounded-bl-xl bg-[#BF4040]"></div>
                <div className="w-1/5 h-10 bg-[#E1E1E1]"></div>
                <div className="w-1/5 h-10 bg-[#3F3F3F]"></div>
                <div className="w-1/5 h-10 bg-[#7F7F7F]"></div>
                <div className="w-1/5 h-10 rounded-tr-xl rounded-br-xl bg-[#D1D1D1]"></div>
            </div>
        </div>




      </div>
    </div>
  );
};

export default ColorComponent;
