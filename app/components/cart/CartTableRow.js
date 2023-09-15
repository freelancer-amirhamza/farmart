import React from "react";
import Quantity from "../shared/Quantity";
import { MdDelete } from "react-icons/md";

const CartTableRow = () => {
  return (
          <tr className="border-b md:border-r md:border-l table_row">
            <td className="py-5 pl-3">
              <img
                src="http://localhost:3000/_next/image?url=https%3A%2F%2Fdrfurithemes.com%2Ffarmart2%2Fwp-content%2Fuploads%2Fsites%2F19%2F2020%2F02%2F06_4a-300x300.jpg&w=384&q=75"
                className="h-20 w-20 object-cover rounded-md"
                alt=""
              />
            </td>
            <td className="py-5 max-w-[250px]">
              
                <div className="">
                  <h1 className="text-lg font-bold text-title">Bar S - Classic Bun Length Franks</h1>
                  <p className="text-color text-sm font-semibold">
                    Color: <span className="text-title">Black</span>
                  </p>
                  <p className="text-color text-sm font-semibold">
                    Size: <span className="text-title font-bold">M</span>
                  </p>
                </div>
              
            </td>
            <td className="py-5">$ 100</td>
            <td className="py-5">
              <div className="w-32">
                <Quantity />
              </div>
            </td>
            <td className="py-5">$ 100</td>
            <td className="py-5">
              <MdDelete className="text-2xl cursor-pointer" />
            </td>
          </tr> 
  );
};

export default CartTableRow;
