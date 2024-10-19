import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoTwitter,
} from "react-icons/bi";
import Newsletter from "./common/Newsletter";
import LinkListSection from "./common/LinkListSection";

const aboutUs = [
  {
    id: "1",
    title: "Our Story",
    path: "#",
  },
  {
    id: "2",
    title: "Visit our store",
    path: "#",
  },
  {
    id: "3",
    title: "Contact Us",
    path: "#",
  },
  {
    id: "4",
    title: "Account",
    path: "#",
  },
];

const help = [
  {
    id: "1",
    title: "Privacy Policy",
    path: "#",
  },
  {
    id: "2",
    title: "Return + Exchange",
    path: "#",
  },
  {
    id: "3",
    title: "Shipping",
    path: "#",
  },
  {
    id: "4",
    title: "Term & Conditions",
    path: "#",
  },
  {
    id: "5",
    title: "FAQ's",
    path: "#",
  },
  {
    id: "6",
    title: "My Wishlist",
    path: "#",
  },
];

function Footer() {
  return (
    <div className="max-w-screen-2xl m-auto px-6">
      <div className=" mb-4 border-t py-8 gap-16 grid grid-cols-4 max-md:grid-cols-1 max-lg:grid-cols-2">
        <div>
          <div className="title mb-4">
            <h1 className="text-3xl font-bold text-zinc-800">mfS</h1>
          </div>
          <div className="text-base flex flex-col gap-1 mb-6">
            <p>Address: 1234 Fashion Street, Suite 567,</p>
            <p>New York, NY 10001</p>
            <p>
              Email: <strong>company@domain.com</strong>
            </p>
            <p>
              Phone: <strong>(212) 123-5555</strong>
            </p>
          </div>
          <div className="inline-block text-sm text-black font-bold border-b border-b-black mb-6">
            <a
              href="#"
              className="flex items-center justify-between gap-2 py-2"
            >
              Get Direction <ArrowUpRightIcon className="size-4" />
            </a>
          </div>
          <div className="flex">
            <a
              href="#"
              className="p-2 border inline-block rounded-full border-zinc-900 mr-2 cursor-pointer hover:border-sky-700 transition-all hover:text-sky-700"
            >
              <BiLogoFacebook className="size-5" />
            </a>
            <a
              href="#"
              className="p-2 border inline-block rounded-full border-zinc-900 mr-2 cursor-pointer hover:border-sky-700 transition-all hover:text-sky-700"
            >
              <BiLogoTwitter className="size-5" />
            </a>
            <a
              href="#"
              className="p-2 border inline-block rounded-full border-zinc-900 mr-2 cursor-pointer hover:border-sky-700 transition-all hover:text-sky-700"
            >
              <BiLogoInstagram className="size-5" />
            </a>
            <a
              href="#"
              className="p-2 border inline-block rounded-full border-zinc-900 mr-2 cursor-pointer hover:border-sky-700 transition-all hover:text-sky-700"
            >
              <BiLogoTiktok className="size-5" />
            </a>
          </div>
        </div>
        <div>
          <LinkListSection title="Help" list={help}/>
        </div>
        <div>
          <LinkListSection title="About Us" list={aboutUs}/>
        </div>
        <div>
          <Newsletter />
        </div>
      </div>
      <div className="border-t py-10">
        <div>
          <p className="text-zinc-700">© 2024 mfS Store. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
