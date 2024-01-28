import React from "react";

const Navgaiton = () => {
  return (
    <div className="flex mx-auto bg-white py-5 px-10">
      <div className="w-2/5">
        <h1 className="font-semibold text-center text-2xl capitalize">
          RESTAURANT LANDING PAGE
        </h1>
      </div>
      <div className="w-3/5 pl-32">
        <ol className="flex mx-auto gap-x-5 text-lg text bold">
          <li>
            <a href="/#" className="cursor-pointer hover:text-gray-600">
              Landing
            </a>
          </li>
          <li>
            {" "}
            <a href="/#" className="cursor-pointer hover:text-gray-600">
              Home
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/" className="cursor-pointer hover:text-gray-600">
              Gallery
            </a>
          </li>
          <li>
            {" "}
            <a href="/" className="cursor-pointer hover:text-gray-600">
              {" "}
              Shop
            </a>
          </li>
          <li>
            {" "}
            <a href="/" className="cursor-pointer hover:text-gray-600">
              {" "}
              Blog
            </a>
          </li>
          <li>
            {" "}
            <a href="/" className="cursor-pointer hover:text-gray-600">
              About
            </a>
          </li>
          <li>
            {" "}
            <a href="/" className="cursor-pointer hover:text-gray-600">
              {" "}
              Team
            </a>
          </li>
          <li>
            {" "}
            <a href="/" className="cursor-pointer hover:text-gray-600">
              {" "}
              Contact
            </a>
          </li>
          <li>
            <a href="/" className="cursor-pointer hover:text-gray-600">
              {" "}
              <i class="fa-solid fa-cart-shopping"></i>
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navgaiton;
