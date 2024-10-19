import React from "react";
import Menu from "./common/Menu";
import {
  AdjustmentsVerticalIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import { PiSquaresFourLight } from "react-icons/pi";

const options = [
  { id: "01", title: "Featured", path: "/featured" },
  { id: "02", title: "Popular", path: "/popular" },
  { id: "03", title: "New", path: "/new" },
  { id: "04", title: "Top Rated", path: "/top-rated" },
  { id: "05", title: "Price", path: "/price" },
];

const ProductHandlersHeader = ({ handleViewType, handleFilterSidebar }) => (
  <div className="flex justify-between items-center w-full mb-8 rounded-lg gap-1 ">
    <button onClick={() => handleFilterSidebar(true)} className="border p-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-300 ease-in-out hover:bg-gray-100">
      <AdjustmentsVerticalIcon className="size-5" /> Filter
    </button>
    <div className="flex items-center gap-1">
      <div className="cursor-pointer p-2 border rounded-lg hover:bg-gray-100 transition-all" onClick={() => handleViewType("list")}>
        <ListBulletIcon className="w-6 h-6" />
      </div>
      <div className="cursor-pointer p-2 border rounded-lg hover:bg-gray-100 transition-all" onClick={() => handleViewType("grid")}>
        <PiSquaresFourLight className="w-6 h-6" />
      </div>
    </div>
    <Menu options={options} />
  </div>
);

export default ProductHandlersHeader;
