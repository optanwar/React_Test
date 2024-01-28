import React from "react";

const Main_section = () => {
  return (
    <div
      className="h-full bg-no-repeat bg-cover  py-24"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600")`,
      }}
    >
      <h1 className="text-center mx-auto text-white text-5xl font-serif leading-6 tracking-wider font-semibold py-4 ">
        Only Quality Food
      </h1>
      <p className="text-gray-300 text-lg w-3/4 mx-auto text-center p-10">
        How do you describe the restaurant? Describing a restaurant involves
        painting a picture of its ambiance, cuisine, and overall dining
        experience. You can mention the type of cuisine served, the atmosphere,
        decor, and any unique features.
      </p>

      <div className="mx-auto flex gap-6 justify-center text-center">
        <button className="py-2 px-10 text-white border-2 hover:bg-yellow-600 hover:text-black transition-all duration-300 ">
          VIEW MENU
        </button>
        <button className="text-white bg-orange-300 py-2 px-10 hover:bg-yellow-700 transition-all duration-300">
          RESERVATION
        </button>
      </div>
    </div>
  );
};

export default Main_section;
