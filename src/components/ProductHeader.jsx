import React from "react";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import SortMenu from "./SortMenu";
import Button from "./common/Button";

const ProductHeader = ({
  onSort,
  sortOptions,
  listViewTypes,
  handleViewType,
  currentViewType,
  handleFilterSidebar,
}) => (
  <div className="flex justify-between items-center w-full mb-8 rounded-lg gap-1 ">
    <Button
      className="rounded-full text-zinc-600"
      onClick={() => handleFilterSidebar(true)}
    >
      <AdjustmentsVerticalIcon className="size-5" />
    </Button>
    <div className="flex items-center gap-1">
      {listViewTypes.map((viewType) => (
        <Button
          className={
            viewType.value === currentViewType
              ? "bg-zinc-800 text-white rounded-full"
              : "text-zinc-500  rounded-full"
          }
          key={viewType.id}
          onClick={() => handleViewType(viewType.value)}
        >
          {viewType.icon()}
        </Button>
      ))}
    </div>
    <SortMenu items={sortOptions} onSort={onSort} />
  </div>
);

export default ProductHeader;
