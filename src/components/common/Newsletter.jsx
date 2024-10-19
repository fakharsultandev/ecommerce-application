import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import Input from "./Input";

const Newsletter = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold">Join our Newsletter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <p>Sign up to get first dibs on new arrivals, sales, exclusive content, events and more!</p>
        <div className="flex items-center gap-2">
          <Input
            type="email"
            placeholder="Email"
            name="newsletter-email"
            required
            autoComplete="email"
          />
          <button
            type="submit"
            className="p-2 flex items-center gap-2 text-base bg-zinc-900 rounded-full px-4 text-gray-100 hover:bg-zinc-800"
          >
            Subscribe <ArrowUpRightIcon className="w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;