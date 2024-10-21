import React from "react";
import { Menu, MenuButton, MenuItem, MenuList } from "./common/Menu";
import { BiSort } from "react-icons/bi";
import Button from "./common/Button";

const SortMenu = ({ items, onSort }) => {
  return (
    <Menu>
      <MenuButton>
        <Button className="rounded-full text-zinc-600 px-4">
          <BiSort className="size-4" /> Sort by
        </Button>
      </MenuButton>
      <MenuList className="p-2 border bg-white mt-1 w-60 right-0 rounded transition-all">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => onSort(item.value)}
            className="p-2 hover:bg-gray-100 text-zinc-700"
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortMenu;
