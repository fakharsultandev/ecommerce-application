import React from "react";
import PropTypes from "prop-types";

function PageTitleSection({ title = "", slogan="" }) {
  return (
    <div className="w-full h-72 bg-transparent opacity-100 flex items-center justify-center mb-10 rounded-lg relative overflow-hidden max-md:h-44">
      <div className="w-full h-full opacity-10 absolute "></div>
      <div className="text-center">
        <h1 className="text-zinc-900 text-5xl font-medium mb-2">
          {title}
        </h1>
        <p className="text-zinc-700">
         {slogan}
        </p>
      </div>
    </div>
  );
}

PageTitleSection.PropTypes = {
    title: PropTypes.string.isRequired,
    slogan: PropTypes.string,
}

export default PageTitleSection;
