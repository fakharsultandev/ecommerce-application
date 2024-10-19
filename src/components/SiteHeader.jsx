import { HeartIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";
import Input from "./common/Input";

function Header() {
  return (
    <div className="w-full py-6 px-4 flex items-center justify-between md:px-14">
      <h1 className="text-3xl font-bold text-zinc-700 max-md:hidden">mfS</h1>
      <div className="flex gap-3 items-center">
        <div className="relative inline-block">
          <Input className="pl-10" name="search" type="search" placeholder="Search"/>
          <MagnifyingGlassIcon className="cursor-pointer hover:text-sky-700 size-5 text-zinc-600 absolute top-1/4 left-3" />
        </div>
        <div className="relative inline-block cursor-pointer hover:text-sky-700">
          <UserCircleIcon className="size-6" />
        </div>
        <div className="relative inline-block cursor-pointer hover:text-sky-700">
          <HeartIcon className="size-6" />
          <div className="absolute size-5 -right-2 -top-2 text-white font-bold bg-sky-600 rounded-full flex items-center justify-center">
            0
          </div>
        </div>
        <div className="relative inline-block cursor-pointer hover:text-sky-700">
          <ShoppingBagIcon className="size-6" />
          <div className="absolute size-5 -right-2 -top-2 text-white font-bold bg-sky-600 rounded-full flex items-center justify-center">
            0
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;