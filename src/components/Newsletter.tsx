import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";

const Newsletter = () => {
  return (
    <div className="grid justify-items-center">
      <div className="font-bold text-4xl pt-14">Subscribe Our Newsletter</div>
      <p className="py-5">
        Get the latest information and promo offers directly
      </p>
      <div className="flex gap-2">
        <div className="">
          <Input type="email" placeholder="Input email address" />
        </div>
        <div className="">
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
