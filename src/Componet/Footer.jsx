import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-slate-950 justify-evenly py-2">
      <div className="text-gray-400">
        <p>Designed by Elegant Themes | Powered by WordPress</p>
      </div>
      <div className="flex gap-x-4 text-gray-400">
        <a href="#">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-google-plus-g"></i>
        </a>
        <a href="#">
          {" "}
          <i class="fa-solid fa-wifi"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
