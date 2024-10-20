import React from "react";

function ProductDetailView({ product }) {
  return (
    <div className="w-fit mx-auto bg-white">
      <div className="sm:flex sm:items-center px-6 py-4">
        <img
          className="block mx-auto sm:mx-0 sm:flex-shrink-0 w-96 rounded-full"
          src={`/productImages/${product.image}`}
          alt="Product"
        />
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left flex flex-col max-md:items-center justify-center items-start">
          <p className="font-bold text-sm p-1 border-2 border-green-600 inline-block rounded-full px-4 text-green-800 bg-green-600 bg-opacity-30 mb-4">
            {product.category}
          </p>
          <p className="text-xl leading-tight">{product.title}</p>
          <p className="text-sm leading-tight text-gray-600">
            {product.description}
          </p>
          <div className="mt-4">
            <span className="text-gray-700 font-bold">
              Price: ${product.price}
            </span>
          </div>
          <div className="flex gap-4 my-4">
            <button className="border-2 p-2 rounded-full px-4 text-zinc-200 font-bold  bg-zinc-800 border-zinc-900">Add to Cart</button>
            <button className="border-2 p-2 rounded-full px-4 text-zinc-800 font-bold border-zinc-700">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailView;
