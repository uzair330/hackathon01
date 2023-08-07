import React from "react";
import Image from "next/image";
import logo from "/public/Logo.webp";
import {
  Facebook,
  Linkedin,
  LinkedinIcon,
  LucideLinkedin,
  Twitter,
} from "lucide-react";
import Wrapper from "./Wrapper";
const Footer = () => {
  return (
    <Wrapper>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 py-16 gap-x-5 ">
          <div className="md:col-span-1">
            <div className="flex flex-grow">
              <Image src={logo} alt="Logo" width={150} />
            </div>
            <div className="py-10 ">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </div>
            <div className="flex pb-5 gap-x-2">
              <div className="flex justify-center items-center w-10 h-10 bg-slate-300 rounded-md">
                <Twitter />
              </div>
              <div className="flex justify-center items-center w-10 h-10 bg-slate-300 rounded-md">
                <Facebook />
              </div>
              <div className="flex justify-center items-center w-10 h-10 bg-slate-300 rounded-md">
                <LucideLinkedin />
              </div>
            </div>
          </div>
          <div className="">
            <div className="py-1 font-bold text-lg">Company</div>
            <ul>
              <li className="py-2">About</li>
              <li className="py-2">Terms of Use</li>
              <li className="py-2">Privacy Policy</li>
              <li className="py-2">Privacy Policy</li>
              <li className="py-2">Contact Us</li>
            </ul>
          </div>

          <div className="">
            <div className="py-1 font-bold text-lg">Support</div>
            <ul>
              <li className="py-2">Support Carrer</li>
              <li className="py-2">24h Service</li>
              <li className="py-2">Quick Chat</li>
            </ul>
          </div>
          <div className="">
            <div className="py-1 font-bold text-lg">Contact</div>
            <ul>
              <li className="py-2">Whatsapp</li>
              <li className="py-2">Support 24h</li>
            </ul>
          </div>
        </div>
        <hr className="border border-gray-300 my-4" />
        <div className="grid md:px-28 px-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full h-16 items-center ">
          <div className="">Copyright © 2022 Dine Market</div>
          <div className="">
            Design by. <span className="font-bold">Muhammad Uzair</span>
          </div>
          <div className="">
            Code by. <span className="font-bold">Uzair330 on github</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
