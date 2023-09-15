import CartActions from "@/app/components/cart/CartActions";
import CartTable from "@/app/components/cart/CartTable";
import Breadcrumb from "@/app/components/shared/Breadcrumb";


const cart = () => {
  return (
    <main>
      {/* Breadcrumb */}
      <div className="bg-[#F5F5F5] py-5">
        <div className="mx-auto max-w-5xl ">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Cart" }]}
          />
        </div>
      </div>
      <div className="p-5">
        <div className="mx-auto max-w-5xl mt-10">
          <h1 className="text-4xl text-center text-title font-bold mb-10">
            Cart
          </h1>
          <CartTable />
          <CartActions/>
        </div>
      </div>
    </main>
  );
};

export default cart;
