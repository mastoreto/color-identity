import React from "react";

const EmailComponent = () => {
  return (
    <div className="my-5">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="w-[15rem] rounded-xl border-2 border-[#ABABAB ] bg-[#E0E0E0] p-2"
      />
      <button className="mx-2 rounded-xl border-red-300 bg-[#FF6A6A] p-2 text-white">
        Get early access
      </button>
    </div>
  );
};

export default EmailComponent;
