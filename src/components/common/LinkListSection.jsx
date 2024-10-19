import React from "react";

function List({ list = [] }) {
  return (
    <div className="flex flex-col gap-2 text-sm">
      {list.map((item) => (
        <a key={item.id} href={item.path}>
          {item.title}
        </a>
      ))}
    </div>
  );
}

const LinkListSection = ({ title, list = [] }) => {
  return (
    <div className="Help flex flex-col gap-4">
      <div>
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
      <div>
        <List list={list}/>
      </div>
    </div>
  );
};

export default LinkListSection;
