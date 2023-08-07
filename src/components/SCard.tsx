import { ShoppingCart } from "lucide-react";
import React from "react";

const Scard = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="h-10 w-10 rounded-full bg-gray-300 relative flex justify-center items-center">
            <ShoppingCart className="w-5 h-5" />
            <div className="w-4 h-4 bg-red-500 text-[11px] rounded-full flex justify-center items-start text-white absolute right-1 top-0.5 ">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scard;
