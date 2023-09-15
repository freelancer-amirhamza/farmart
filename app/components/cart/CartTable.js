import CartTableRow from "./CartTableRow";
import CartTableMobile from "./CartTableMobile";

const CartTable = () => {
  return (
    <div className="my-5">
      <table className="w-full md:table hidden">
        <thead className=" bg-gray-100 invisible md:visible ">
          <tr className="text-left">
            <th className="text-title py-5"></th>
            <th className="text-title py-5">Product</th>
            <th className="text-title py-5">Price</th>
            <th className="text-title py-5 pl-5">Quantity</th>
            <th className="text-title py-5">Total</th>
            <th className="text-title py-5"></th>
          </tr>
        </thead>
        <tbody>
          <CartTableRow />
          <CartTableRow />
        </tbody>
      </table>
      <CartTableMobile/>
      <CartTableMobile/>
    </div>
  );
};

export default CartTable;
