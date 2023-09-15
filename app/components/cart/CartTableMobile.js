import React from "react";
import { MdDelete } from "react-icons/md";
import Quantity from "../shared/Quantity";

const CartTableMobile = () => {
  return (
    <div className="md:hidden flex gap-3 mb-5 border-b pb-5">
    <div className="">
      <img
        src="http://localhost:3000/_next/image?url=https%3A%2F%2Fdrfurithemes.com%2Ffarmart2%2Fwp-content%2Fuploads%2Fsites%2F19%2F2020%2F02%2F06_4a-300x300.jpg&w=384&q=75"
        className="h-20 w-20 object-cover rounded-md"
        alt=""
      />
    </div>
    <div className="flex-grow space-y-1">
      <h1 className="text-lg font-bold text-title">Bar S-Classic Bun Length Franks</h1>
      <p className="text-color text-sm font-semibold">
        Color: <span className="text-title">Black</span>
      </p>
      <p className="text-color text-sm font-semibold">
        Size: <span className="text-title font-bold">M</span>
      </p>
      <div className="py-2">
            <Quantity />
      </div>
      <p className="text-color text-sm font-semibold">
        Price: <span className="text-green font-bold">$100</span>
      </p>
     
    </div>
    <div className="mt-2">
      <MdDelete className="text-2xl cursor-pointer" />
    </div>
  </div>
  );
};

export default CartTableMobile;
