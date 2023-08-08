"use client";
import React, { useState } from "react";
import { Menu } from "@/components/Menu";
import Link from "next/link";
import logo from "/public/Logo.webp";
import Image from "next/image";
import { MenuIcon, X } from "lucide-react";
import { Input } from "./ui/input";

import Scard from "@/components/SCard";
import Wrapper from "./Wrapper";

const NavBar = () => {
  const [navbar, navSet] = useState(false);
  const items = Menu;
  const clickHandle = () => {
    navSet(!navbar);
  };
  return (
    <Wrapper>
      <nav>
        {/* <nav className="lg:px-10 px-5 max-w-[1350px] mx-auto mt-4"> */}
        {/* Large Screens */}
        <div className={`${navbar ? "hidden" : "  hidden lg:block"}`}>
          <div className=" flex justify-between items-center">
            <div className="">
              <Link href="/">
                <Image src={logo} alt="Logo" />
              </Link>
            </div>
            <div className="">
              <ul className="flex gap-x-5 items-center">
                {items.map((item, index) => (
                  <Link key={index} href={item.path}>
                    <li className="mb-2">{item.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="">
              <Input
                type="email"
                placeholder="What you are Looking for?"
                className=" lg:h-8 hidden lg:block"
              />
            </div>
            {/* Cart */}
            {/* <div className="">
            <div className="hidden lg:block">
              <div className="h-10 w-10 rounded-full bg-gray-300 relative flex justify-center items-center">
                <ShoppingCart className="w-5 h-5" />
                <div className="w-4 h-4 bg-red-500 text-[11px] rounded-full flex justify-center items-start text-white absolute right-1 top-0.5 ">
                  0
                  </div>
                  </div>
            </div>
          </div> */}
            <Scard />
          </div>
        </div>
        {/* Mobile Screens */}
        {/* <div className="lg:hidden flex justify-between"> */}
        <div className={`${navbar ? "hidden " : "block lg:hidden "}`}>
          <div className="flex justify-between">
            <div className="">
              <Link href="/">
                <Image src={logo} alt="Logo" />
              </Link>
            </div>
            <div onClick={clickHandle} className="">
              <MenuIcon />
            </div>
          </div>
        </div>
        {/* Toggle button click */}
        <div
          className={`${
            navbar
              ? "flex flex-col items-center h-screen w-screen "
              : "hidden lg:hidden"
          }`}
        >
          <div className="flex justify-between   w-full px-5 py-8">
            <div className="">
              <Link href="/">
                <Image src={logo} alt="Logo" />
              </Link>
            </div>
            <div onClick={clickHandle} className="">
              <div className="w-10 h-10 shadow-md rounded-full flex justify-center items-center">
                <X />
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="flex justify-center">
                <Scard />
              </div>
              <ul className="">
                {items.map((item, index) => (
                  <Link key={index} href={item.path}>
                    <li className="p-3">{item.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};

export default NavBar;
