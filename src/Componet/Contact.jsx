import React from "react";

const Contact = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center h-full"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/362550/pexels-photo-362550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
      }}
    >
      <div className="flex justify-center gap-x-16 w-3/4 mx-auto py-20 ">
        <div className=" bg-gray-900 py-10 px-20">
          <h1 className="text-xl text-white font-serif py-3 tracking-wide leading-8 text-center">
            Hour Of Operation
          </h1>
          <div className="border-b py-2 border-yellow-700 text-center text-white">
            <h3 className="py-2 text-center text-white">MON-FRI</h3>
            <h3 className="text-gray-400">10:00am - 1:00pm</h3>
            <h3 className="text-gray-400">4:00pm - 10:30pm</h3>
          </div>
          <div className="border-b py-2 border-yellow-700 text-center text-white">
            <h3 className="py-2">SAT</h3>
            <h3 className="text-gray-400">3:00px - 10:30pm</h3>
          </div>
          <div className="text-center text-white">
            <h3 className="py-2">SUN</h3>
            <h3 className="text-gray-400">We are closed</h3>
          </div>
          <button className="my-7 py-3 px-4 text-white bg-yellow-700 hover:bg-yellow-600 transition-all duration-300">
            MAKE A RESERVATION
          </button>
        </div>
        <div className=" bg-gray-900 py-10 px-20">
          <h1 className="text-xl text-white font-serif py-3 tracking-wide leading-8 text-center">
            Drop Us a Line
          </h1>
          <p className="text-center text-gray-400">
            Don't be shy. Let us know if you have any questions!
          </p>
          <button className="my-7 mx-auto block py-2 px-7 text-white bg-yellow-700 hover:bg-yellow-600 transition-all duration-300">
            CONTACT US
          </button>
          <h1 className="text-xl text-white font-serif py-3 tracking-wide leading-8 text-center">
            Our Newsletter
          </h1>
          <p className="text-center text-gray-400">
            Dialogue is an essential part of any script
          </p>
          <div className="flex justify-center mt-4">
            <form className="my-3 mx-auto">
              <input
                type="text"
                placeholder="First Name"
                className="bg-slate-950 py-2 block px-2 my-2 outline-none text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-slate-950 py-2 my-2 block px-2 outline-none text-white"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-slate-950 py-2 my-2 block px-2 outline-none text-white"
              />
              <button className="my-7 mx-auto w-full py-2 px-7 text-white bg-yellow-700 hover:bg-yellow-600 transition-all duration-300">
                CONTACT US
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
